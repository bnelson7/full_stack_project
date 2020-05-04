class Adddefaultvaluetocommenttable < ActiveRecord::Migration[5.2]
  def change
    change_column :comments, :replies, :integer, :default => 0
  end
end
