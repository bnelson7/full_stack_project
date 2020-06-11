json.extract! video, :id, :title, :description, :views, :created_at, :updated_at, :channel_id
json.thumbnailUrl url_for(video.thumbnail)

if params.key?("search_query")
    json.clipUrl url_for(video.clip)
end