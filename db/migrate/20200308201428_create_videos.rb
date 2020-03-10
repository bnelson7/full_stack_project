class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :description
      t.integer :views

      t.timestamps
    end
    add_index :videos, :user_id, unique: true
  end
end
