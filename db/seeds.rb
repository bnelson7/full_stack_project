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

chill = Video.create(title: 'midnight aura. [lofi/jazzhop/chill mix]', description: "for those serene moments at the end of a long day", views: 35, user_id: 25 )
file = open('/home/brad/Documents/download.jpeg')
chill.upload.attach(io: file, filename: 'download.jpeg')

thrill = Video.create(title: 'The Thrill', description: "the thrill-wiz khalifa ", views: 499, user_id: 7 )
file1 = open('/home/brad/Documents/the_thrill.jpeg')
thrill.upload.attach(io: file1, filename: 'the_thrill.jpeg')

fantastic = Video.create(title: 'Chill Beats Lofi & Jazzhop', description: "chill beats", views: 135, user_id: 22 )
file2 = open('/home/brad/Documents/fantastic.jpeg')
fantastic.upload.attach(io: file2, filename: 'fantastic.jpeg')

diabeetus = Video.create(title: 'diabeetus', description: "wilford brimley", views: 203, user_id: 14 )
file3 = open('/home/brad/Documents/diabeetus.jpeg')
diabeetus.upload.attach(io: file3, filename: 'diabeetus.jpeg')

teb = Video.create(title: 'Company of Strangers', description: "third eye blind-company of strangers", views: 766, user_id: 4 )
file4 = open('/home/brad/Documents/teb.jpeg')
teb.upload.attach(io: file4, filename: 'teb.jpeg')

# family_guy = Video.create(title: 'peter becomes millennial hipster', description: "family guy funny moments", views: 1646, user_id: 29 )
# dog = Video.create(title: 'dog imitating siren', description: "funny animal video", views: 5656, user_id: 17)
# cat = Video.create(title: 'cat jump fail', description: "cat tries to jump fence", views: 2079, user_id: 11 )
# prangent = Video.create(title: 'how is prangent formed', description: "am i prangent?", views: 3079, user_id: 5 )
# mouse = Video.create(title: 'shes a wolf in mouse clothing', description: "mouse looks like a wolf", views: 89, user_id: 2 )
# game = Video.create(title: 'funniest game show moments of all time', description: "funny game show moments", views: 389, user_id: 3 )


gerald = User.create(username: 'g$$$gets_it', password: 'getmoney', email: 'gmoney@gmail.com')
joe = User.create(username: 'whiteboygothops23', password: 'beer123', email: 'joedirt@aa.io')
marshall = User.create(username: 'realmarshall', password: 'notsoslimshady', email: 'marshall@gmail.com')
spencer = User.create(username: 'scones4lyfe', password: 'password', email: 'spence@gmail.com')
ryan = User.create(username: 'hawaii-five-oh', password: 'dontmakemedowork', email: 'lazyry@gmail.com')