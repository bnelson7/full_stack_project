class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :video_id, null: false
      t.integer :replies

      t.timestamps
    end
  end
end
