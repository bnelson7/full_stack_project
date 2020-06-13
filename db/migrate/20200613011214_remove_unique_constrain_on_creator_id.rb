class RemoveUniqueConstrainOnCreatorId < ActiveRecord::Migration[5.2]
  def change
    remove_index :channels, :creator_id
    add_index :channels, :creator_id
  end
end
