@comments.each do |comment|
    json.set! comment.id do 
        json.partial! "/api/comments/comment", comment: comment

        if !comment.child_comments.empty? 
            json.child_comments comment.child_comments, partial: 'api/comments/comment', as: :comment

            json.extract! comment, :parent_comment_id
        end
    end
end
