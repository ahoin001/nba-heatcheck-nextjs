import { useState } from "react";

import { Box, Flex } from "@chakra-ui/react";

import { PlayerSearch } from "./components/Playersearch/PlayerSearch";

export default function Home() {
  const [nbaPlayer, setNbaPlayer] = useState({
    playerInfo: {},
    lastTenGamesInfo: {},
    selectedOption: { value: "-", label: "Type Player Name Here" },
  });

  return (
    <>
      <Box height={"100vh"}>
        <Flex
          direction={"column"}
          // TODO Look up why this resolves probelm with contenet smushing when resizing to smaller screen
          wrap={"wrap"}
          justify={"center"}
          align={"center"}
        >
          <PlayerSearch nbaPlayer={nbaPlayer} setNbaPlayer={setNbaPlayer} />
        </Flex>
      </Box>
    </>
  );
}
