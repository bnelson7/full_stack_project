# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  creator_id  :integer          not null
#  subscribed  :integer          default("0"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#  name        :string           not null
#
class Channel < ApplicationRecord

    validates :creator_id, presence: true

    has_one_attached :logo
    has_one_attached :banner

    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User
        
    has_many :uploads,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Video
    
    has_many :comments,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Comment

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like        

    has_many :channels_subscribed_to,
        primary_key: :id,
        foreign_key: :subscriber_id,
        class_name: :Subscription
        
    has_many :subscribed_channels,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Subscription

    has_many :subscriptions,
        through: :channels_subscribed_to,
        source: :channel

    has_many :subscribers,
        through: :subscribed_channels,
        source: :subscriber

    def video_likes
        self.likes.where(likeable_type: "Video")
    end

    def comment_likes
        self.likes.where(likeable_type: "Comment")
    end

end
