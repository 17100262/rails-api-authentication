class Campaign < ApplicationRecord
    has_attached_file :project_image, s3_protocol: :https,styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
    validates_attachment_content_type :project_image, content_type: /\Aimage\/.*\z/
    
    has_attached_file :project_video, s3_protocol: :https, :styles => {
    :medium => { :geometry => "640x480", :format => 'mp4' },
    :thumb => { :geometry => "100x100#", :format => 'jpg', :time => 10 }
  }, :processors => [:transcoder]    
    validates_attachment_content_type :project_video, :content_type => /\Avideo\/.*\Z/
    
    
    has_many :rewards, dependent: :destroy
    has_many :project_faqs, dependent: :destroy
    accepts_nested_attributes_for :rewards, allow_destroy: true
    accepts_nested_attributes_for :project_faqs, allow_destroy: true
  
    belongs_to :category
    belongs_to :user
    
    def project_image_url
      project_image.url
    end
    def project_video_url
      project_video.url
    end
    def category_name
      category.name
    end
    def user_name
      user.name
    end
    def campaign_rewards
      self.rewards
    end
    def campaign_faqs
      self.project_faqs
    end
    
    def user_profile_picture_url
      user.profile_picture_url
    end
    
    def as_json(options={})
      super({
        only: [:id,:category_id,:country,:project_description,:risk_and_challenge,:project_title,:short_blurb,:project_location,:funding_duration,:funding_goal,:user_id],
        methods: [:category_name,:project_video_url,:project_image_url,:user_name,:campaign_faqs,:campaign_rewards,:user_profile_picture_url]
      }.merge(options))
    end
end
