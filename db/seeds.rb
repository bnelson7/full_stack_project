# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Video.destroy_all
User.destroy_all

diabeetus = Video.create(title: 'diabeetus', description: "wilford brimley", views: 203, user_id: 14, upload_date: '3 years ago' )
file = open('/home/brad/Documents/diabeetus.jpeg')
diabeetus.upload.attach(io: file, filename: 'diabeetus.jpeg')

chill = Video.create(title: 'midnight aura. [lofi/jazzhop/chill mix]', description: "for those serene moments at the end of a long day", views: 35, user_id: 25, upload_date: '4 days ago' )
file1 = open('/home/brad/Documents/midnight.jpeg')
chill.upload.attach(io: file1, filename: 'midnight.jpeg')

majestic = Video.create(title: "Nas - Life's a Bitch(Sourface Remix) ", description: "Majestic Casual - Experience music in a new way", views: 499, user_id: 7, upload_date: '5 months ago' )
file2 = open('/home/brad/Documents/nas.jpg')
majestic.upload.attach(io: file2, filename: 'nas.jpg')

fantastic = Video.create(title: 'Chill Beats Lofi & Jazzhop', description: "chill beats", views: 135, user_id: 22, upload_date: '2 years ago' )
file3 = open('/home/brad/Documents/fantastic.jpeg')
fantastic.upload.attach(io: file3, filename: 'fantastic.jpeg')

sad_lofi = Video.create(title: 'lofi hip hop radio - sad & sleepy beats', description: "Relaxing & Chill lofi hip hop beats for sleeping/studying.", views: 766, user_id: 4, upload_date: '11 months ago' )
file4 = open('/home/brad/Documents/lofi_sad.jpeg')
sad_lofi.upload.attach(io: file4, filename: 'lofi_sad.jpeg')

dog = Video.create(title: 'dog imitating siren', description: "This is the hilarious moment a dog got so annoyed with a siren it decided to do a better job itself - and performed an amazing imitation.", views: 5656, user_id: 17, upload_date: '2 months ago')
file5 = open('/home/brad/Documents/siren_dog.jpeg')
dog.upload.attach(io: file5, filename: 'siren_dog.jpeg')
    
chill_2 = Video.create(title: 'Chill Study Beats 2 • Instrumental & Jazz Hip Hop Music [2016]', description: "family guy funny moments", views: 146, user_id: 29, upload_date: '2 days ago' )
file6 = open('/home/brad/Documents/chill_2.jpeg')
chill_2.upload.attach(io: file6, filename: 'chill_2.jpeg')

cat = Video.create(title: 'cat jump fail', description: "cat tries to jump fence", views: 279, user_id: 11, upload_date: '3 weeks ago' )
file7 = open('/home/brad/Documents/cat.jpeg')
cat.upload.attach(io: file7, filename: 'cat.jpeg')

prangent = Video.create(title: 'how is prangent formed', description: "am i prangent?", views: 109, user_id: 5, upload_date: '4 years ago' )
file8 = open('/home/brad/Documents/prangent.jpeg')
prangent.upload.attach(io: file8, filename: 'prangent.jpeg')

mouse = Video.create(title: 'shes a wolf in mouse clothing', description: "mouse looks like a wolf", views: 89, user_id: 2, upload_date: '5 days ago' )
file9 = open('/home/brad/Documents/mouse.jpeg')
mouse.upload.attach(io: file9, filename: 'mouse.jpeg')

game = Video.create(title: 'funniest game show answers of all time', description: "funny game show answers", views: 389, user_id: 3, upload_date: '13 hours ago' )
file10 = open('/home/brad/Documents/game.jpeg')
game.upload.attach(io: file10, filename: 'game.jpeg')

watts = Video.create(title: 'Alan Watts ~ Now Is The Time To Change Your Life', description: "Alan Watts Explains in this video, why it is important to take action today and don`t waste your time on waiting for a tomorrow that never comes. Interested in the lecture please follow the link below.", views: 3, user_id: 7, upload_date: '24 minutes ago' )
file11 = open('/home/brad/Documents/watts.jpeg')
watts.upload.attach(io: file11, filename: 'watts.jpeg')

