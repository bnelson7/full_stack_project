class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.order('id ASC').all.where(video_id: params[:video_id], parent_comment_id: nil)
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        @comment.video_id = params[:comment][:videoId]
        
        if @comment.parent_comment_id.nil? && params[:comment][:id]
            @comment.parent_comment_id = params[:comment][:id]
        end 
        
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        @comment.edited = true if !@comment.edited
        
        if @comment.update(comment_params)
            render :show
        else
            
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
        render :show
    end

    def comment_params
        params.require(:comment).permit(:body)
    end
end
