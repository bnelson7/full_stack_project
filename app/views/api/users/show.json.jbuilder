json.partial! "api/users/user", user: @user

json.uploads @user.uploads, partial: 'api/videos/video', as: :video
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


 