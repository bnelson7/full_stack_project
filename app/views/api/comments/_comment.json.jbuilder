json.extract! comment, :id, :author_id, :video_id, :body, :edited, :created_at, :updated_at

json.likes do
    json.like comment.number_liked(comment.id)
    json.dislike comment.number_disliked(comment.id)
end

if !comment.parent_comment_id.nil?
    json.extract! comment, :parent_comment_id
end

if !comment.replies.empty? 
    json.replies comment.replies, partial: 'api/comments/comment', as: :comment
end

json.author do
    json.partial! "api/users/user", user: comment.author
end

