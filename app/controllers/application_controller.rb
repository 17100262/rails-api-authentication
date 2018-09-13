class ApplicationController < ActionController::API
    # private
    # cattr_accessor :user
    private
    
    def authenticate_user_from_token
        @api_token = request.headers['Authorization']
        
        # p request.headers['User_Token']
        # byebug
        pattern = /^Bearer /
        header  = request.headers['Authorization']
        @api_token = header.gsub(pattern, '') if header && header.match(pattern)
        # p "#{@api_token} #{User.where(authentication_token: @api_token).first} hello world"
        

        if @api_token.present? && @user = User.where(authentication_token: @api_token).first
            # sign_in @user
            # return @user
            @user
            # self.user = @user
        else
            return render json: {message: "Invalid Token"},status: :unauthorized
        end
    end
end
