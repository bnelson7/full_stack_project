class Video < ApplicationRecord

    validates :title, presence: true

    has_one_attached :upload

    
end
