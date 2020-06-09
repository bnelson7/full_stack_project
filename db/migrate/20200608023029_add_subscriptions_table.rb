class AddSubscriptionsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :subscriptions, :user_id, :integer, null: false
    add_column :subscriptions, :channel_id, :integer, null: false
    add_index :subscriptions, :user_id, unique: true
    add_index :subscriptions, :channel_id, unique: true
  end
end
