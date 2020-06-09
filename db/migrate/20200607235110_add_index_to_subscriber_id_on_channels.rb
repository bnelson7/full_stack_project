class AddIndexToSubscriberIdOnChannels < ActiveRecord::Migration[5.2]
  def change
    add_index :channels, :subscriber_id, unique: true
  end
end
