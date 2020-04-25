json.extract! video, :id, :title, :description, :views, :created_at, :creator_id
json.thumbnailUrl url_for(video.thumbnail)