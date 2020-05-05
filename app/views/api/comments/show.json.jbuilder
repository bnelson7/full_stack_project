json.partial! "api/comments/comment", comment: @comment
debugger
if !@comment.parent_comment_id.nil?
debugger
    json.extract! @comment, :parent_comment_id 
end

debugger
if @comment.child_comments.length > 0
debugger
    json.child_comments @comment.child_comments, partial: 'api/comments/comment', as: :comment
end

json.author do
    json.partial! "api/users/user", user: @comment.author
end
