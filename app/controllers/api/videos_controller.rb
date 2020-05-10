class Api::VideosController < ApplicationController

    def index
        @videos = Video.all.with_attached_thumbnail.order(Arel.sql('RANDOM()'))
        render :index
    end
    
    def show
        if params[:search_query]
            @videos = Video.where("lower(title) LIKE ? OR lower(description) LIKE ?", 
            "%#{params[:search_query].downcase}%", 
            "%#{params[:search_query].downcase}%")

            render :index
        else
            @video = Video.with_attached_clip.find(params[:id])
            @video.views += 1
            @video.save
     
            @videos = Video.where.not(id: params[:id]).all.with_attached_thumbnail.order(Arel.sql('RANDOM()'))
            render :show
        end
    end

    def create
        @video = Video.new(video_params)
        @video.views = 0
        @video.creator_id = current_user.id
        
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def update
        debugger
        @video = Video.with_attached_clip.find(params[:id])
        @videos = Video.where.not(id: params[:id]).all.with_attached_thumbnail.order(Arel.sql('RANDOM()'))
        
        if params[:video][:likes]
            debugger
            render :show
        elsif @video.update(video_params)
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end

    end

    def destroy
        @video = Video.with_attached_clip.find(params[:id])
        
        @video.destroy
        render :show
    end

    private

    def video_params
        
        params.require(:video).permit(:title, :description, :thumbnail, :clip, :likes)
    end

end
