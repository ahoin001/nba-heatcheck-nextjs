import { Tweets } from "../UIComponents/Tweet/Tweets";
import { Box } from "@chakra-ui/react";

export const Timeline = () => {
  return (
    <>
      <Box w={"xl"}>
        <Tweets />
      </Box>
    </>
  );
};
