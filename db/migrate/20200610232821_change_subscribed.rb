class ChangeSubscribed < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :subscribed
  end
end
