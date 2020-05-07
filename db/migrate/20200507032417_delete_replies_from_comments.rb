class DeleteRepliesFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :replies
  end
end
