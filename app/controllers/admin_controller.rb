class AdminController < ApplicationController
    respond_to :json
    before_action :authenticate_user_from_token
    authorize_resource :class => false


    def user_management
        @users = User.all
        
        render json: {users: @users.as_json({
            only: [:id,:firstname,:lastname,:email],
            methods: [:is_approved]
        }),status: 200},status: :ok
    end
    
    def approve_user
        if required_params_present?(params[:admin],"user_id","approved")
            @user = User.find_by_id(params[:admin][:user_id])
            if @user
                if @user.update(approved: params[:admin][:approved])
                    render json: {message: "User has been #{@user.approved ? 'approved':'blocked'}",status: 200}, status: :ok
                else
                    render json: {message: @user.errors.full_messages, status: 422}, status: :unprocessable_entity
                end
            else
                render json: {message: "User not found", status: 422}, status: :unprocessable_entity
            end
        else
            render json: {message: @errors.join(","), status: 400}, status: :bad_request
        end
        # 
    end
    
end
