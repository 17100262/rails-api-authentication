class UsersController < ApplicationController
    before_action :authenticate_user_from_token
    # before_action :set_user, only: [:update]
    # ,only:[:profile]
    def profile
        p @user.as_json
        render json: @user.as_json
    end
    
    def update
        if @user.update(profile_params)
          render json: {user: @user.as_json,status: 200,message: "User Profile Updated Successfully"},status: :ok
        else
          render json: {message: @user.errors.full_messages,status: 422}, status: :unprocessable_entity
        end
        
    end
    
    private
    
    
    def user_params
        params.require(:user).permit(:firstname,:lastname,:password,:email,:password_confirmation)
    end
    
    def profile_params
        params.require(:user).permit(:firstname,:lastname,:profile_picture,:biography,:location,:website)
    end
    
    
end
