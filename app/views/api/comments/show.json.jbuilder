json.partial! "api/comments/comment", comment: @comment

if !@comment.child_comments.empty?
    json.child_comments @comment.child_comments, partial: 'api/comments/comment', as: :comment
end

