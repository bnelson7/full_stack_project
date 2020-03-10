@videos.each do |video|
    json.set! video.id do 
        json.extract! video, :id, :title
        json.uploadUrl url_for(video.upload) 
    end
end