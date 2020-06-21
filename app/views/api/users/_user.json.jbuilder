json.extract! user, :id, :username, :email, :created_at, :updated_at

if user.channels.first.logo.attached?
    json.photoUrl url_for(user.channels.first.logo)
end



 



