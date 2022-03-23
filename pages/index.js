import { useState } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import theme from "./theme";

import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

import { PlayerSearch } from "./components/Playersearch/PlayerSearch";

export default function Home() {
  const [nbaPlayer, setNbaPlayer] = useState({
    playerInfo: {},
    lastTenGamesInfo: {},
    selectedOption: { value: "-", label: "Type Player Name Here" },
  });

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box height={"100vh"} bg="">
        <IconButton mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
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
