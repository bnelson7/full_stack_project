class Api::ChannelsController < ApplicationController

    def create
        @channel = Channel.new(channel_params)
        @channel.subscribers = 0
        @channel.owner_id = current_user.id
        debugger
        if @channel.save
            debugger
            render :show
        else
            debugger
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def show
        @channel = Channel.find_by(id: params[:id])
        @channel.subscribed = @channel.subscribers.length

        if @channel
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def update
        @channel = Channel.find_by(id: params[:id])
        
        debugger
        if @channel.update(channel_params)
            debugger
            render :show
        else
            debugger
            render json: @channel.errors.full_messages, status: 422
        end

    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        @channel.destroy
        render :show
    end

    def channel_params
        params.require(:channel).permit(:name, :description)
    end

end
