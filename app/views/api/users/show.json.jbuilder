json.partial! "api/users/user", user: @user

json.uploads do
    json.array! @user.uploads do |upload|
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
    end
end

json.comments @user.comments, partial: 'api/comments/comment', as: :comment

json.liked do
    @user.video_likes.each do |like|
        json.videos do
            json.set! like.likeable_id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end

    @user.comment_likes.each do |like|
        json.comments do
            json.set! like.likeable_id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end
 end

json.channels @user.channels, partial: 'api/channels/channel', as: :channel

json.subscriptions @subscriptions, partial: 'api/channels/channel', as: :channel




 