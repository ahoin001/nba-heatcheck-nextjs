import { useState, useEffect } from "react";
import { useQueryClient } from "react-query";
import { Box, Flex, Spinner } from "@chakra-ui/react";

import { PlayerSearch } from "./components/Playersearch/PlayerSearch";

import { ComboBox } from "./components/UIComponents/ComboBoxSelect";
import { LineGraph } from "./components/LineChart/LineGraph";
import { SubmitButton } from "./components/UIComponents/Button";

import { LastTenGames } from "./components/LastTenGames/LastTenGames";
import { PlayerInfo } from "./components/PlayerInfo/PlayerInfo";
import { BoxScore } from "./components/statbox/BoxScore";

export default function Home() {
  const [nbaPlayer, setNbaPlayer] = useState({
    playerInfo: {},
    lastTenGamesInfo: {},
    selectedOption: { value: "-", label: "Type Player Name Here" },
  });

  // const queryClient = useQueryClient();
  // const isFetchingPlayerInfo = queryClient.getQueryState("playerInfo");
  // console.log("$$$$$$$$$$$$$$ THE QUERYDATA: ", isFetchingPlayerInfo);
  // if (isFetchingPlayerInfo === undefined) {
  // }

  return (
    <>
      <Box height={"100vh"}>
        <Flex
          direction={"column"}
          // TODO Look up why this resolves probelm with contenet smushing when resizing to smaller screen
          wrap={"wrap"}
          // spacingY="180px"
          justify={"center"}
          align={"center"}
        >
          <PlayerSearch nbaPlayer={nbaPlayer} setNbaPlayer={setNbaPlayer} />

          {/* {lastTenGamesInfo ? <BoxScore playerAvgs={lastTenGamesInfo} /> : ""}

          {lastTenGamesInfo ? (
            <LineGraph LastTenGames={lastTenGamesInfo} />
          ) : (
            ""
          )}

          {lastTenGamesInfo ? (
            <LastTenGames LastTenGames={lastTenGamesInfo.games} />
          ) : (
            ""
          )} */}
        </Flex>
      </Box>
    </>
  );
}
