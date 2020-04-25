# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all

demo_user = User.create(username: 'DemoUser', password: 'password', email: 'demouser@gmail.com')
joe = User.create(username: 'drinkingpolitical', password: 'password', email: 'joe@gmail.com')
marshall = User.create(username: 'covidHandWash', password: 'password', email: 'marshall@gmail.com')
hayden = User.create(username: 'twineflasher', password: 'password', email: 'hayden@gmail.com')
brad = User.create(username: 'hawaii-five-oh', password: 'password', email: 'brad@gmail.com')

users = [[joe, "joe.jpg"], [marshall, "marshall.png"], [hayden, "hayden.jpg"], [brad, "brad.jpg"]]

(0...users.length).each do |i|
    file2 = users[i][1]
    file = EzDownload.open("https://adtube-aa-dev.s3-us-west-1.amazonaws.com/#{file2}")
    users[i][0].photo.attach(io: file, filename: file2)
end


air_balloons = Video.create(title: "Woman walks towards air balloons", description: "A woman walks towards hot air baloons on a cliff for some reason", views: 203, creator_id: demo_user.id)
road = Video.create(title: 'Driving on a road', description: "for those moments at the end of a long day when you just want to drive", views: 35, creator_id: marshall.id)
tropical = Video.create(title: "A tropical beach", description: "Majestic Casual - Experience music in a new way and chill on a beach", views: 499, creator_id: brad.id)
bridge = Video.create(title: 'A Bridge', description: "Look on down from the bridge", views: 135, creator_id: joe.id)
surfing = Video.create(title: 'Guy surfing', description: "Cool surfing video. Those waves look gnarly", views: 766, creator_id: demo_user.id)
dog = Video.create(title: 'Dog on beach', description: "This is the hilarious moment a dog got so annoyed and chased it's tail on a beach. He seems so happy. This is why I love dogs", views: 556, creator_id: brad.id)
fish = Video.create(title: 'School of fish', description: "This is some Planet Earth shit right here", views: 146, creator_id: hayden.id)
seal = Video.create(title: 'Seal on beach', description: "This is some more Planet Earth shit I guess", views: 279, creator_id: marshall.id)
waterfall = Video.create(title: 'A waterfall', description: "Isolated waterfalls and had to get a video with sound.", views: 109, creator_id: hayden.id)
mountains = Video.create(title: 'Beautiful mountains', description: "Where I want to be.", views: 89, creator_id: demo_user.id)

videos = [[air_balloons, "air_balloons"], [road, "road"], [tropical, "tropical"], [bridge, "bridge"], [surfing, "surfing"], [dog, "dog"], [fish, "fish"], [seal, "seal"], [waterfall, "waterfall"], [mountains, "mountains"]]

(0...videos.length).each do |i|
    file2 = videos[i][1]
    file = EzDownload.open("https://adtube-aa-dev.s3-us-west-1.amazonaws.com/#{file2}.png")
    file1 = EzDownload.open("https://adtube-aa-dev.s3-us-west-1.amazonaws.com/#{file2}.mp4")
    videos[i][0].thumbnail.attach(io: file, filename: "#{file2}.png")
    videos[i][0].clip.attach(io: file1, filename: "#{file2}.mp4")
end