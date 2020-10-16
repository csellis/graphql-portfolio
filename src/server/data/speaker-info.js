import basic from './basic'
import talks from './talks'

module.exports = {
  name: basic.name,
  email: basic.email,
  twitter: basic.twitter,
  github: basic.github,
  shirtSize: "Men's M",
  country: 'US',
  bio:
    'Front-End Developer at @YLDio, open sorcerer, Blogger , Drummer and horror movie fan girl 🐈🎃🇵🇹🌈',
  photo: 'https://avatars2.githubusercontent.com/u/814405?s=400&u=4e385cdbf6e1ca6426e15cc3f8f9b177c0cbe7ff&v=4',
  talks: [
    {
      name: 'Waiting for player to join...',
      description:
        "Waiting for player to join..."
    },
  ],
  videos: talks.map(talk => talk.video && talk.video)
}
