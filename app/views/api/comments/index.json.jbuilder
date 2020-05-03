@comments.each do |comment|
    json.set! comment.id do 
        json.partial! "/api/comments/comment", comment: comment

        json.author do 
            json.partial! "/api/users/user", user: comment.author
        end
    end
end
