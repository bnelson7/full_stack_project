json.videos do

    json.set! @video.id do 
        json.partial! 'api/videos/video', video: @video
        json.clipUrl url_for(@video.clip)

        json.creator do
            json.partial! 'api/users/user', user: @video.creator
        end

        json.comments @video.comments, partial: 'api/comments/comment', as: :comment

        if !@video.likes.empty?
            json.likes do
                json.like @video.number_liked(@video.id)
                json.dislike @video.number_disliked(@video.id)
            end
        end

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


