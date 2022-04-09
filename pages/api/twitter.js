var Twit = require("twit");

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
      q: "lebron  since:2021-04-9",
      count: 5,
    });

    console.log("@@@@@@@@@@@@");
    console.log(apiResponse.statuses);
 
    // res.end(JSON.stringify(apiResponse));
    res.status(200).json({ apiResponse })
    
    // return res
    //   .status(200)
    //   .json({ status: "ok", Alex: data.statuses, name: "John Doe" });

  } catch (error) {
    console.log(error);
  }
}
