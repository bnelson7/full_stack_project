class RemoveIndexOnChannelIdAndUserId < ActiveRecord::Migration[5.2]
  def change
    remove_index :subscriptions, name: "index_subscriptions_on_channel_id"
    remove_index :subscriptions, name: "index_subscriptions_on_user_id"
  end
end
