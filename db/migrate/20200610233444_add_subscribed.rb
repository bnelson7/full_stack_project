class AddSubscribed < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :subscribed, :boolean, default: false
  end
end
