class AddSubscriberIdToChannel < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :subscriber_id, :integer
  end
end
