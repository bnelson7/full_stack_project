# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  liker_id      :integer          not null
#  likeable_type :string           not null
#  likeable_id   :bigint           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  liked         :boolean          default("false"), not null
#  disliked      :boolean          default("false"), not null
#
class Like < ApplicationRecord

    validates :liker, :likeable, presence: true
    validates :liker, uniqueness: { scope: [:likeable] }
    # validates :liked, uniqueness: { scope: [:disliked] }, unless: Proc.new { |like| like == false }

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :likeable,
       polymorphic: true,
       optional: true

end
