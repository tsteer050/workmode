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

u1 = User.create({ username: "Joe Example", email: "example@testing.com", password_digest: "$2a$10$NUcC1WUHew0KodvdRRF5keWYMM3J1FODOEFEEnNBnMKKqr5KpRCIe", session_token: "iQrynmJf63Viws4fDMTw8Q", photo_url: "https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg" })
u2 = User.create({ username: "Francis Testperson", email: "frank@testing.com", password_digest: "$2a$10$G0grCgBRtHbeDy8RqEjjE.Cg33Isjhz.0.N3fMIioC6KfmUJ09lai", session_token: "XL_CWkNbQn8E-z_863bASw", photo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cnnoTFkdWionW_grl1ZaHSPFMVcuBz53n91ym59PJ6TjdkQa7A" })
u3 = User.create({ username: "Elaine Fakename", email: "elaine@testing.com", password_digest: "$2a$10$O.8qHkVJvXscev6GakqJqefVT0DCTA6.6MNLrdoVNHUBvgjBekGgu", session_token: "gWGIXChrXhnmbIhIgQGdAw", photo_url: "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg" })
u4 = User.create({ username: "Maria Samplehuman", email: "maria@testing.com", password_digest: "$2a$10$yFpbqfcsm46SvgV2Y.H09.wRAXyGmY2SwO3qOFNU7gJBOOhLYiTli", session_token: "AEw4pPCrqFVi21LXpI72LA", photo_url: "https://annemariesegal.files.wordpress.com/2017/04/adobestock_86346713-cropped-young-woman-in-suit.jpg?w=640" })

u5 = User.create({ username: "Sergey Examplski", email: "sergey@testing.com", password_digest: "$2a$10$yFpbqfcsm46SvgV2Y.H09.wRAXyGmY2SwO3qOFNU7gJBOOhLYiTli", session_token: "AEw4pPCrqFVi71LXpI72LA", photo_url: "https://wiwibloggs.com/wp-content/uploads/2019/03/sergey-lazarev-eurovision-2019-800x600.jpg" })
u6 = User.create({ username: "Martin Placeholder", email: "martin@testing.com", password_digest: "$2a$10$yFpbqfcsm46SvgV2Y.H09.wRAXyGmY2SwO3qOFNU7gJBOOhLYiTli", session_token: "AEw4pPCrqFVi25LXpI72LA", photo_url: "https://breakdownservices.s3.amazonaws.com/media/photos/2013/10/323D4112-9429-309E-3E4BD58059E413D3.jpg" })
u7 = User.create({ username: "Valery Falseman", email: "valery@testing.com", password_digest: "$2a$10$yFpbqfcsm46SvgV2Y.H09.wRAXyGmY2SwO3qOFNU7gJBOOhLYiTli", session_token: "AEw4pPCrqFVi21L9pI72LA", photo_url: "data:image/jpeg;base64,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" })
u8 = User.create({ username: "Koy Testuser", email: "koy@testing.com", password_digest: "$2a$10$yFpbqfcsm46SvgV2Y.H09.wRAXyGmY2SwO3qOFNU7gJBOOhLYiTli", session_token: "AEw4pPCrqFVi21LXpI7gLA", photo_url: "https://media.licdn.com/dms/image/C5603AQHg21GQGMvl8Q/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=6S6KGHwO74FAhaIHrSlbE2yWhZ8J29f-k9FCQAv3sfQ" })
u9 = User.create({ username: "Mashu Normalsby", email: "mashu@testing.com", password_digest: "$2a$10$yFpbqfcsm46SvgV2Y.H09.wRAXyGmY2SwO3qOFNU7gJBOOhLYiTli", session_token: "AEw4pPCrqFVi2jLXpI72LA", photo_url: "https://cdn.buttercms.com/vWYO7X4QyKmy8RI4331N" })
u10 = User.create({ username: "Tommy Default", email: "tommy@testing.com", password_digest: "$2a$10$yFpbqfcsm46SvgV2Y.H09.wRAXyGmY2SwO3qOFNU7gJBOOhLYiTli", session_token: "AEw4pPCrqFVi21LhpI72LA", photo_url: "https://avatars1.githubusercontent.com/u/1222703?s=460&v=4" })
u11 = User.create({ username: "Andy Stocksworth", email: "andy@testing.com", password_digest: "$2a$10$yFpbqfcsm46SvgV2Y.H09.wRAXyGmY2SwO3qOFNU7gJBOOhLYiTli", session_token: "AEw4pPCrqFVi21vXpI72LA", photo_url: "https://avatars1.githubusercontent.com/u/24970377?s=460&v=4" })
u12 = User.create({ username: "Elizabeth Fakington", email: "liz@testing.com", password_digest: "$2a$10$yFpbqfcsm46SvgV2Y.H09.wRAXyGmY2SwO3qOFNU7gJBOOhLYiTli", session_token: "AEw4pPCrqFVi2dLXpI72LA", photo_url: "https://2d3z3x4e2xrx130kvm2hxdsp-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Tracy_Wright_Corvo_Photography_business_headshot-1.jpg" })


c1 = Channel.create({ title: "Example Main Channel", is_direct_message: false })
c2 = Channel.create({ title: "Curling Enthusiasts", is_direct_message: false })
c3 = Channel.create({ title: "General", is_direct_message: false })
c4 = Channel.create({ title: "Current Events", is_direct_message: false })
c5 = Channel.create({ title: "Archery Discussion", is_direct_message: false })
c6 = Channel.create({ title: "Web Socket Fanclub", is_direct_message: false })
c7 = Channel.create({ title: "Action Cable & Adventure", is_direct_message: false })
c8 = Channel.create({ title: "Web Development", is_direct_message: false })
c9 = Channel.create({ title: "Empty", is_direct_message: false })


Membership.create({ user: u1, channel: c1 })
Membership.create({ user: u2, channel: c1 })
Membership.create({ user: u3, channel: c1 })
Membership.create({ user: u4, channel: c1 })
Membership.create({ user: u5, channel: c1 })
Membership.create({ user: u6, channel: c1 })
Membership.create({ user: u7, channel: c1 })

Membership.create({ user: u1, channel: c2 })
Membership.create({ user: u3, channel: c2 })
Membership.create({ user: u8, channel: c2 })
Membership.create({ user: u9, channel: c2 })
Membership.create({ user: u4, channel: c2 })
Membership.create({ user: u5, channel: c2 })

Membership.create({ user: u2, channel: c3 })
Membership.create({ user: u3, channel: c3 })
Membership.create({ user: u4, channel: c3 })
Membership.create({ user: u10, channel: c3 })
Membership.create({ user: u12, channel: c3 })
Membership.create({ user: u7, channel: c3 })

Membership.create({ user: u2, channel: c4 })
Membership.create({ user: u3, channel: c4 })
Membership.create({ user: u11, channel: c4 })
Membership.create({ user: u5, channel: c4 })

Membership.create({ user: u10, channel: c5 })
Membership.create({ user: u3, channel: c5 })
Membership.create({ user: u6, channel: c5 })
Membership.create({ user: u8, channel: c5 })

Membership.create({ user: u3, channel: c6 })
Membership.create({ user: u4, channel: c6 })
Membership.create({ user: u6, channel: c6 })
Membership.create({ user: u8, channel: c6 })

Membership.create({ user: u8, channel: c7 })
Membership.create({ user: u10, channel: c7 })
Membership.create({ user: u11, channel: c7 })
Membership.create({ user: u5, channel: c7 })

Membership.create({ user: u7, channel: c8 })
Membership.create({ user: u8, channel: c8 })
Membership.create({ user: u12, channel: c8 })
Membership.create({ user: u2, channel: c8 })


Message.create({ body: "Hey, does anyone use this thing?", author_id: u6.id, channel: c1 })
Message.create({ body: "Yeah, all the time!", author_id: u7.id, channel: c1 })
Message.create({ body: "This is all I do, all day, every day", author_id: u2.id, channel: c1 })
Message.create({ body: "Of course.  Group messaging = productivity", author_id: u3.id, channel: c1 })
Message.create({ body: "Ok cool, I was beginning to think we weren't real people", author_id: u6.id, channel: c1 })
Message.create({ body: "Wait... what do you mean by that?", author_id: u4.id, channel: c1 })
Message.create({ body: "I guess, you know, these messages were all sent at the exact same time, and none of us have ever posted again, and...", author_id: u6.id, channel: c1 })
Message.create({ body: "Oh god, what am I?", author_id: u5.id, channel: c1 })
Message.create({ body: "Such a cruel twist of fate", author_id: u7.id, channel: c1 })

Message.create({ body: "Who's best, Canada or Finland?", author_id: u8.id, channel: c2 })
Message.create({ body: "Iceland, obviously.", author_id: u3.id, channel: c2 })
Message.create({ body: "Nobody sweeps a broom like Sweden.", author_id: u5.id, channel: c2 })
Message.create({ body: "Agreed, it's a thing of beauty.", author_id: u9.id, channel: c2 })


Message.create({ body: "What did you guys think of the last episode of Game of Thrones?", author_id: u3.id, channel: c3 })
Message.create({ body: "Pretty underwhelming.", author_id: u2.id, channel: c3 })
Message.create({ body: "The quality of writing definitely went downhill when they ran out of source material.", author_id: u4.id, channel: c3 })
Message.create({ body: "I don't know, I loved how in that last scene with Jon and Dani...", author_id: u10.id, channel: c3 })
Message.create({ body: "Hey, maybe you shouldn't put spoilers into a seeded conversation for no reason", author_id: u7.id, channel: c3 })
Message.create({ body: "Yeah, fair enough.", author_id: u10.id, channel: c3 })


Message.create({ body: "You guys like tarrifs?", author_id: u3.id, channel: c4 })
Message.create({ body: "...", author_id: u2.id, channel: c4 })
Message.create({ body: "=(", author_id: u5.id, channel: c4 })
Message.create({ body: "Yeah...", author_id: u3.id, channel: c4 })


Message.create({ body: "Katniss is the best at archery, end of story", author_id: u8.id, channel: c5 })
Message.create({ body: "Seriously?", author_id: u3.id, channel: c5 })
Message.create({ body: "Katniss is dope and imma let her finish but Robin Hood was the best archer OF ALL TIME", author_id: u10.id, channel: c5 })
Message.create({ body: "What's your draw weight bro?", author_id: u6.id, channel: c5 })

Message.create({ body: "HTTP is the best!", author_id: u3.id, channel: c6 })
Message.create({ body: "Wrong channel.  Go back to your monodirectional request response cycle LOL", author_id: u6.id, channel: c6 })
Message.create({ body: "Socket it to me!", author_id: u8.id, channel: c6 })
Message.create({ body: "...", author_id: u4.id, channel: c6 })

Message.create({ body: "Will anyone think less of me if I am having trouble coming up with more clever seed dialogue?", author_id: u5.id, channel: c7 })
Message.create({ body: "Pretty much everyone", author_id: u8.id, channel: c7 })
Message.create({ body: "Most likely", author_id: u11.id, channel: c7 })
Message.create({ body: "I'll support you!", author_id: u10.id, channel: c7 })
Message.create({ body: "Thanks Tommy!", author_id: u5.id, channel: c7 })
Message.create({ body: "Psych", author_id: u10.id, channel: c7 })
Message.create({ body: "I should have known... =(", author_id: u5.id, channel: c7 })

Message.create({ body: "Hey, how do you guys feel about Web Sockets?", author_id: u7.id, channel: c8 })
Message.create({ body: "They are truly the zest of existence", author_id: u8.id, channel: c8 })
Message.create({ body: "Truly.", author_id: u12.id, channel: c8 })
Message.create({ body: "Without question.", author_id: u2.id, channel: c8 })




