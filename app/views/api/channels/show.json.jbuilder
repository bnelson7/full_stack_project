json.partial! 'api/channels/channel', channel: @channel

json.uploads do
    json.array! @channel.uploads do |upload|
        json.partial! 'api/videos/video', video: upload
        json.clipUrl url_for(upload.clip)
        
        if time_ago_in_words(upload.created_at).include?("about")
            json.created_at time_ago_in_words(upload.created_at).slice!(6..-1)
        else
            json.created_at time_ago_in_words(upload.created_at)
        end

        if time_ago_in_words(upload.updated_at).include?("about")
            json.updated_at time_ago_in_words(upload.updated_at).slice!(6..-1)
        else
            json.updated_at time_ago_in_words(upload.updated_at)
        end

        json.channel do 
            json.partial! 'api/channels/channel', channel: upload.channel
        end
    end
end

json.comments @channel.comments, partial: 'api/comments/comment', as: :comment

json.liked do
    @channel.video_likes.each do |like|
        json.videos do
            json.set! like.likeable_id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end

    @channel.comment_likes.each do |like|
        json.comments do
            json.set! like.likeable_id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end
end

json.subscriptions do
    json.array! @channel.subscriptions do |subscription|
        json.partial! 'api/channels/channel', channel: subscription
    end
end

if @channel.links
    json.links @channel.links
end