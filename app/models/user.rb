class User < ApplicationRecord
  # acts_as_token_authenticatable

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  def generate_token
    all_tokens = User.pluck(:authentication_token)
    loop do
      token = Devise.friendly_token
      break if not all_tokens.include?(token) and self.update(authentication_token: token) 
    end
  end
  
  def is_approved
    self.approved ? "Yes":"No"
  end
end
