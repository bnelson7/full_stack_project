class RemoveUniqueOnChannelId < ActiveRecord::Migration[5.2]
  def change
    remove_index :videos, :channel_id
    add_index :videos, :channel_id
  end
end
