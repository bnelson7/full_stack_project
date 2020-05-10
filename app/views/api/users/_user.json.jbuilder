json.extract! user, :id, :username, :email, :created_at, :updated_at

if url_for(user.photo)
    json.photoUrl url_for(user.photo)
end
 



