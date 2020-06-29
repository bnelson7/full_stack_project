class Api::ChannelsController < ApplicationController

    def index
        
        if params[:search_query]
            
            @channels = Channel.where(
                "lower(name) LIKE ?",  
                "%#{params[:search_query].downcase}%"
                )
            render :index
        else
            @channels = Channel.all
            render :index
        end 
    end

    def create
        
        @channel = Channel.new(channel_params)
        @channel.creator_id = current_user.id
        @channel.subscribed = 0
        
        if @channel.save
            
            render :show
        else
            
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def show
        if params[:search_query]
            
            @channel = Channel.where(
            "lower(name) LIKE ?",  
            "%#{params[:search_query].downcase}%"
            ).first
            
            render :show
        else
            @channel = Channel.find_by(id: params[:id])
            @channel.subscribed = @channel.subscribers.length

            if @channel
                render :show
            else
                render json: @channel.errors.full_messages, status: 422
            end
        end
    end

    def update
        
        @channel = Channel.find_by(id: params[:id])
        @channel.subscribed = @channel.subscribers.length
        # remove null false constraint on subscribed
    
        if params[:channel][:links] && @channel.update(links: @channel.links.push(params[:channel][:links]))

            
            render :show
        elsif @channel.update(channel_params)
            
            render :show
        else
            
            render json: @channel.errors.full_messages, status: 422
        end

    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        @channel.destroy
        render :show
    end

    def channel_params
        params.require(:channel).permit(:name, :description, :logo, :banner, :links)
    end

end
