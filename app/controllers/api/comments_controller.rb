class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.order('id ASC').all.where(video_id: 14, parent_comment_id: nil)
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        @comment.video_id = params[:comment][:videoId]
        if @comment.parent_comment_id.nil? && params[:comment][:id]
            @comment.parent_comment_id = params[:comment][:id]
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
        @comment.edited = true if !@comment.edited
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
