class RegistrationsController < ApplicationController
  
  respond_to :json
  def create
    user = User.new(sign_up_params)
    if user.save
      render json: user.as_json({only: [:id,:email,:authentication_token]}),status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :bad_request
    end
    
  end
  
  
  
  def sign_up_params
    params.require(:registration).permit(:email,:password,:password_confirmation,:firstname,:lastname)
  end
  
end
