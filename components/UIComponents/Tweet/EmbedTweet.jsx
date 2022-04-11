import { TwitterTweetEmbed } from "react-twitter-embed";
import { Box, Flex, VStack, HStack } from "@chakra-ui/react";
const EmbedTweet = ({ tweetId }) => {
  return (
    <Box 
    // w={{base:'800px'}} 
    // w={"sm:xs,md:800px"} 
    p={4}
    >
      <TwitterTweetEmbed
        tweetId={tweetId}
        // options={{width:"80px"}}
      />
    </Box>
  );
};

export default EmbedTweet;
