import { useState, useEffect } from "react";
import { Box, Spacer, Flex, SimpleGrid } from "@chakra-ui/react";

import { getAllNBAPlayers } from "./util/NBAApi";
import { getSelectedPlayerInfo } from "./util/UtilityFun";

import { ComboBox } from "./components/UIComponents/ComboBoxSelect";
import { LineGraph } from "./components/LineChart/LineGraph";
import { SubmitButton } from "./components/UIComponents/Button";

import { LastTenGames } from "./components/LastTenGames/LastTenGames";
import { PlayerInfo } from "./components/PlayerInfo/PlayerInfo";
import { BoxScore } from "./components/statbox/BoxScore";

export default function Home() {
  const [retrievedAllPlayers, setRetrievedAllPlayers] = useState(false);
  const [resubmitDisplay, setResubmitDisplay] = useState(false);
  const [playerInfo, setplayerInfo] = useState({});
  const [lastTenGamesInfo, setlastTenGamesInfo] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [nbaPlayer, setNbaPlayer] = useState({
    allPlayers: [],
    searchedPlayersName: "", // Name of player input by user
    currentPlayerFullName: "",
    selectedOption: { value: "-", label: "Type Player Name Here" },

    myObject: {},
  });

  useEffect(() => {
    const getData = async () => {
      const playerNames = await getAllNBAPlayers();
      setisLoading(true);
      //** Format player names to be used in combobox component
      const formattedListOfPlayersForSelect = playerNames.map((player) => {
        return {
          value: player,
          label: player,
        };
      });

      //** */ Set State so player names are listed in combobox
      setNbaPlayer({
        ...nbaPlayer,
        allPlayers: formattedListOfPlayersForSelect,
      });
      setRetrievedAllPlayers(true);
      setisLoading(false);
    };

    !retrievedAllPlayers ? getData() : "";

    const showPlayerData = async () => {
      setisLoading(true);
      const [playerInfo, lastTenGamesInfo] = await getSelectedPlayerInfo(
        nbaPlayer.selectedOption.value
      );
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ PlaeyerInfo", playerInfo);
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Last TEN ", lastTenGamesInfo);

      setplayerInfo({ ...playerInfo });
      setlastTenGamesInfo(lastTenGamesInfo);
      // setisLoading(false);
    };

    nbaPlayer.selectedOption.value !== "-" ? showPlayerData() : "";
  }, [resubmitDisplay]);

  const handleComboBoxChange = (selectedOption) => {
    const userOptionSelect = {
      value: selectedOption.value,
      label: selectedOption.label,
    };

    setNbaPlayer({
      ...nbaPlayer,
      selectedOption: userOptionSelect,
    });
  };

  return (
    <>
      <Box height={"100vh"} >
        <Flex
          direction={"column"}
          // TODO Look up why this resolves probelm with contenet smushing when resizing to smaller screen
          wrap={"wrap"}
          // spacingY="180px"
          justify={"center"}
          align={"center"}
        >
          {/* Might Combine Submit button and select box into one component */}
          <ComboBox
            listOfOptions={nbaPlayer.allPlayers}
            handleChange={handleComboBoxChange}
            nbaPlayer={nbaPlayer}
            setNbaPlayer={setNbaPlayer}
            placeholderText="Select a player..."
          />

          <SubmitButton
            resubmitDisplay={resubmitDisplay}
            setResubmit={setResubmitDisplay}
          />

          
          {JSON.stringify(playerInfo) === "{}" ? (
            ""
          ) : (
            <PlayerInfo playerInfo={playerInfo} />
          )}

          {lastTenGamesInfo ? <BoxScore playerAvgs={lastTenGamesInfo} /> : ""}

          {lastTenGamesInfo ? (
            <LineGraph LastTenGames={lastTenGamesInfo} />
          ) : (
            ""
          )}

          {lastTenGamesInfo ? (
            <LastTenGames LastTenGames={lastTenGamesInfo.games} />
          ) : (
            ""
          )}
        </Flex>
      </Box>
    </>
  );
}
