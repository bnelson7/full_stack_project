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

    has_many :comments,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Comment

    has_many :likes,
        as: :likeable

    def number_liked(id)
        Like.all.where(liked: true, likeable_type: "Video", likeable_id: id).length
    end

    def number_disliked(id)
        Like.all.where(disliked: true, likeable_type: "Video", likeable_id: id).length
    end

    # def video_duration(url)
    #     debugger
    #     media_info = MediaInfo.from(url)
    # end

end
