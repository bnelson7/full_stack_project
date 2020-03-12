@videos.each do |video|
    json.set! video.id do 
        json.extract! video, :id, :title, :description, :views, :upload_date
        json.uploadUrl url_for(video.upload) 
    end
end