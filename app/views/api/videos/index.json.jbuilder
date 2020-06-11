@videos.each do |video|
    json.set! video.id do 
        json.partial! 'api/videos/video', video: video

        if time_ago_in_words(video.created_at).include?("about")
            json.created_at time_ago_in_words(video.created_at).slice!(6..-1)
        else
            json.created_at time_ago_in_words(video.created_at)
        end

        if time_ago_in_words(video.updated_at).include?("about")
            json.updated_at time_ago_in_words(video.updated_at).slice!(6..-1)
        else
            json.updated_at time_ago_in_words(video.updated_at)
        end
    
        json.channel do
            json.partial! 'api/channels/channel', channel: video.channel
        end

        json.upload_date video.created_at

        json.comments video.comments, partial: 'api/comments/comment', as: :comment

        json.likes do
            json.like video.number_liked(video.id)
            json.dislike video.number_disliked(video.id)
        end
    end
end