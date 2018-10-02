class User < ApplicationRecord
  # acts_as_token_authenticatable

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  has_many :campaigns
  has_attached_file :profile_picture,s3_protocol: :https, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :profile_picture, content_type: /\Aimage\/.*\z/
         
  def generate_token
    all_tokens = User.pluck(:authentication_token)
    loop do
      token = Devise.friendly_token
      break if not all_tokens.include?(token) and self.update(authentication_token: token) 
    end
  end
  
  def name
    [firstname, lastname].join(" ")
  end
  
  def user_campaigns
    campaigns.as_json({only:[:id,:project_title],methods: []})
  end
  
  def is_approved
    self.approved ? "Yes":"No"
  end
  
  def profile_picture_url
    profile_picture.url(:medium)
  end
  
  
  def as_json(options={})
    super({
      only: [:id,:firstname,:lastname,:biography,:website,:location],
      methods: [:user_campaigns,:profile_picture_url]
    }.merge(options))
  end
  
end
