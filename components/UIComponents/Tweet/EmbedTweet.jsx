import { TwitterTweetEmbed } from "react-twitter-embed";
import { Box } from "@chakra-ui/react";
const EmbedTweet = ({ tweetId }) => {
  return (
    <Box width={{ base: "280px", md: "380px" }}>
      <TwitterTweetEmbed
        tweetId={tweetId}
        // options={{ transform: "translateZ(0)" }}
      />
    </Box>
  );
};

export default EmbedTweet;
