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
        debugger
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def update
        @video = Video.with_attached_clip.find(params[:id])
        @videos = Video.where.not(id: params[:id]).all.with_attached_thumbnail.order(Arel.sql('RANDOM()'))
        debugger
        if params[:video][:alreadyLiked]
            debugger
            like = Like.where(liker_id: current_user.id, likeable_type: "Video", likeable_id: params[:id])
            like.destroy_all
        else
            like = Like.create(liker_id: current_user.id, likeable_type: "Video", likeable_id: params[:id], liked: params[:video][:liked], disliked: params[:video][:disliked])
            current_user.add_video_like(like.id)
        end

        debugger
        if @video.update(video_params)
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = Video.with_attached_clip.find(params[:id])
        debugger
        @video.destroy
        render :show
    end

    private

    def video_params
        debugger
        params.require(:video).permit(:title, :description, :thumbnail, :clip)
    end

end
