class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all.where(video_id: params[:video_id])
        debugger
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        @comment.video_id = params[:comment][:videoId]
        if @comment.parent_comment_id.nil?
            @comment.parent_comment_id = params[:comment][:id]
            parent = Comment.find_by(id: @comment.parent_comment_id)
            debugger
            parent.replies += 1
            parent.save
            debugger
        end 
        debugger
    
        if @comment.save
            debugger 
            render :show
        else
            debugger
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        debugger
        if @comment.update(comment_params)
            render :show
        else
            debugger
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        debugger
        @comment.destroy
        render :show
    end

    def comment_params
        params.require(:comment).permit(:body)
    end
end
