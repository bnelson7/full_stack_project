json.partial! "api/users/user", user: @user

json.channels @user.channels.sort_by { |channel| channel.id }, partial: 'api/channels/channel', as: :channel








 