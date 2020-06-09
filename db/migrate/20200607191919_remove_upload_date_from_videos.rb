class RemoveUploadDateFromVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :upload_date
  end
end
