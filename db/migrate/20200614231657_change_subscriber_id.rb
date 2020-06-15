class ChangeSubscriberId < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :subscriber_id
  end
end
