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
Channel.destroy_all
Subscription.destroy_all

# users

demo_user = User.create(username: 'DemoUser', password: 'password', email: 'demouser@gmail.com')
brad = User.create(username: 'VoodooChile69', password: 'password', email: 'brad@gmail.com')
hayden = User.create(username: 'yeahhh Thatd b Grt', password: 'password', email: 'hayden@gmail.com')
marshall = User.create(username: 'CovidHandWash19', password: 'password', email: 'marshall@gmail.com')
joe = User.create(username: 'JustDoItYo', password: 'password', email: 'joe@gmail.com')
j = User.create(username: 'jazzCat98', password: 'password', email: 'milesUCDavis@gmail.com')
tom = User.create(username: 'ScrubsSporter94', password: 'password', email: 'tom333@gmail.com')
bill = User.create(username: 'rattle_snake_venom???', password: 'password', email: 'williamrussell@gmail.com')
omar = User.create(username: 'SunriseTaco34', password: 'password', email: 'tacoman@gmail.com')

user = [
    [brad, "brad.jpg", "I know what I want but I just don't know how to go about getting it"],
    [hayden, "hayden.jpg", "Yeah....if you could go ahead and subscribe to my channel that would be great...mmmkay...thanks"], 
    [marshall, "marshall.jpeg", "Wash ya hands don't touch ya face!"], 
    [joe, "joe.png", "Just do it"], 
    [j, "j.jpg", "Cuz I'm the scatman! skeep-beep de bop-bop beep bop bo-dope"], 
    [tom, "tom.png", "Number 1 Transporter"], 
    [bill, "bill.jpg", "Live. Love. Climb."], 
    [omar, "omar.png", ""]
]

demo_channel = Channel.create!(name: 'DemoUser', creator_id: demo_user.id, description: 'Subscribe to my channel')

channels = (0...user.length).each_with_object({}) do |i, channels|
    channels[i] = Channel.create!(creator_id: user[i][0].id, name: user[i][0].username, description: user[i][2])
    file2 = user[i][1]
    file = EzDownload.open("https://adtube-aa-dev.s3-us-west-1.amazonaws.com/#{file2}")
    channels[i].logo.attach(io: file, filename: file2)
end

sarah = Channel.create!(name: 'Cannery Row', creator_id: bill.id)
julio = Channel.create!(name: 'Julio Cortez', creator_id: omar.id)
daniel = Channel.create!(name: 'Hilarious Elixir', creator_id: tom.id)
mike = Channel.create!(name: 'golffluclinic', creator_id: brad.id)
kelly = Channel.create!(name: 'hawaii-five-oh', creator_id: bill.id)
karim = Channel.create!(name: "Karim Abdul-Jabbar", creator_id: omar.id)
zooey = Channel.create!(name: "who's that girl?", creator_id: brad.id)
roger = Channel.create!(name: 'whisper...Ricky Spanish...', creator_id: j.id)
michelle = Channel.create!(name: 'AchillesHighHeels', creator_id: joe.id)
ali = Channel.create!(name: 'psych-o-hippie-chick', creator_id: brad.id)
chris = Channel.create!(name: 'summerOfLove67', creator_id: omar.id)
jessie = Channel.create!(name: 'Full-Frontal Music', creator_id: omar.id)
natalie = Channel.create!(name: 'Swimmopedia06', creator_id: bill.id)
briana = Channel.create!(name: 'Briana Williams', creator_id: hayden.id)
hannah = Channel.create!(name: 'SummertimeSadness', creator_id: marshall.id)
kim = Channel.create!(name: 'SmokingGuns', creator_id: tom.id)

channel = [
    [sarah, "sarah.jpg", "We spend our time searching for security and hate it when we get it."], 
    [julio, "julio.png", ""], 
    [daniel, "daniel.jpg", "'Money doesn't buy happiness.' Uh, do you live in America? 'Cause it buys a WaveRunner. Have you ever seen a sad person on a WaveRunner?"], 
    [mike, "mike.jpg", ""], 
    [kelly, "kelly.jpg", ""], 
    [karim, "karim.jpg", "I'M RICH BIATCH!"], 
    [zooey, "zooey.jpg", "Who's that girl?"], 
    [roger, "roger.jpg", "...Ricky Spanish..."], 
    [michelle, "michelle.png", ""], 
    [ali, "ali.jpg", "I'd rather have flowers in my hair than diamonds around my neck"], 
    [chris, "chris.jpg", "One Love Brother"], 
    [jessie, "jessie.png", "I wish that I had Jessie's girl"], 
    [natalie, "natalie.jpg", "Home is where the pool is"], 
    [briana, "briana.png", ""], 
    [hannah, "hannah.png", "Heaven is a place on earth with you"], 
    [kim, "kim.png", "Smoking is the leading cause of statistics"]
]

