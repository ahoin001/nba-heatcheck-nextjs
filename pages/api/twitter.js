var Twit = require("twit");
import axios from "axios";

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_KEY_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});

export default async function (req, res) {
  try {
    const apiResponse = await T.get("search/tweets", {
      q: "durant  since:2021-04-9 -RT",
      count: 10,
      tweet_mode:'extended'
    });

    console.log("@@@@@@@@@@@@");
    console.log(apiResponse.data.statuses);

    const tweets = apiResponse.data.statuses

    res.status(200).json({ tweets })

  } catch (error) {
    console.log(error);
  }
}


