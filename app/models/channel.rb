# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  owner_id    :integer          not null
#  subscribed  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#  name        :string           not null
#
class Channel < ApplicationRecord

    validates :owner_id, :subscribers, presence: true

    # has_one_attached :logo
    # has_one_attached :banner

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User
        
    has_many :uploads,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Video

    has_many :subscriptions

    has_many :subscribers,
        through: :subscriptions,
        source: :subscriber

end
