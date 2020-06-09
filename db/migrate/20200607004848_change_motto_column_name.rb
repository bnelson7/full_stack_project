class ChangeMottoColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :channels, :motto, :description
  end
end
