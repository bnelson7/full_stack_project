class RenameUserId < ActiveRecord::Migration[5.2]
  def change
    rename_column :videos, :user_id, :creator_id
  end
end
