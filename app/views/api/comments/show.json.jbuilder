json.partial! "api/comments/comment", comment: @comment

if !@comment.replies.empty?
    json.replies @comment.replies, partial: 'api/comments/comment', as: :comment
end

