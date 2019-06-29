class CampaignsController < ApplicationController
  respond_to :json
  before_action :authenticate_user_from_token
  authorize_resource
  before_action :set_campaign, only: [:show, :update, :destroy]
  

  # GET /campaigns
  def index
    @campaigns = Campaign.all
    render json: {campaigns: @campaigns.as_json({only:[:id,:project_title],methods: [:user_name]}),status: 200},status: :ok
  end

  # GET /campaigns/1
  def show
    puts @campaign.as_json
    render json: {campaign: @campaign.as_json,status: 200},status: :ok
  end

  # POST /campaigns
  def create
    @campaign = Campaign.new(campaign_params)
    @campaign.user_id = @user.id
    if @campaign.save
      render json: {campaign: @campaign,status: 201,message: "Campaign Created Successfully"}, status: :created, location: @campaign
    else
      render json: {message: @campaign.errors.full_messages.join(","),status: 422}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /campaigns/1
  def update
    if @campaign.update(campaign_params)
      render json: {campaign: @campaign,status: 200},status: :ok
    else
      render json: {message: @campaign.errors.full_messages,status: 422}, status: :unprocessable_entity
    end
  end

  # DELETE /campaigns/1
  def destroy
    @campaign.destroy
    render json: {message: "Campaign Destroyed Successfully",status: 204}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_campaign
      @campaign = Campaign.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def campaign_params
      params.require(:campaign).permit(:category_id,:country,:project_video,:project_description,:risk_and_challenge,:project_image,:project_title,:short_blurb,:project_location,:funding_duration,:funding_goal,:user_id,rewards_attributes: [:title,:pledge_amount,:description,:estimated_delivery,:_destroy, :id],project_faqs_attributes: [:title,:description,:id,:_destroy],user_attributes: [:firstname,:lastname])
    end
end
