import { Statbox } from "./Statbox";
import { Heading, HStack, Box, Flex, Center, VStack } from "@chakra-ui/react";

export const StatboxAverages = ({
  playerPPG,
  playerRPG,
  playerAPG,
  playerSPG,
  playerBPG,
  playerTOPG,
  playerFGAPG,
  playerFGMPG,
  FGPercent,
  playerFTAPG,
  playerFTAMPG,
  FTPercent,
}) => {
  return (
    <VStack 
    // bg={"yellow"}  
    width={["400px","500px","700px","900px"]} 
    mx="auto">
      <Heading
        fontSize={["2xl", "3xl", "4xl", "5xl"]}
        p={[6, 10, 12]}
        textAlign={"center"}
      >
        CURRENT SEASON AVERAGES
      </Heading>

      <Flex
        // bg={"blue"}
        justify={"center"}
        width={["400px","550px","700px","1000px"]}
        wrap={"wrap"}
        px={[3, 6, 9]}
        mb={9}
      >
        <Statbox Stat={"PPG"} Average={playerPPG} />
        <Statbox Stat={"RPG"} Average={playerRPG} />
        <Statbox Stat={"APG"} Average={playerAPG} />
        <Statbox Stat={"SPG"} Average={playerSPG} />
        <Statbox Stat={"BPG"} Average={playerBPG} />
        <Statbox Stat={"TO"} Average={playerTOPG} />
        <Statbox Stat={"FGA"} Average={playerFGAPG} />
        <Statbox Stat={"FGM"} Average={playerFGMPG} />
        <Statbox Stat={"FG%"} Average={FGPercent} />
        <Statbox Stat={"FTA"} Average={playerFTAPG} />
        <Statbox Stat={"FM"} Average={playerFTAMPG} />
        <Statbox Stat={"FT%"} Average={FTPercent} />
      </Flex>
    </VStack>
  );
};
