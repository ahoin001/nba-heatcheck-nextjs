import { Box } from "@chakra-ui/react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const EmbedTweet = ({ tweetId }) => {
  return (
    // <Box maxW={"1900px"}>
      <TwitterTweetEmbed tweetId={tweetId} options={{width:"700px"}} />
    // </Box>
  );
};

export default EmbedTweet;
