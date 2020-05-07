class AddColumnsToLikesUpdated < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :liked, :boolean, null: false, default: false 
    add_column :likes, :disliked, :boolean, null: false, default: false 
  end
end
