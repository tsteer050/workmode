# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Channel.destroy_all
Membership.destroy_all

u1 = User.create({ username: "Joe Example", email: "example@testing.com", password_digest: "$2a$10$NUcC1WUHew0KodvdRRF5keWYMM3J1FODOEFEEnNBnMKKqr5KpRCIe", session_token: "iQrynmJf63Viws4fDMTw8Q" })

c1 = Channel.create({ title: "2019-01-07-online", is_direct_message: false })
c2 = Channel.create({ title: "Curling Enthusiasts", is_direct_message: false })

Membership.create({ user: u1, channel: c1 })
Membership.create({ user: u1, channel: c2 })

Message.create({ body: "Hey, does anyone use this thing?", author_id: u1.id, channel: c1 })
Message.create({ body: "Hello?  Anyone??", author_id: u1.id, channel: c1 })
