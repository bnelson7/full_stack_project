json.videos do
    json.set! @video.id do 
        json.partial! 'api/videos/video', video: @video
        json.clipUrl url_for(@video.clip)

        json.creator do
            json.partial! 'api/users/user', user: @video.creator
        end

        json.comments @video.comments, partial: 'api/comments/comment', as: :comment
    end
    @videos.each do |video|
        json.set! video.id do 
            json.partial! 'api/videos/video', video: video

            json.creator do
                json.partial! 'api/users/user', user: video.creator
            end

            json.comments video.comments, partial: 'api/comments/comment', as: :comment
        end
    end
end


