import { TwitterTweetEmbed } from "react-twitter-embed";
import { Box } from "@chakra-ui/react";
const EmbedTweet = ({ tweetId }) => {
  return (
    <Box width={"md"}>
      <TwitterTweetEmbed
      
      theme="dark"
        tweetId={tweetId}
        // options={{ transform: "translateZ(0)" }}
      />
    </Box>
  );
};

export default EmbedTweet;
