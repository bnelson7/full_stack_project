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
    end
end