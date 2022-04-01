import { Divider, Box, Heading, VStack } from "@chakra-ui/react";

export const PlayerInfo = ({ playerInfo }) => {
  if (JSON.stringify(playerInfo) === "{}") {
    return "";
  } else {
    console.log("PLAYER INFO PARMA: ", playerInfo);
    return (
      <>
        <Box my={12}>
          <VStack spacing={8} align={"center"} justify={"center"}>
            <Heading size="3xl" fontWeight={"medium"}>
              {" "}
              {playerInfo.currentPlayer.firstName}{" "}
            </Heading>
            <Heading size="4xl"> {playerInfo.currentPlayer.lastName} </Heading>
            <Heading size="2xl" fontWeight={"medium"}>
              {" "}
              Position: {playerInfo.currentPlayer.leagues.standard.pos}{" "}
            </Heading>

            <Heading size="xl">
              {" "}
              Jersey #: {playerInfo.currentPlayer.leagues.standard.jersey}{" "}
            </Heading>
            <Divider />
          </VStack>
        </Box>
      </>
    );
  }
};
