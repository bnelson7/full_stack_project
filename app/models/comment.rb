# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  author_id         :integer          not null
#  video_id          :integer          not null
#  replies           :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  parent_comment_id :integer
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

    has_many :child_comments,
        primary_key: :id,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        dependent: :destroy

end
