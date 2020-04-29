class Api::VideosController < ApplicationController

    def index
        @videos = Video.all.shuffle
        render :index
    end
    
    def show
     debugger
        if params[:title]
            @video = Video.find_by(title: params[:title])
            debugger
            # render :index
        else
            @video = Video.find(params[:id])
            @video.views += 1
            @video.save

            @videos = Video.all

        end
        render :show
    end

    def create
        @video = Video.new(video_params)
        @video.views = 0
        @video.creator_id = current_user.id
        debugger
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def update
        @video = Video.find(params[:id])

        debugger
        if @video.update(video_params)
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = Video.find(params[:id])
        debugger
        @video.destroy
        render :show
    end

    private

    def video_params
        params.require(:video).permit(:title, :description, :thumbnail, :clip)
    end

end
