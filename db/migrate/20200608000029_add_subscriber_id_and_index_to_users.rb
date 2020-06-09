class AddSubscriberIdAndIndexToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :subscriber_id, :integer
    add_index :users, :subscriber_id, unique: true
  end
end