Subscription.create!(subscriber_id: zooey.id, channel_id: demo_channel.id)
Subscription.create!(subscriber_id: mike.id, channel_id: demo_channel.id)
Subscription.create!(subscriber_id: channels[1].id, channel_id: demo_channel.id)
Subscription.create!(subscriber_id: channels[2].id, channel_id: demo_channel.id)
Subscription.create!(subscriber_id: ali.id, channel_id: demo_channel.id)
Subscription.create!(subscriber_id: channels[4].id, channel_id: channels[0].id)
Subscription.create!(subscriber_id: channels[5].id, channel_id: channels[0].id)
Subscription.create!(subscriber_id: channels[1].id, channel_id: channels[0].id)
Subscription.create!(subscriber_id: channels[2].id, channel_id: channels[0].id)
Subscription.create!(subscriber_id: channels[3].id, channel_id: channels[0].id)
Subscription.create!(subscriber_id: channels[0].id, channel_id: channels[4].id)
Subscription.create!(subscriber_id: channels[5].id, channel_id: channels[4].id)
Subscription.create!(subscriber_id: channels[6].id, channel_id: channels[4].id)
Subscription.create!(subscriber_id: channels[0].id, channel_id: channels[2].id)
Subscription.create!(subscriber_id: channels[1].id, channel_id: channels[2].id)

(0...channel.length).each do |i|
    channel[i][0].update(description: channel[i][2])
    channel[i][0].update(subscribed: channel[i][0].subscribers.length) if channel[i][0].subscribers.length > 1
    file2 = channel[i][1]
    file = EzDownload.open("https://adtube-aa-dev.s3-us-west-1.amazonaws.com/#{file2}")
    channel[i][0].logo.attach(io: file, filename: file2)
end

(0...channels.length).each do |i|
    channels[i].update(subscribed: channels[i].subscribers.length) if channels[i].subscribers.length > 1
end

# videos

# air_balloons = Video.create!(title: "Woman walks towards air balloons", description: "A woman walks towards hot air baloons on a cliff for some reason", views: 203, creator_id: demo_user.id)
# road = Video.create!(title: 'Driving on a road', description: "for those moments at the end of a long day when you just want to drive", views: 35, creator_id: marshall.id)
# tropical = Video.create!(title: "A tropical beach", description: "Majestic Casual - Experience music in a new way and chill on a beach", views: 499, creator_id: brad.id)
# bridge = Video.create!(title: 'A Bridge', description: "Look on down from the bridge", views: 135, creator_id: joe.id)
# surfing = Video.create!(title: 'Guy surfing', description: "Cool surfing video. Those waves look gnarly", views: 766, creator_id: demo_user.id)
# dog = Video.create!(title: 'Dog on beach', description: "This is the hilarious moment a dog got so annoyed and chased it's tail on a beach. He seems so happy. This is why I love dogs", views: 556, creator_id: brad.id)
# fish = Video.create!(title: 'School of fish', description: "This is some Planet Earth shit right here", views: 146, creator_id: hayden.id)
# seal = Video.create!(title: 'Seal on beach', description: "This is some more Planet Earth shit I guess", views: 279, creator_id: marshall.id)
# waterfall = Video.create!(title: 'A waterfall', description: "Isolated waterfalls and had to get a video with sound.", views: 109, creator_id: hayden.id)
# mountains = Video.create!(title: 'Beautiful mountains', description: "Where I want to be.", views: 89, creator_id: demo_user.id)

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

