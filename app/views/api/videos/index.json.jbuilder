@videos.each do |video|
    json.set! video.id do 
        json.extract! video, :id, :title, :description, :views, :upload_date
        json.photoUrl url_for(video.photo)
    end
end