json.partial! "api/comments/comment", comment: @comment

if !@comment.parent_comment_id.nil?
    json.extract! @comment, :parent_comment_id 
end

json.author do
    json.partial! "api/users/user", user: @comment.author
end