allegra = Video.create!(title: "Break Through Allergies", description: "If allergies are holding you back allegra's non-drowsy 24 hour protection can help get you back in the game.", views: 203, channel_id: demo_channel.id)
charmin = Video.create!(title: 'Ultra Soft New Roll', description: "We all go, why not enjoy the go with charmin's new ultra soft toilet paper. Now extra absorbent.", views: 125, channel_id: channels[2].id)
cheetos = Video.create!(title: "Shuffle Steal - feat. MC Hammer", description: "MC Hammer is the only one who can touch his cheetos as he practices his moves while successfully stealing a snack", views: 49, channel_id: channels[1].id)
diabeetus = Video.create!(title: 'Diabeetus - Remastered', description: "Wilford Brimley back with another classic for Binsons to help fullfill all your diabeetus needs", views: 335, channel_id: channels[5].id)
direct_tv = Video.create!(title: 'Therapy Sessions', description: "Is your relationship with your cable provider getting stale? Maybe it's time you switch to Direct TV.", views: 76, channel_id: channels[4].id)
drpepper = Video.create!(title: 'Fansville', description: "In Season finale of fansville by Dr Pepper the sheriff chases after the mysterious and elusive 'Big Fan'...", views: 256, channel_id: channels[0].id)
expedia = Video.create!(title: 'Get Good At Vacationing: Surfing', description: "Get really good at vacationing with expedia. Book your flight with expedia and unlock trip savings of up to 20%", views: 84, channel_id: channels[1].id)
geico = Video.create!(title: 'Pinocchio Was a Bad Motivational Speaker', description: "Everyone knows you could save 15% or more on car insurance by switching to geico, but did you know Pinocchio was a bad motivational speaker?", views: 379, channel_id: channels[2].id)
geico_sequel = Video.create!(title: 'GEICO Sequels: Return of the Savings', description: "In a world where everything gets a sequel...", views: 109, channel_id: channels[2].id)
gta = Video.create!(title: 'Grand Theft Auto: The Diamond Casino Heist', description: "Grand Theft Auto Online: The Diamond Casino Heist is available now. Rated M for Mature.", views: 189, channel_id: channels[3].id)
jgwentworth = Video.create!(title: "Bus Opera", description: "If you have a strucured settlement and need cash now call J.G. Wentworth.", views: 203, channel_id: demo_channel.id)
kfc = Video.create!(title: 'KFC Chicken & Waffles', description: "The most delicious union of all time just got hotter. Kentucky Fried Chicken and Waffles are back. Now available in Nashville Hot", views: 235, channel_id: demo_channel.id)
kitkat = Video.create!(title: "Time for a Break - feat. Chance the Rapper: Halloween Edition", description: "Chance the Wrapper sings the KitKat jingle", views: 35, channel_id: channels[4].id)
liberty_mutual = Video.create!(title: 'Liberty Mutual - Better Car Replacement', description: "A woman describes a story about her beloved car 'Brad'. She totals him and is devastated until she is able to get by with a little help from her friend Liberty Mutual.", views: 134, channel_id: channels[0].id)
mesothelioma = Video.create!(title: 'Mesothelioma', description: "If you or a loved one have been diagnosed with Mesothelioma.", views: 16, channel_id: channels[0].id)
pizzahut = Video.create!(title: 'Pizza Hut', description: "You didn't ask for it...but boy are you gonna want it.", views: 226, channel_id: demo_channel.id)
sheba = Video.create!(title: 'Sheba', description: "You'll do anything for your cat and your cat will do anything for Sheba we food.", views: 146, channel_id: channels[6].id)
sprint = Video.create!(title: 'Bar en carretera: Galaxy S10', description: "Durante las vacaciones, los clientes de Sprint podrán obtener un Samsung Galaxy S10 por $ 0 al mes con el contrato de arrendamiento de Sprint Flex.", views: 279, channel_id: channels[7].id)
subaru = Video.create!(title: 'Subaru Dog Tested: Drive Away:', description: "The Barkley Dad picks up his teen from the bowling alley.", views: 312, channel_id: demo_channel.id)
taco_bell = Video.create!(title: 'Taco Bell - Lions', description: "New Taco Bell steak grilled taquitos. Grilled steak you can eat anywhere", views: 488, channel_id: channels[0].id)

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

