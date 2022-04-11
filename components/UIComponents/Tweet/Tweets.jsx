import { useState, useEffect } from "react";
import { background, Flex, HStack } from "@chakra-ui/react";
import EmbedTweet from "./EmbedTweet";
import axios from "axios";

export const Tweets = () => {
  const [allTweets, setallTweets] = useState([]);

  const fetchTwitter = async () => {
    try {
      const res = await axios.get("/api/getTweets");

      console.log("+++++++++++++++THE DATA: ", res.data);

      setallTweets(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTwitter();
  }, []);

  const tweetsForTimeLine = allTweets.map((tweet) => {
    if (tweet.lang === "en") {
      //   console.log("MAPPING DATA THIS IS OBJECT", tweet);
      return <EmbedTweet key={tweet.id} tweetId={tweet.id} />;
    }
  });

  return (
    <HStack
      maxW={{ base: "3xs", md: "75%" }}
      justify={"space-around"}
      align="center"
      wrap={"wrap"}
    //   bg={"blackAlpha.400"}
    //   backdropFilter="auto"
    //   backdropBlur="6px"
    >
      {tweetsForTimeLine}
    </HStack>
  );
};
