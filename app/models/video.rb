# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  creator_id  :integer          not null
#  title       :string           not null
#  description :string
#  views       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  upload_date :string
#
class Video < ApplicationRecord

    validates :title, :creator_id, presence: true

    has_one_attached :thumbnail

    has_one_attached :clip

    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User
end
