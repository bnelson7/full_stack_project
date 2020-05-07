class DeleteColumnsInLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :like
    remove_column :likes, :dislike
  end
end
