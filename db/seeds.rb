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
Message.destroy_all

u1 = User.create({ username: "Joe Example", email: "example@testing.com", password_digest: "$2a$10$NUcC1WUHew0KodvdRRF5keWYMM3J1FODOEFEEnNBnMKKqr5KpRCIe", session_token: "iQrynmJf63Viws4fDMTw8Q" })
u2 = User.create({ username: "Francis Testperson", email: "frank@testing.com", password_digest: "$2a$10$G0grCgBRtHbeDy8RqEjjE.Cg33Isjhz.0.N3fMIioC6KfmUJ09lai", session_token: "XL_CWkNbQn8E-z_863bASw" })
u3 = User.create({ username: "Elaine Fakename", email: "elaine@testing.com", password_digest: "$2a$10$O.8qHkVJvXscev6GakqJqefVT0DCTA6.6MNLrdoVNHUBvgjBekGgu", session_token: "gWGIXChrXhnmbIhIgQGdAw" })
u4 = User.create({ username: "Empty", email: "empty@testing.com", password_digest: "$2a$10$yFpbqfcsm46SvgV2Y.H09.wRAXyGmY2SwO3qOFNU7gJBOOhLYiTli", session_token: "AEw4pPCrqFVi21LXpI72LA" })



c1 = Channel.create({ title: "2019-01-07-online", is_direct_message: false })
c2 = Channel.create({ title: "Curling Enthusiasts", is_direct_message: false })
c3 = Channel.create({ title: "General", is_direct_message: false })
c4 = Channel.create({ title: "Example!", is_direct_message: false })


Membership.create({ user: u1, channel: c1 })
Membership.create({ user: u2, channel: c1 })

Membership.create({ user: u1, channel: c2 })
Membership.create({ user: u3, channel: c2 })

Membership.create({ user: u2, channel: c3 })
Membership.create({ user: u3, channel: c3 })


Membership.create({ user: u2, channel: c4 })
Membership.create({ user: u3, channel: c4 })



Message.create({ body: "Hey, does anyone use this thing?", author_id: u2.id, channel: c1 })
Message.create({ body: "Yeah, all the time!", author_id: u1.id, channel: c1 })
Message.create({ body: "Ok cool, I was beginning to think we weren't real people", author_id: u2.id, channel: c1 })

Message.create({ body: "Who's best, Canada or Finland?", author_id: u1.id, channel: c2 })
Message.create({ body: "Iceland.  N00b.", author_id: u3.id, channel: c2 })

Message.create({ body: "Is this the best project ever?", author_id: u3.id, channel: c3 })
Message.create({ body: "No.", author_id: u2.id, channel: c3 })
Message.create({ body: "Didn't think so.", author_id: u3.id, channel: c3 })

Message.create({ body: "Dialogue should go here!", author_id: u3.id, channel: c4 })
Message.create({ body: "=(", author_id: u2.id, channel: c4 })