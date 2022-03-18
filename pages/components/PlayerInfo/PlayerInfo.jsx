import { Skeleton, Box, Heading, VStack } from "@chakra-ui/react";

const playerInfo = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: "1 1 auto" /* Positive flex-shrink */,
  marginTop: "3.2rem",
  color: "rgb(236,239,241)",
  // border: '1px solid green'
};

export const PlayerInfo = ({ playerInfo }) => {
  if (JSON.stringify(playerInfo) === "{}") {
    return <Skeleton height={"500px"} />;
  } else {
    return (
      <>
        <Box>
          <VStack spacing={8}>
            <Heading size="3xl"> {playerInfo.currentPlayer.firstName} </Heading>
            <Heading size="4xl"> {playerInfo.currentPlayer.lastName} </Heading>
            <Heading size="2xl">
              {" "}
              Position: {playerInfo.currentPlayer.leagues.standard.pos}{" "}
            </Heading>

            <Heading size="xl">
              {" "}
              Jersey #: {playerInfo.currentPlayer.leagues.standard.jersey}{" "}
            </Heading>

            <div className="divider"> </div>
          </VStack>
        </Box>
      </>
    );
  }
};
