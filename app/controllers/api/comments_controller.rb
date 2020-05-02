class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all
    end

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render :index
        else

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
