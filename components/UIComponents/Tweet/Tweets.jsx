import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Tweet } from "./Tweet";
import EmbedTweet from "./EmbedTweet";
import axios from "axios";

export const Tweets = () => {
  const [allTweets, setallTweets] = useState([]);

  const fetchTwitter = async () => {
    try {
      const res = await axios.get("/api/twitter");

      console.log("@@@@@@@@@@@@@@THE DATA: ", res.data.tweets);

      const recentTweetsArray = res.data.tweets;
      setallTweets(recentTweetsArray);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTwitter();
  }, []);

  const tweetsForTimeLine = allTweets.map((tweet) => {
    if (tweet.lang === "en") {
      return (
        <Box  w={"100%"} maxW={"2xl"}>
          <EmbedTweet tweetId={tweet.id_str} />
        </Box>
      );
    }
  });

  return <Box width={"1200px"}>{tweetsForTimeLine}</Box>;
  //   return <>{tweetsForTimeLine}<EmbedTweet tweetId={"1485953263040188416"} />;</>;
};

//   const tweetsForTimeLine = allTweets.map((tweet) => {
//     if (tweet.lang === "en") {
//       return (
//         <>
//           <Tweet
//             name={tweet.user.name}
//             handle={tweet.user.screen_name}
//             // tweetText={tweet.retweeted_status.full_text}
//             tweetText={tweet.full_text}
//             // tweetText={text}
//             timestamp={tweet.created_at}
//             profilePic={tweet.user.profile_image_url_https}
//           />
//         </>
//       );
//     }
//   });
