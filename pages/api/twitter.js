var Twit = require("twit");

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_KEY_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});

export default T.get(
  "search/tweets",
  { q: "lebron  since:2021-04-9", count: 5 },
  function (err, data, res) {
    // console.log(data);
    data.statuses.map((tweet) => {
      if ((tweet.lang = "en")) {
        // return text of the tweet
        console.log(tweet.text);
        console.log("--------------");
      }
    });

    
    // console.log(data.statuses[0].text);
    // res.status(200).json({ name: "John Doe", stuff: data });
  }
);

// stream = T.stream('statuses/filter', { track: 'mango' })

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })
