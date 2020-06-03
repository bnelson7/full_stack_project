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
Comment.destroy_all
Like.destroy_all

# users

demo_user = User.create(username: 'DemoUser', password: 'password', email: 'demouser@gmail.com')
brad = User.create(username: 'VoodooChile69', password: 'password', email: 'brad@gmail.com')
hayden = User.create(username: 'yeahhh Thatd b Grt', password: 'password', email: 'hayden@gmail.com')
marshall = User.create(username: 'CovidHandWash19', password: 'password', email: 'marshall@gmail.com')
joe = User.create(username: 'JustDoItYo', password: 'password', email: 'joe@gmail.com')
j = User.create(username: 'jazzCat98', password: 'password', email: 'milesUCDavis@gmail.com')
tom = User.create(username: 'ScrubsSporter94', password: 'password', email: 'tom333@gmail.com')
bill = User.create(username: 'rattle_snake_venom???', password: 'password', email: 'williamrussell@gmail.com')
sarah = User.create(username: 'Cannery Row', password: 'password', email: 'sarahmartin90@gmail.com')
julio = User.create(username: 'Julio Cortez', password: 'password', email: 'juliocortez@gmail.com')
daniel = User.create(username: 'Hilarious Elixir', password: 'password', email: 'mrfunnyman@gmail.com')
mike = User.create(username: 'golffluclinic', password: 'password', email: 'golfaddict@gmail.com')
kelly = User.create(username: 'hawaii-five-oh', password: 'password', email: 'surferGurrrll@gmail.com')
karim = User.create(username: "Karim Abdul-Jabbar", password: 'password', email: 'tennismaster@university.edu')
zooey = User.create(username: "who's that girl?", password: 'password', email: 'newgirl@gmail.com')
roger = User.create(username: 'whisper...Ricky Spanish...', password: 'password', email: 'rickyspanish@gmail.com')
michelle = User.create(username: 'AchillesHighHeels', password: 'password', email: 'highHeelBabe@company.org')
ali = User.create(username: 'psych-o-hippie-chick', password: 'password', email: 'psych-o@university.edu')
chris = User.create(username: 'summerOfLove67', password: 'password', email: 'brotherpeace@gmail.com')
omar = User.create(username: 'SunriseTaco34', password: 'password', email: 'tacoman@gmail.com')
jessie = User.create(username: 'Full-Frontal Music', password: 'password', email: 'jessiesgirl@gmail.com')
natalie = User.create(username: 'Swimmopedia06', password: 'password', email: 'swimmerGurl28@gmail.com')
briana = User.create(username: 'Briana Williams', password: 'password', email: 'brianawilliams@gmail.com')
hannah = User.create(username: 'SummertimeSadness', password: 'password', email: 'flowerChild@university.edu')
kim = User.create(username: 'SmokingGuns', password: 'password', email: 'orphanGirl31@company.org')

users = [
    [brad, "brad.jpg"],
    [hayden, "hayden.jpg"], 
    [marshall, "marshall.jpeg"], 
    [joe, "joe.png"], 
    [j, "j.jpg"], 
    [tom, "tom.png"], 
    [bill, "bill.jpg"], 
    [sarah, "sarah.jpg"], 
    [julio, "julio.png"], 
    [daniel, "daniel.jpg"], 
    [mike, "mike.jpg"], 
    [kelly, "kelly.jpg"], 
    [karim, "karim.jpg"], 
    [zooey, "zooey.jpg"], 
    [roger, "roger.jpg"], 
    [michelle, "michelle.png"], 
    [ali, "ali.jpg"], 
    [chris, "chris.jpg"], 
    [omar, "omar.png"], 
    [jessie, "jessie.png"], 
    [natalie, "natalie.jpg"], 
    [briana, "briana.png"], 
    [hannah, "hannah.png"], 
    [kim, "kim.png"]
]

(0...users.length).each do |i|
    file2 = users[i][1]
    file = EzDownload.open("https://adtube-aa-dev.s3-us-west-1.amazonaws.com/#{file2}")
    users[i][0].photo.attach(io: file, filename: file2)
end

# videos

# air_balloons = Video.create(title: "Woman walks towards air balloons", description: "A woman walks towards hot air baloons on a cliff for some reason", views: 203, creator_id: demo_user.id)
# road = Video.create(title: 'Driving on a road', description: "for those moments at the end of a long day when you just want to drive", views: 35, creator_id: marshall.id)
# tropical = Video.create(title: "A tropical beach", description: "Majestic Casual - Experience music in a new way and chill on a beach", views: 499, creator_id: brad.id)
# bridge = Video.create(title: 'A Bridge', description: "Look on down from the bridge", views: 135, creator_id: joe.id)
# surfing = Video.create(title: 'Guy surfing', description: "Cool surfing video. Those waves look gnarly", views: 766, creator_id: demo_user.id)
# dog = Video.create(title: 'Dog on beach', description: "This is the hilarious moment a dog got so annoyed and chased it's tail on a beach. He seems so happy. This is why I love dogs", views: 556, creator_id: brad.id)
# fish = Video.create(title: 'School of fish', description: "This is some Planet Earth shit right here", views: 146, creator_id: hayden.id)
# seal = Video.create(title: 'Seal on beach', description: "This is some more Planet Earth shit I guess", views: 279, creator_id: marshall.id)
# waterfall = Video.create(title: 'A waterfall', description: "Isolated waterfalls and had to get a video with sound.", views: 109, creator_id: hayden.id)
# mountains = Video.create(title: 'Beautiful mountains', description: "Where I want to be.", views: 89, creator_id: demo_user.id)

# videos = [
#     [air_balloons, "air_balloons"], 
#     [road, "road"], 
#     [tropical, "tropical"], 
#     [bridge, "bridge"], 
#     [surfing, "surfing"], 
#     [dog, "dog"], 
#     [fish, "fish"], 
#     [seal, "seal"], 
#     [waterfall, "waterfall"], 
#     [mountains, "mountains"]
# ]

allegra = Video.create(title: "Break Through Allergies", description: "If allergies are holding you back allegra's non-drowsy 24 hour protection can help get you back in the game", views: 203, creator_id: demo_user.id)
charmin = Video.create(title: 'Ultra Soft New Roll', description: "We all go why not enjoy the go with charmin's new ultra soft toilet paper. Now extra absorbent.", views: 35, creator_id: marshall.id)
cheetos = Video.create(title: "Shuffle Steal - feat. MC Hammer", description: "MC Hammer is the only one who can touch his cheetos as he practices his moves while successfully stealing a snack", views: 499, creator_id: brad.id)
diabeetus = Video.create(title: 'Diabeetus - Remastered', description: "Wilford Brimley back with another classic for Binsons to help fullfill all your diabeetus needs", views: 135, creator_id: joe.id)
direct_tv = Video.create(title: 'Therapy Sessions', description: "Is your relationship with your cable provider getting stale? Maybe it's time you switch to Direct TV.", views: 766, creator_id: demo_user.id)
drpepper = Video.create(title: 'Fansville', description: "In Season finale of fansville by Dr Pepper the sheriff chases after the mysterious and elusive 'Big Fan'...", views: 556, creator_id: brad.id)
expedia = Video.create(title: 'Get Good At Vacationing:Surfing', description: "Get really good at vacationing with expedia. Book your flight with expedia and unlock trip savings of up to 20%", views: 146, creator_id: hayden.id)
geico = Video.create(title: 'Pinocchio Was a Bad Motivational Speaker', description: "Everyone knows you could save 15% or more on car insurance by switching to geico, but did you know Pinocchio was a bad motivational speaker?", views: 279, creator_id: marshall.id)
geico_sequel = Video.create(title: 'GEICO Sequels: Return of the Savings', description: "In a world where everything gets a sequel...", views: 109, creator_id: hayden.id)
gta = Video.create(title: 'Grand Theft Auto: The Diamond Casino Heist', description: "Grand Theft Auto Online: The Diamond Casino Heist is available now. Rated M for Mature.", views: 89, creator_id: demo_user.id)
jgwentworth = Video.create(title: "Bus Opera", description: "If you have a strucured settlement and need cash now call J.G. Wentworth.", views: 203, creator_id: demo_user.id)
kfc = Video.create(title: 'KFC Chicken & Waffles', description: "The most delicious union of all time just got hotter. Kentucky Fried Chicken and Waffles are back. Now available in Nashville Hot", views: 35, creator_id: marshall.id)
kitkat = Video.create(title: "A tropical beach", description: "Majestic Casual - Experience music in a new way and chill on a beach", views: 499, creator_id: brad.id)
liberty_mutual = Video.create(title: 'Liberty Mutual - Better Car Replacement', description: "A woman describes a story about her beloved car 'Brad'. She totals him and is devastated until she is able to get by with a little help from her friend Liberty Mutual.", views: 135, creator_id: joe.id)
mesothelioma = Video.create(title: 'Mesothelioma', description: "If you or a loved one have been diagnosed with Mesothelioma.", views: 766, creator_id: demo_user.id)
pizzahut = Video.create(title: 'Pizza Hut', description: "You didn't ask for it...but boy are you gonna want it.", views: 556, creator_id: brad.id)
sheba = Video.create(title: 'Sheba', description: "You'll do anything for your cat and your cat will do anything for Sheba we food.", views: 146, creator_id: hayden.id)
sprint = Video.create(title: 'Bar en carretera: Galaxy S10', description: "Durante las vacaciones, los clientes de Sprint podrán obtener un Samsung Galaxy S10 por $ 0 al mes con el contrato de arrendamiento de Sprint Flex.", views: 279, creator_id: marshall.id)
subaru = Video.create(title: 'Subaru Dog Tested: Drive Away:', description: "The Barkley Dad picks up his teen from the bowling alley.", views: 109, creator_id: hayden.id)
taco_bell = Video.create(title: 'Taco Bell - Lions', description: "New Taco Bell steak grilled taquitos. Grilled steak you can eat anywhere", views: 89, creator_id: demo_user.id)

videos = [
    [allegra, "allegra"], 
    [charmin, "charmin"], 
    [cheetos, "cheetos"], 
    [diabeetus, "diabeetus"], 
    [direct_tv, "direct_tv"], 
    [drpepper, "drpepper"], 
    [expedia, "expedia"], 
    [geico, "geico"], 
    [geico_sequel, "geico_sequel"], 
    [gta, "gta"],
    [jgwentworth, "jgwentworth"], 
    [kfc, "kfc"], 
    [kitkat, "kitkat"], 
    [liberty_mutual, "liberty_mutual"], 
    [mesothelioma, "mesothelioma"], 
    [pizzahut, "pizzahut"], 
    [sheba, "sheba"], 
    [sprint, "sprint"], 
    [subaru, "subaru"], 
    [taco_bell, "taco_bell"]
]

(0...videos.length).each do |i|
    file2 = videos[i][1]
    file = EzDownload.open("https://adtube-aa-dev.s3-us-west-1.amazonaws.com/#{file2}.jpg")
    file1 = EzDownload.open("https://adtube-aa-dev.s3-us-west-1.amazonaws.com/#{file2}.mp4")
    videos[i][0].thumbnail.attach(io: file, filename: "#{file2}.jpg")
    videos[i][0].clip.attach(io: file1, filename: "#{file2}.mp4")
end

# comments

comment = Comment.create(body: "I've always bad allergies", author_id: brad.id, video_id: allegra.id)
comment0 = Comment.create(body: "Mine haven't been that bad this year", author_id: j.id, video_id: allegra.id)
comment1 = Comment.create(body: "that's probably because you've been inside the entire alergy season", author_id: tom.id, video_id: allegra.id, parent_comment_id: comment0.id)
comment2 = Comment.create(body: "that bear is really enjoying that toilet paper", author_id: bill.id, video_id: charmin.id)
comment3 = Comment.create(body: "im watching this on the toilet...", author_id: marshall.id, video_id: charmin.id)
comment4 = Comment.create(body: "how did this make it on tv?", author_id: hayden.id, video_id: charmin.id)
comment5 = Comment.create(body: "Looks like MC Hammer was desparate for money", author_id: .id, video_id: cheetos.id)
comment6 = Comment.create(body: "HAHAHAHAHA", author_id: hannah.id, video_id: cheetos.id)
comment7 = Comment.create(body: "it wasn't that funny", author_id: sarah.id, video_id: cheetos.id, parent_comment_id: comment6.id)
comment8 = Comment.create(body: "diabeetus...that is all...", author_id: omar.id, video_id: diabeetus.id)
comment9 = Comment.create(body: "who's still watching in 2020?", author_id: mike.id, video_id: diabeetus.id)
comment10 = Comment.create(body: "shut up golffluclinic", author_id: j.id, video_id: diabeetus.id, parent_comment_id: comment8.id)
comment11 = Comment.create(body: "you shut up", author_id: mike.id, video_id: diabeetus.id, parent_comment_id: comment10.id)
comment12 = Comment.create(body: "classic narcissist", author_id: roger.id, video_id: direct_tv.id)
comment13 = Comment.create(body: "direct tv is a rip off", author_id: chris.id, video_id: direct_tv.id)

# likes

Like.create(liker_id: brad.id, liked: true, disliked: false, likeable_id: allegra.id, likeable_type: "Video")
Like.create(liker_id: brad.id, liked: true, disliked: false, likeable_id: charmin.id, likeable_type: "Video")
Like.create(liker_id: brad.id, liked: true, disliked: false, likeable_id: geico.id, likeable_type: "Video")
Like.create(liker_id: brad.id, liked: true, disliked: false, likeable_id: subaru.id, likeable_type: "Video")
Like.create(liker_id: brad.id, liked: true, disliked: false, likeable_id: liberty_mutual.id, likeable_type: "Video")
Like.create(liker_id: bill.id, liked: true, disliked: false, likeable_id: subaru.id, likeable_type: "Video")
Like.create(liker_id: bill.id, liked: true, disliked: false, likeable_id: sheba.id, likeable_type: "Video")
Like.create(liker_id: tom.id, liked: true, disliked: false, likeable_id: diabeetus.id, likeable_type: "Video")
Like.create(liker_id: tom.id, liked: true, disliked: false, likeable_id: direct_tv.id, likeable_type: "Video")
Like.create(liker_id: tom.id, liked: false, disliked: true, likeable_id: drpepper.id, likeable_type: "Video")
Like.create(liker_id: j.id, liked: false, disliked: true, likeable_id: liberty_mutual.id, likeable_type: "Video")
Like.create(liker_id: j.id, liked: true, disliked: false, likeable_id: kfc.id, likeable_type: "Comment")
Like.create(liker_id: j.id, liked: true, disliked: false, likeable_id: jgwentworth.id, likeable_type: "Comment")
Like.create(liker_id: sarah.id, liked: true, disliked: false, likeable_id: cheetos.id, likeable_type: "Comment")
Like.create(liker_id: sarah.id, liked: true, disliked: false, likeable_id: expedia.id, likeable_type: "Comment")
Like.create(liker_id: hayden.id, liked: true, disliked: false, likeable_id: geico_sequel.id, likeable_type: "Comment")
Like.create(liker_id: joe.id, liked: true, disliked: false, likeable_id: gta.id, likeable_type: "Comment")
Like.create(liker_id: hayden.id, liked: true, disliked: false, likeable_id: geico.id, likeable_type: "Comment")
Like.create(liker_id: marshall.id, liked: true, disliked: false, likeable_id: charmin.id, likeable_type: "Comment")
Like.create(liker_id: marshall.id, liked: true, disliked: false, likeable_id: jgwentworth.id, likeable_type: "Comment")
Like.create(liker_id: hayden.id, liked: true, disliked: false, likeable_id: allegra.id, likeable_type: "Comment")