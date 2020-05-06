json.extract! comment, :id, :author_id, :video_id, :body, :replies, :created_at, :updated_at, :edited
debugger
if !comment.parent_comment_id.nil?
    json.extract! comment, :parent_comment_id
end

if !comment.child_comments.empty?
debugger 
    json.child_comments comment.child_comments, partial: 'api/comments/comment', as: :comment
end

json.author do
    json.partial! "api/users/user", user: comment.author
end

