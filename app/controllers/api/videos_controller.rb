class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render :index
    end
    
    def show
        @video = Video.find(params[:id])
        @video.views += 1
        @video.save

        @videos = Video.all
        render :show
    end

    def create
        @video = Video.new(video_params)

        if @video.save
            render json: { message: "successfully uploaded video!!!" }
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    private

    def video_params
        params.require(:video).permit(:title, :description, :thumbnail, :clip)
    end

end
