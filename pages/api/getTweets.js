import axios from "axios";

export default async function (req, res) {
  try {
    const response = await axios.get(
      `https://api.twitter.com/2/tweets/search/recent?query=-is%3Areply%20-is%3Aquote%20-is%3Aretweet%20lebron&max_results=10&tweet.fields=id,lang`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    );
    res.statusCode = 200;
    // res.setHeader("Content-Type", "application/json");
    console.log(response.data.data);
    res.end(JSON.stringify(response.data.data));
    // res.status(200).json({ name: "John Doe" });
  } catch (error) {
    console.log(error);
    res.end(JSON.stringify(error));
  }
}
