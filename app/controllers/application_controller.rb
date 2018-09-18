class ApplicationController < ActionController::API
    
    include CanCan::ControllerAdditions
    attr_accessor :current_user

    rescue_from CanCan::AccessDenied do |exception|
        render json: {message: "You are not Authorized",status: 403},status: :forbidden
    end
    
    def required_params_present?(params, * parameters)
        @errors = []
        if params
            parameters.each do |param|
              if params[param].blank?
                # @response[:code] = 0
                @errors << "#{param.to_s} cannot be left blank"
              end
            end
            @errors.blank? ? true : false
        else
            @errors << "Params can't be blank"
            false
        end
    end
    
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
            self.current_user = @user
            # self.user = @user
        else
            return render json: {message: "Invalid Token",status: 401},status: :unauthorized
        end
    end
end
