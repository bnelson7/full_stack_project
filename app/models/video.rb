class Video < ApplicationRecord

    validates :title, presence: true

    has_one_attached :photo

    has_one_attached :video
end