small_talk = Video.create(title: 'How To Skip the Small Talk and Connect With Anyone', description: "Kalina Silverman wanted to see what could happen if she approached strangers and skipped the small talk to have more meaningful conversations with them instead. She made a video documenting the experience.", views: 38, user_id: 14, upload_date: '6 months ago' )
file12 = open('/home/brad/Documents/small_talk.jpeg')
small_talk.upload.attach(io: file12, filename: 'small_talk.jpeg')

social = Video.create(title: 'The social brain and its superpowers', description: "Neuroscientist Matthew Lieberman explains that through his studies he's learned that our kryptonite is ignoring the importance of our social superpowers and by building on our social intuition, we can make ourselves smarter, happier, and more productive. ", views: 745, user_id: 8, upload_date: '1 year ago' )
file13 = open('/home/brad/Documents/social.jpeg')
social.upload.attach(io: file13, filename: 'social.jpeg')

talk = Video.create(title: 'Secret To Getting Better At Talking To People', description: " In today's lesson, we're going to go over what I consider to be the fastest way to getting better at talking to other people.", views: 580, user_id: 2, upload_date: '10 months ago' )
file14 = open('/home/brad/Documents/talk.jpeg')
talk.upload.attach(io: file14, filename: 'talk.jpeg')

sleep = Video.create(title: 'Reprogram Your Mind While You Sleep | "DO THIS BEFORE BED" Dr. Bruce Lipton', description: "Dr. Bruce Lipton 'This will change your life Instantly!' It Takes 5 Minutes!", views: 281, user_id: 9, upload_date: '2 months ago' )
file15 = open('/home/brad/Documents/sleep.jpeg')
sleep.upload.attach(io: file15, filename: 'sleep.jpeg')

wake = Video.create(title: "Alan Watts ~ If you're listening to this lecture then you're ready to wake up...", description: "Spare a minute to also Check out my Music Channel", views: 647, user_id: 18, upload_date: '5 years ago' )
file16 = open('/home/brad/Documents/wake.jpeg')
wake.upload.attach(io: file16, filename: 'wake.jpeg')

shy = Video.create(title: 'How To Stop Being Shy And Awkward', description: "Do you feel shy or awkward? Do you sometimes get nervous in social situations? Today I show you how to stop being shy and awkward forever!", views: 25, user_id: 13, upload_date: '4 weeks ago' )
file17 = open('/home/brad/Documents/shy.jpeg')
shy.upload.attach(io: file17, filename: 'shy.jpeg')

bro = Video.create(title: 'How To Hit On A Girl At The Gym', description: "Bro Science #8: Dom teaches you how to score with the gym ladies.", views: 9, user_id: 5, upload_date: '6 days ago' )
file18 = open('/home/brad/Documents/bro.jpeg')
bro.upload.attach(io: file18, filename: 'bro.jpeg')

engineer = Video.create(title: 'A DAY IN THE LIFE OF A SOFTWARE ENGINEER', description: "I'm a software engineer and I wanted you all to see what a typical day looks like from my perspective. The tech industry is really fun you should join me! I hope you all enjoyed this video.", views: 17, user_id: 2, upload_date: '3 months ago' )
file19 = open('/home/brad/Documents/engineer.jpeg')
engineer.upload.attach(io: file19, filename: 'engineer.jpeg')



gerald = User.create(username: 'g$$$gets_it', password: 'getmoney', email: 'gmoney@gmail.com')
joe = User.create(username: 'whiteboygothops23', password: 'beer123', email: 'joedirt@aa.io')
marshall = User.create(username: 'realmarshall', password: 'notsoslimshady', email: 'marshall@gmail.com')
spencer = User.create(username: 'scones4lyfe', password: 'password', email: 'spence@gmail.com')
ryan = User.create(username: 'hawaii-five-oh', password: 'dontmakemedowork', email: 'lazyry@gmail.com')