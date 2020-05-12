@comments.each do |comment|
    json.set! comment.id do 
        json.partial! "/api/comments/comment", comment: comment
  
        if !comment.replies.empty? 
            json.replies comment.replies, partial: 'api/comments/comment', as: :comment

            json.extract! comment, :parent_comment_id
        end
    end
end
