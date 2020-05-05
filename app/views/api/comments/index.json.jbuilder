@comments.each do |comment|
    if comment.parent_comment_id.nil?
        json.set! comment.id do 
            json.partial! "/api/comments/comment", comment: comment

            if comment.child_comments.length > 0
                json.child_comments comment.child_comments, partial: 'api/comments/comment', as: :comment
            end

            json.author do 
                json.partial! "/api/users/user", user: comment.author
            end
        end
    end
end
