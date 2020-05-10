json.partial! "api/users/user", user: @user

json.uploads @user.uploads, partial: 'api/videos/video', as: :video
json.comments @user.comments, partial: 'api/comments/comment', as: :comment
json.liked do
    json.videos  @user.video_likes.pluck(:likeable_id)
    json.comments  @user.comment_likes.pluck(:likeable_id)
 end


 