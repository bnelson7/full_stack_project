class ChangeUserIdToSubscriberId < ActiveRecord::Migration[5.2]
  def change
    rename_column :subscriptions, :user_id, :subscriber_id
  end
end
