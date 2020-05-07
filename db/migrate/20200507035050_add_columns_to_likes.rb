class AddColumnsToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :like, :integer, null: false, default: 0
    add_column :likes, :dislike, :integer, null: false, default: 0
  end
end
