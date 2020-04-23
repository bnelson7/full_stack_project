json.partial! 'video', video: @video
json.videoUrl url_for(@video.video)

if @videos 
    json.videos do
        @videos.each do |video|
            json.set! video.id do 
                json.partial! 'video', video: video
            end
        end
    end

