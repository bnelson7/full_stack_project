class AddChannelIdAndIndexToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :channel_id, :integer
    add_index :videos, :channel_id, unique: true
  end
end
