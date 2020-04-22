
    json.extract! @video, :id, :title, :description, :views, :upload_date
    json.videoUrl url_for(@video.video)
