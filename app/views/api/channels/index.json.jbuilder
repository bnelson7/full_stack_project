@channels.each do |channel|
    json.set! channel.id do 
        json.partial! 'api/channels/channel', channel: channel

        json.uploads do
            json.array! channel.uploads do |upload|
                json.partial! 'api/videos/video', video: upload
            end
        end

    end
end

