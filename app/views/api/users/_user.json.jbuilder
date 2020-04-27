json.extract! user, :id, :username, :email
if url_for(user.photo)
    json.photoUrl url_for(user.photo)
end