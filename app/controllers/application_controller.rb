class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token

    helper_method :logged_in?, :current_user

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: [:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout
        current_user.try(:reset_session_token!)
        session[:session_token] = nil
    end

    # def require_login
    #     redirect_to new_session_url unless current_user
    # end

    def require_logged_in
        render json: { base: ['invalid credentials'] }, status: 401 unless current_user
    end

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end
