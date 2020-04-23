@videos.each do |video|
    json.set! video.id do 
        json.partial! 'video', video: video
    end

    json.users do
        json.set! video.creator_id do
            json.partial! 'api/users/user', user: video.creator
        end
    end
end