json.partial! 'api/videos/video', video: @video
json.clipUrl url_for(@video.clip)
json.channel_id @video.channel.id

json.creator do
    json.partial! 'api/users/user', user: @video.creator

    if @video.creator.channels
        json.channels @video.creator.channels, partial: 'api/channels/channel', as: :channel
    end
end

json.comments @video.comments, partial: 'api/comments/comment', as: :comment

json.likes do
    json.like @video.number_liked(@video.id)
    json.dislike @video.number_disliked(@video.id)
end

if @video.channel
    json.channel @video.channel, partial: 'api/channels/channel', as: :channel
end







