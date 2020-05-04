class AddEditedToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :edited, :boolean, :default => true
  end
end
