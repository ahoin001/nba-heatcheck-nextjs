import { useState, useEffect } from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
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
      console.log("MAPPING DATA THIS IS OBJECT", tweet);
      return <EmbedTweet key={tweet.id} tweetId={tweet.id} />;
    }
  });

  return (
    <Flex
      //   maxW={{ base: "3xs", md: "60%" }}
      maxW={"80%"}
      justify={"space-around"}
      wrap={"wrap"}
      bg={"gray.300"}
    >
      {tweetsForTimeLine}
    </Flex>
  );
};