comment = Comment.create!(body: "I've always bad allergies", author_id: channels[0].id, video_id: allegra.id)
comment0 = Comment.create!(body: "Mine haven't been that bad this year", author_id: channels[4].id, video_id: allegra.id)
comment1 = Comment.create!(body: "that's probably because you've been inside the entire alergy season", author_id: channels[5].id, video_id: allegra.id, parent_comment_id: comment0.id)
comment2 = Comment.create!(body: "that bear is really enjoying that toilet paper", author_id: channels[6].id, video_id: charmin.id)
comment3 = Comment.create!(body: "im watching this on the toilet...", author_id: channels[2].id, video_id: charmin.id)
comment4 = Comment.create!(body: "how did this make it on tv?", author_id: channels[1].id, video_id: charmin.id)
comment5 = Comment.create!(body: "Looks like MC Hammer was desparate for money", author_id: channels[2].id, video_id: cheetos.id)
comment6 = Comment.create!(body: "HAHAHAHAHA", author_id: hannah.id, video_id: cheetos.id)
comment7 = Comment.create!(body: "it wasn't that funny", author_id: sarah.id, video_id: cheetos.id, parent_comment_id: comment6.id)
comment8 = Comment.create!(body: "diabeetus...that is all...", author_id: channels[7].id, video_id: diabeetus.id)
comment9 = Comment.create!(body: "who's still watching in 2020?", author_id: mike.id, video_id: diabeetus.id)
comment10 = Comment.create!(body: "shut up golffluclinic", author_id: channels[4].id, video_id: diabeetus.id, parent_comment_id: comment9.id)
comment11 = Comment.create!(body: "you shut up", author_id: mike.id, video_id: diabeetus.id, parent_comment_id: comment10.id)
comment12 = Comment.create!(body: "classic narcissist", author_id: roger.id, video_id: direct_tv.id)
comment13 = Comment.create!(body: "direct tv is a rip off. its just the government trying to control you man", author_id: chris.id, video_id: direct_tv.id)
comment14 = Comment.create!(body: "my therapist recommended i switch to direct tv so i could watch more tv and get away from my family", author_id: channels[0].id, video_id: direct_tv.id)
comment15 = Comment.create!(body: "im more of a mr pibb guy", author_id: channels[0].id, video_id: drpepper.id)
comment16 = Comment.create!(body: "these are the dumbest ads", author_id: channels[4].id, video_id: drpepper.id)
comment17 = Comment.create!(body: "bigfoot is real man ive seen him", author_id: chris.id, video_id: drpepper.id)
comment18 = Comment.create!(body: "you probably just saw a deer or something", author_id: channels[7].id, video_id: drpepper.id, parent_comment_id: comment17.id)
comment19 = Comment.create!(body: "you think the lochness monster is real too?", author_id: channels[0].id, video_id: direct_tv.id, parent_comment_id: comment17.id)
comment20 = Comment.create!(body: "no way man, i swear i seen him brother", author_id: chris.id, video_id: direct_tv.id, parent_comment_id: comment18.id)
comment21 = Comment.create!(body: "I always wanted to go to Tahiti", author_id: michelle.id, video_id: expedia.id)
comment22 = Comment.create!(body: "nobody cares", author_id: roger.id, video_id: expedia.id, parent_comment_id: comment21.id)
comment23 = Comment.create!(body: "I could use a vacation now", author_id: karim.id, video_id: expedia.id)
comment24 = Comment.create!(body: "love the profile pic bro", author_id: mike.id, video_id: expedia.id, parent_comment_id: comment23.id)
comment25 = Comment.create!(body: "thanks man!", author_id: karim.id, video_id: expedia.id, parent_comment_id: comment23.id)
comment26 = Comment.create!(body: "RIP Prince T_T", author_id: kim.id, video_id: expedia.id, parent_comment_id: comment23.id)
comment27 = Comment.create!(body: "I miss chappelle show", author_id: channels[0].id, video_id: expedia.id, parent_comment_id: comment23.id)
comment28 = Comment.create!(body: "at least you still have tosh.0", author_id: daniel.id, video_id: expedia.id, parent_comment_id: comment23.id)
comment29 = Comment.create!(body: "is that still on?", author_id: channels[0].id, video_id: expedia.id, parent_comment_id: comment28.id)
comment30 = Comment.create!(body: "yup. season 11", author_id: channels[5].id, video_id: expedia.id, parent_comment_id: comment28.id)
comment31 = Comment.create!(body: "wow. i remember when the first episode aired. I'm getting old", author_id: channels[0].id, video_id: expedia.id, parent_comment_id: comment28.id)
comment32 = Comment.create!(body: "how did I end up here?", author_id: channels[6].id, video_id: expedia.id)
comment33 = Comment.create!(body: "if only all politicians were like pinocchio", author_id: channels[3].id, video_id: geico.id)
comment34 = Comment.create!(body: "no politics here. i just want to watch ads", author_id: channels[1].id, video_id: geico.id)
comment35 = Comment.create!(body: "I love the guy in the front row shaking his head :'-)", author_id: channels[2].id, video_id: geico.id)
comment36 = Comment.create!(body: "its sad that people will believe anything someone else tells them without thinking for themselves", author_id: channels[6].id, video_id: geico.id, parent_comment_id: comment33.id)
comment37 = Comment.create!(body: "I said no politics!", author_id: channels[1].id, video_id: geico.id, parent_comment_id: comment33.id)
comment38 = Comment.create!(body: "thats not just politics that's life", author_id: sarah.id, video_id: geico.id, parent_comment_id: comment33.id)
comment39 = Comment.create!(body: "all sequels suck", author_id: natalie.id, video_id: geico_sequel.id)
comment40 = Comment.create!(body: "not as good as the original", author_id: channels[1].id, video_id: geico_sequel.id)
comment41 = Comment.create!(body: "my 6 year old nephew loves this game", author_id: briana.id, video_id: gta.id)
comment42 = Comment.create!(body: "you let your 6 year old nephew play an M rated game???", author_id: julio.id, video_id: gta.id, parent_comment_id: comment41.id)
comment43 = Comment.create!(body: "this game is so addicting", author_id: channels[3].id, video_id: gta.id)
comment44 = Comment.create!(body: "i dont really play video games so i have no idea why i'm watching this", author_id: channels[0].id, video_id: gta.id)
comment45 = Comment.create!(body: "'I HAVE A STRUCTURED SETTLEMENT AND I NEED CASH NOW!'", author_id: jessie.id, video_id: jgwentworth.id)
comment46 = Comment.create!(body: "my great grandma died last year. this ad reminds me of her", author_id: ali.id, video_id: jgwentworth.id)
comment47 = Comment.create!(body: "uhhhhhh.....wat???", author_id: channels[5].id, video_id: jgwentworth.id, parent_comment_id: comment46.id)
comment48 = Comment.create!(body: "uneccessary personal story that has nothing to do with the video because i thought this would be the appropriate place for that", author_id: hannah.id, video_id: jgwentworth.id)
comment49 = Comment.create!(body: "this. is. disturbing.", author_id: channels[4].id, video_id: kfc.id)
comment50 = Comment.create!(body: "this is so dumb", author_id: zooey.id, video_id: kfc.id)
comment51 = Comment.create!(body: "this seems like an effective use of my time", author_id: kelly.id, video_id: kfc.id)
comment52 = Comment.create!(body: "who decided that this is the most delicious union", author_id: karim.id, video_id: kfc.id)
comment53 = Comment.create!(body: "chance the rapper kinda sucks", author_id: channels[7].id, video_id: kitkat.id)
comment54 = Comment.create!(body: "that ed sheeran song cross me is alright", author_id: channels[4].id, video_id: kitkat.id)
comment55 = Comment.create!(body: "my name is Brad", author_id: channels[0].id, video_id: liberty_mutual.id)
comment56 = Comment.create!(body: "my mom loves this ad", author_id: channels[5].id, video_id: liberty_mutual.id)
comment57 = Comment.create!(body: "why am i watching this?", author_id: kim.id, video_id: mesothelioma.id)
comment58 = Comment.create!(body: "scam", author_id: chris.id, video_id: mesothelioma.id)
comment59 = Comment.create!(body: "this sounds made up", author_id: roger.id, video_id: mesothelioma.id)
comment60 = Comment.create!(body: "we DEFINITELY didn't ask for it", author_id: channels[0].id, video_id: pizzahut.id)
comment61 = Comment.create!(body: "this is giving me diarrhea just by watching", author_id: channels[4].id, video_id: pizzahut.id)
comment62 = Comment.create!(body: "is it bad that i kind of want to try it though...", author_id: julio.id, video_id: pizzahut.id)
comment63 = Comment.create!(body: "cats > dogs", author_id: channels[6].id, video_id: sheba.id)
comment64 = Comment.create!(body: "I'm more of a dog person", author_id: channels[0].id, video_id: sheba.id)
comment65 = Comment.create!(body: "i don't trust cats", author_id: karim.id, video_id: sheba.id)
comment66 = Comment.create!(body: "anyone know the song?", author_id: jessie.id, video_id: sprint.id)
comment67 = Comment.create!(body: "¿Por qué subiste esto?", author_id: channels[7].id, video_id: sprint.id)
comment68 = Comment.create!(body: "Mientras miraba este video, mi hermano entró y dijo '¿por qué estás viendo un video s10 que el teléfono probablemente cuesta más que nuestro alquiler?', Dije: PUEDO SOÑAR COLE 😂😢🤧", author_id: julio.id, video_id: sprint.id)
comment69 = Comment.create!(body: "dogs > cats", author_id: channels[5].id, video_id: subaru.id)
comment69 = Comment.create!(body: "this is why i bought a subaru", author_id: channels[6].id, video_id: subaru.id)
comment70 = Comment.create!(body: "[insert lame dog pun here]", author_id: michelle.id, video_id: subaru.id)
comment71 = Comment.create!(body: "CLASSIC!", author_id: channels[0].id, video_id: taco_bell.id)
comment72 = Comment.create!(body: "carne asada, no...no... carnnnnneee asada", author_id: karim.id, video_id: taco_bell.id)
comment73 = Comment.create!(body: "ricardo montalban???", author_id: daniel.id, video_id: taco_bell.id, parent_comment_id: comment72.id)
comment74 = Comment.create!(body: "these lion commercials are the best", author_id: hannah.id, video_id: taco_bell.id)
comment75 = Comment.create!(body: "they don't make ads like this anymore", author_id: kim.id, video_id: taco_bell.id)
comment76 = Comment.create!(body: "this is what a real ad looks like, not that garbage they put out now", author_id: chris.id, video_id: taco_bell.id)
comment77 = Comment.create!(body: "who's still watching in 2020?", author_id: mike.id, video_id: taco_bell.id)

# likes

Like.create!(liker_id: channels[0].id, liked: true, disliked: false, likeable_id: allegra.id, likeable_type: "Video")
Like.create!(liker_id: channels[0].id, liked: true, disliked: false, likeable_id: charmin.id, likeable_type: "Video")
Like.create!(liker_id: channels[0].id, liked: true, disliked: false, likeable_id: geico.id, likeable_type: "Video")
Like.create!(liker_id: channels[0].id, liked: true, disliked: false, likeable_id: subaru.id, likeable_type: "Video")
Like.create!(liker_id: channels[0].id, liked: true, disliked: false, likeable_id: liberty_mutual.id, likeable_type: "Video")
Like.create!(liker_id: channels[6].id, liked: true, disliked: false, likeable_id: subaru.id, likeable_type: "Video")
Like.create!(liker_id: channels[6].id, liked: true, disliked: false, likeable_id: sheba.id, likeable_type: "Video")
Like.create!(liker_id: channels[5].id, liked: true, disliked: false, likeable_id: diabeetus.id, likeable_type: "Video")
Like.create!(liker_id: channels[5].id, liked: true, disliked: false, likeable_id: direct_tv.id, likeable_type: "Video")
Like.create!(liker_id: channels[5].id, liked: false, disliked: true, likeable_id: drpepper.id, likeable_type: "Video")
Like.create!(liker_id: channels[4].id, liked: false, disliked: true, likeable_id: liberty_mutual.id, likeable_type: "Video")
# Like.create!(liker_id: channels[4].id, liked: true, disliked: false, likeable_id: kfc.id, likeable_type: "Comment")
# Like.create!(liker_id: channels[4].id, liked: true, disliked: false, likeable_id: jgwentworth.id, likeable_type: "Comment")
# Like.create!(liker_id: sarah.id, liked: true, disliked: false, likeable_id: cheetos.id, likeable_type: "Comment")
# Like.create!(liker_id: sarah.id, liked: true, disliked: false, likeable_id: expedia.id, likeable_type: "Comment")
# Like.create!(liker_id: channels[1].id, liked: true, disliked: false, likeable_id: geico_sequel.id, likeable_type: "Comment")
# Like.create!(liker_id: channels[3].id, liked: true, disliked: false, likeable_id: gta.id, likeable_type: "Comment")
# Like.create!(liker_id: channels[1].id, liked: true, disliked: false, likeable_id: geico.id, likeable_type: "Comment")
# Like.create!(liker_id: channels[2].id, liked: true, disliked: false, likeable_id: charmin.id, likeable_type: "Comment")
# Like.create!(liker_id: channels[2].id, liked: true, disliked: false, likeable_id: jgwentworth.id, likeable_type: "Comment")
# Like.create!(liker_id: channels[1].id, liked: true, disliked: false, likeable_id: allegra.id, likeable_type: "Comment")

