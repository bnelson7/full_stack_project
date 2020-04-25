json.partial! 'api/videos/video', video: @video
json.clipUrl url_for(@video.clip)


@videos.each do |video|
    json.set! video.id do 
        json.partial! 'api/videos/video', video: video
    end
end


