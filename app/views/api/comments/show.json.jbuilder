json.partial! "/api/comments/comment", comment: @comment
debugger
json.author do
    json.partial! "/api/users/user", user: @comment.author
end
