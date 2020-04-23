json.extract! video, :id, :title, :description, :views, :upload_date, :creator_id
json.photoUrl url_for(video.photo)