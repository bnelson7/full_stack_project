# == Schema Information
#
# Table name: subscriptions
#
#  id            :bigint           not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  subscriber_id :integer          not null
#  channel_id    :integer          not null
#
class Subscription < ApplicationRecord

    validates :channel, :subscriber, presence: true
    # validates :channel, uniqueness: { scope: :subscriber }
    validate :subscribe_to_own_channel

    # want channels creator id cant be the same as subscribers (which is a channel) creator id
    # also channels cant subscribe to same channel

    belongs_to :subscriber,
        primary_key: :id,
        foreign_key: :subscriber_id,
        class_name: :Channel

    belongs_to :channel,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Channel

    private

    def subscribe_to_own_channel
        
        if self.subscriber.creator_id == self.channel.creator_id
            errors[:subscriber] << "Can't subscribe to own channel"
        end
    end

end
