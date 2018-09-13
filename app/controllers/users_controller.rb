class UsersController < ApplicationController
    before_action :authenticate_user_from_token
    # ,only:[:profile]
    def profile
        render json: @user.as_json({only: [:id,:email,:firstname,:lastname]})
    end
    
    def update
        
    end
    
    private
    
    def user_params
        params.require(:user).permit(:firstname,:lastname,:password,:email,:password_confirmation)
    end
    
    
end
