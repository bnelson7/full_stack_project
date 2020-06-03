json.extract! video, :id, :title, :description, :views, :created_at, :updated_at, :creator_id
json.thumbnailUrl url_for(video.thumbnail)

if params[:search_query]
    json.clipUrl url_for(video.clip)
end