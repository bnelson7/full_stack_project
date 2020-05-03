class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render :index
    end

    def show

    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        @comment.video_id = params[:comment][:videoId]
        if @comment.parent_comment_id.nil?
            @comment.parent_comment_id = @comment.id
        end 
        debugger
    
        if @comment.save
            render :show
        else
            debugger
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])

        if @comment.update(comment_params)

        else

        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])

        if @comment
            @comment.destroy
        else

        end

    end

    def comment_params
        params.require(:comment).permit(:body)
    end
end
