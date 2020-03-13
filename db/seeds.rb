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
file = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/diabeetus3.jpg')
# file20 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/diabeetus.mp4')
diabeetus.photo.attach(io: file, filename: 'diabeetus3.jpg')
# diabeetus.upload.attach(io: file20, filename: 'diabeetus.mp4')

chill = Video.create(title: 'midnight aura. [lofi/jazzhop/chill mix]', description: "for those serene moments at the end of a long day", views: 35, user_id: 25, upload_date: '4 days ago' )
file1 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/midnight.jpeg')
chill.photo.attach(io: file1, filename: 'midnight.jpeg')

majestic = Video.create(title: "Nas - Life's a Bitch(Sourface Remix) ", description: "Majestic Casual - Experience music in a new way", views: 499, user_id: 7, upload_date: '5 months ago' )
file2 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/nas.jpg')
majestic.photo.attach(io: file2, filename: 'nas.jpg')

fantastic = Video.create(title: 'Chill Beats Lofi & Jazzhop', description: "chill beats", views: 135, user_id: 22, upload_date: '2 years ago' )
file3 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/fantastic.jpeg')
fantastic.photo.attach(io: file3, filename: 'fantastic.jpeg')

sad_lofi = Video.create(title: 'lofi hip hop radio - sad & sleepy beats', description: "Relaxing & Chill lofi hip hop beats for sleeping/studying.", views: 766, user_id: 4, upload_date: '11 months ago' )
file4 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/lofi_sad.jpeg')
sad_lofi.photo.attach(io: file4, filename: 'lofi_sad.jpeg')

dog = Video.create(title: 'dog imitating siren', description: "This is the hilarious moment a dog got so annoyed with a siren it decided to do a better job itself - and performed an amazing imitation.", views: 556, user_id: 17, upload_date: '2 months ago')
file5 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/siren_dog.jpeg')
dog.photo.attach(io: file5, filename: 'siren_dog.jpeg')
    
chill_2 = Video.create(title: 'Chill Study Beats 2 • Instrumental & Jazz Hip Hop Music [2016]', description: "chill music to study to", views: 146, user_id: 29, upload_date: '2 days ago' )
file6 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/chill_2.jpeg')
chill_2.photo.attach(io: file6, filename: 'chill_2.jpeg')

cat = Video.create(title: 'cat jump fail', description: "cat tries to jump fence", views: 279, user_id: 11, upload_date: '3 weeks ago' )
file7 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/cat2.jpg')
cat.photo.attach(io: file7, filename: 'cat2.jpeg')

event_loop = Video.create(title: 'What the heck is the event loop anyway? | Philip Roberts | JSConf EU', description: "With some handy visualisations, and fun hacks, let’s get an intuitive understanding of what happens when JavaScript runs.", views: 109, user_id: 5, upload_date: '4 years ago' )
file8 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/event_loop.jpg')
event_loop.photo.attach(io: file8, filename: 'event_loop.jpg')

mouse = Video.create(title: 'shes a wolf in mouse clothing', description: "mouse looks like a wolf", views: 89, user_id: 2, upload_date: '5 days ago' )
file9 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/mouse.jpeg')
mouse.photo.attach(io: file9, filename: 'mouse.jpeg')

game = Video.create(title: 'funniest game show answers of all time', description: "funny game show answers", views: 389, user_id: 3, upload_date: '13 hours ago' )
file10 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/game3.jpeg')
game.photo.attach(io: file10, filename: 'game3.jpeg')

watts = Video.create(title: 'Alan Watts ~ Now Is The Time To Change Your Life', description: "Alan Watts Explains in this video, why it is important to take action today and don`t waste your time on waiting for a tomorrow that never comes. Interested in the lecture please follow the link below.", views: 3, user_id: 7, upload_date: '24 minutes ago' )
file11 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/watts.jpeg')
watts.photo.attach(io: file11, filename: 'watts.jpeg')

small_talk = Video.create(title: 'How To Skip the Small Talk and Connect With Anyone', description: "Kalina Silverman wanted to see what could happen if she approached strangers and skipped the small talk to have more meaningful conversations with them instead. She made a video documenting the experience.", views: 38, user_id: 14, upload_date: '6 months ago' )
file12 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/small_talk.jpeg')
small_talk.photo.attach(io: file12, filename: 'small_talk.jpeg')

social = Video.create(title: 'The social brain and its superpowers', description: "Neuroscientist Matthew Lieberman explains that through his studies he's learned that our kryptonite is ignoring the importance of our social superpowers and by building on our social intuition, we can make ourselves smarter, happier, and more productive. ", views: 745, user_id: 8, upload_date: '1 year ago' )
file13 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/social.jpeg')
social.photo.attach(io: file13, filename: 'social.jpeg')

talk = Video.create(title: 'Secret To Getting Better At Talking To People', description: " In today's lesson, we're going to go over what I consider to be the fastest way to getting better at talking to other people.", views: 580, user_id: 2, upload_date: '10 months ago' )
file14 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/talk.jpeg')
talk.photo.attach(io: file14, filename: 'talk.jpeg')

sleep = Video.create(title: 'Reprogram Your Mind While You Sleep | "DO THIS BEFORE BED" Dr. Bruce Lipton', description: "Dr. Bruce Lipton 'This will change your life Instantly!' It Takes 5 Minutes!", views: 281, user_id: 9, upload_date: '2 months ago' )
file15 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/sleep.jpeg')
sleep.photo.attach(io: file15, filename: 'sleep.jpeg')

wake = Video.create(title: "Alan Watts ~ If you're listening to this lecture then you're ready to wake up...", description: "Spare a minute to also Check out my Music Channel", views: 647, user_id: 18, upload_date: '5 years ago' )
file16 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/wake.jpeg')
wake.photo.attach(io: file16, filename: 'wake.jpeg')

shy = Video.create(title: 'How To Stop Being Shy And Awkward', description: "Do you feel shy or awkward? Do you sometimes get nervous in social situations? Today I show you how to stop being shy and awkward forever!", views: 25, user_id: 13, upload_date: '4 weeks ago' )
file17 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/shy.jpeg')
shy.photo.attach(io: file17, filename: 'shy.jpeg')

bro = Video.create(title: 'How To Hit On A Girl At The Gym', description: "Bro Science #8: Dom teaches you how to score with the gym ladies.", views: 9, user_id: 5, upload_date: '6 days ago' )
file18 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/bro.jpeg')
bro.photo.attach(io: file18, filename: 'bro.jpeg')

engineer = Video.create(title: 'A DAY IN THE LIFE OF A SOFTWARE ENGINEER', description: "I'm a software engineer and I wanted you all to see what a typical day looks like from my perspective. The tech industry is really fun you should join me! I hope you all enjoyed this video.", views: 17, user_id: 2, upload_date: '3 months ago' )
file19 = open('https://adtube-aa-dev.s3-us-west-1.amazonaws.com/engineer.jpeg')
engineer.photo.attach(io: file19, filename: 'engineer.jpeg')



gerald = User.create(username: 'g$$$gets_it', password: 'getmoney', email: 'gmoney@gmail.com')
joe = User.create(username: 'whiteboygothops23', password: 'beer123', email: 'joedirt@aa.io')
marshall = User.create(username: 'realmarshall', password: 'notsoslimshady', email: 'marshall@gmail.com')
spencer = User.create(username: 'scones4lyfe', password: 'password', email: 'spence@gmail.com')
ryan = User.create(username: 'hawaii-five-oh', password: 'dontmakemedowork', email: 'lazyry@gmail.com')