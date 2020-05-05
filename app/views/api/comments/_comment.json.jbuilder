debugger
json.extract! comment, :id, :author_id, :video_id, :body, :replies, :created_at, :updated_at, :edited
if !comment.parent_comment_id.nil?
    json.extract! comment, :parent_comment_id 
end
