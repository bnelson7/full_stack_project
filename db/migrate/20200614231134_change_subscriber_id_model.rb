class ChangeSubscriberIdModel < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :subscriber_id, :integer
    add_index :channels, :subscriber_id
  end
end
