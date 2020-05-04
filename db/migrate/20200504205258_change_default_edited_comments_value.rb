class ChangeDefaultEditedCommentsValue < ActiveRecord::Migration[5.2]
  def change
    change_column_default :comments, :edited, from: true, to: false
  end
end
