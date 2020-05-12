# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  author_id         :integer          not null
#  video_id          :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  parent_comment_id :integer
#  edited            :boolean          default("false")
#
class Comment < ApplicationRecord

    validates :body, :author_id, :video_id, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video

    belongs_to :parent_comment,
        primary_key: :id,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        optional: true

    has_many :replies,
        primary_key: :id,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        dependent: :destroy

    has_many :likes,
        as: :likeable

    def number_liked(id)
        Like.all.where(liked: true, likeable_type: "Comment", likeable_id: id).length
    end

    def number_disliked(id)
        Like.all.where(disliked: true, likeable_type: "Comment", likeable_id: id).length
    end

end
