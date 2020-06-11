class DefaultSubscribersToZero < ActiveRecord::Migration[5.2]
  def change
    change_column :channels, :subscribed, :integer, :default => 0
  end
end
