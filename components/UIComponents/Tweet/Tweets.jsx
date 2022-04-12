import { background, Center, Flex, HStack } from "@chakra-ui/react";

import EmbedTweet from "./EmbedTweet";

export const Tweets = ({ fetchedTweets }) => {
  console.log("TWEETS VARIABLE FROM FETCH: ", fetchedTweets);

  let tweetsForTimeLine;
  // When fetchedtweets array is available, map through to create tweets
  {
    Array.isArray(fetchedTweets)
      ? (tweetsForTimeLine = fetchedTweets.map((tweet) => {
          if (tweet.lang === "en") {
            console.log("MAPPING DATA THIS IS OBJECT", tweet);
            return <EmbedTweet key={tweet.id} tweetId={tweet.id} />;
          }
        }))
      : "";
  }

  return (
    <Center>
      {" "}
      <HStack
        // maxW={{ base: "3xs", md: "70%" }}
        // w={{ base: "500px", md: "1000px" }}
        justify={"space-around"}
        align="center"
        wrap={"wrap"}
        bg={"gray.100"}
        backdropFilter="auto"
        backdropBlur="8px"
      >
        {tweetsForTimeLine ? tweetsForTimeLine : ""}
      </HStack>
    </Center>
  );
};
