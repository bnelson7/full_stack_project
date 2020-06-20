class AddNotificationsAndLinks < ActiveRecord::Migration[5.2]
  def change
    add_column :subscriptions, :notifications, :boolean, default: true
    add_column :channels, :links, :string, array: true, default: '{}'
  end
end
