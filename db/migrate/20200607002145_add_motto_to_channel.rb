class AddMottoToChannel < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :motto, :string
  end
end
