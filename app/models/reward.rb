class Reward < ApplicationRecord
  validates :title, presence: true
  belongs_to :campaign
  def as_json(options={})
    super({
      only: [:id,:title,:description,:pledge_amount,:estimated_delivery]
    }.merge(options))
  end
end
