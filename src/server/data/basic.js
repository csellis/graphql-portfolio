const distanceInWordsToNow = require('date-fns/distance_in_words_to_now')

module.exports = {
  name: 'Chris Ellis',
  company: 'CVS/Pharmacy',
  email: 'me@chrisellis.dev',
  freelancing: true,
  age: distanceInWordsToNow(new Date(1986, 5, 14)),
  twitter: 'https://twitter.com/slingingdivs',
  github: 'https://github.com/csellis/',
  photo: 'https://avatars2.githubusercontent.com/u/814405?s=400&u=4e385cdbf6e1ca6426e15cc3f8f9b177c0cbe7ff&v=4',
}
