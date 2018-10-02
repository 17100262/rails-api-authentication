class Category < ApplicationRecord
    validates :name, presence: true,allow_nil: false
end
