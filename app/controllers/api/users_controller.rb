class Api::UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
  
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = current_user

        # if params[:user][:likes]
        #     debugger
        #     render :show

        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.permit(:username, :email, :password, :photo, :likes)
    end

end
