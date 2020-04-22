class Api::VideosController < ApplicationController

    def show
        @video = Video.find(params[:id])
        @video.views += 1
        @video.save

        render :show
    end

    def index
        @videos = Video.all
        render :index
    end

    private

    def video_params
        params.require(:video).permit(:title, :photo, :video)
    end

end
