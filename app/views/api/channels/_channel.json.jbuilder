json.extract! channel, :id, :name, :creator_id, :subscribed, :subscribers, :description, :created_at, :updated_at

if channel.logo.attached?
    json.logoUrl url_for(channel.logo)
end

if channel.banner.attached?
    json.bannerUrl url_for(channel.banner)
end


