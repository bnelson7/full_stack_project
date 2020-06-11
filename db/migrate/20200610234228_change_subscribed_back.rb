class ChangeSubscribedBack < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :subscribed
    add_column :channels, :subscribed, :integer
  end
end
