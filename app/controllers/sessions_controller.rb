class SessionsController < ApplicationController
    before_action :authenticate_user_from_token, only:[:destroy]
    respond_to :json
    # acts_as_token_authentication_handler_for User, fallback: :none
    
    def create
        user = User.find_by_email(session_params[:email])
        if user and user.valid_password?(session_params[:password])
            if user.approved
                user.generate_token
                render json: user.as_json({only: [:id,:email,:authentication_token]}),status: :created
            else
                render json: {message: "Your Account is Pending Approval"},status: :forbidden
            end
        else
            render json: {message: "Invalid Credentilas"}, status: :unauthorized
        end
    end
    
    def destroy
        # byebug
        # p "#{@user} this is destroy"
        if @user.update(authentication_token: nil)
            render json: {message: "You have successfully signed out"}
            # ,status: :no_content
        else
            render json: {errors: @user.errors},status: :bad_request
        end
    end
    
    private
    def session_params
        params.require(:session).permit(:email, :password)
    end
end
