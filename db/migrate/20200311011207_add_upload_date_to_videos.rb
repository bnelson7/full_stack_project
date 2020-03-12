class AddUploadDateToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :upload_date, :string
  end
end
