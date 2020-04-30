json.videos do
    json.set! @video.id do 
        json.partial! 'api/videos/video', video: @video
        json.clipUrl url_for(@video.clip)

        json.creator do
            json.partial! 'api/users/user', user: @video.creator
        end
    end
    @videos.shuffle.each do |video|
        json.set! video.id do 
            json.partial! 'api/videos/video', video: video

            json.creator do
                json.partial! 'api/users/user', user: video.creator
            end
        end
    end
end



