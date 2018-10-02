class CategoriesController < ApplicationController
  before_action :authenticate_user_from_token, except: [:index,:show]
  before_action :set_category, only: [:show, :update, :destroy]
  authorize_resource

  # GET /categories
  def index
    @categories = Category.all

    render json: {categories: @categories.as_json({only: [:id,:name]}) ,status: 200}, status: :ok
  end

  # GET /categories/1
  def show
    render json: {category: @category,status: 200},status: :ok
  end

  # POST /categories
  def create
    @category = Category.new(category_params)

    if @category.save
      render json: {category: @category, status: 201,message:"Category created successfully"},status: :created
    else
      render json: {message: @category.errors.full_messages, status: 422}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: {category: @category,status: 200,message: "Category Updated Successfully"}
    else
      render json: {message: @category.errors.full_messages,status: 422 },status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  def destroy
    @category.destroy
    render json: {message: "Category deleted successfully",status: 204}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def category_params
      params.require(:category).permit(:name)
    end
end
