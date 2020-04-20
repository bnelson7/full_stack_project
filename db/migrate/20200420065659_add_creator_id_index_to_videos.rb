class AddCreatorIdIndexToVideos < ActiveRecord::Migration[5.2]
  def change
    add_index :videos, [:creator_id, :title] 
  end
end
