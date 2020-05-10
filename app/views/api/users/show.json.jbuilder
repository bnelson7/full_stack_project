json.partial! "api/users/user", user: @user

json.uploads @user.uploads, partial: 'api/videos/video', as: :video
json.comments @user.comments, partial: 'api/comments/comment', as: :comment
json.likes @user.likes, :id
 