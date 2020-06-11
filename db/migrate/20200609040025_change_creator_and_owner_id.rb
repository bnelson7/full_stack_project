class ChangeCreatorAndOwnerId < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :creator_id
    rename_column :channels, :owner_id, :creator_id
  end
end
