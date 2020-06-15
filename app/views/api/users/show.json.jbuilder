json.partial! "api/users/user", user: @user

json.channels @user.channels, partial: 'api/channels/channel', as: :channel








 