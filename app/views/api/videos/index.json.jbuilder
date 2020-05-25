@videos.each do |video|
    json.set! video.id do 
        json.partial! 'api/videos/video', video: video

        json.created_at time_ago_in_words(video.created_at)
        json.updated_at time_ago_in_words(video.updated_at)
    
        json.creator do
            json.partial! 'api/users/user', user: video.creator
        end

        json.comments video.comments, partial: 'api/comments/comment', as: :comment

        json.likes do
            json.like video.number_liked(video.id)
            json.dislike video.number_disliked(video.id)
        end
    end
end