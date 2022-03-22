import { useQuery } from "react-query";
import { Box, Center, Flex, Spinner, VStack } from "@chakra-ui/react";

// import { LineGraph } from "../LineChart/LineGraph";
import { BoxScore } from "../statbox/BoxScore";
import { ComboBox } from "../UIComponents/ComboBoxSelect";
import { SubmitButton } from "../UIComponents/Button";

import { getAllNBAPlayers } from "../../util/NBAApi";
import { getSelectedPlayerInfo } from "../../util/UtilityFun";
import { PlayerInfo } from "../PlayerInfo/PlayerInfo";
import {LineGraph} from '../LineChart/LineGraph'

export const PlayerSearch = ({ nbaPlayer, setNbaPlayer }) => {
  // Query to get all plaeyers for select box
  const {
    data: playerNames,
    error,
    isError,
    isLoading,
  } = useQuery("players", getAllNBAPlayers, {
    select: (rawPlayersData) =>
      rawPlayersData.map((player) => {
        return {
          value: player,
          label: player,
        };
      }),
  });

  //   Query to call for player information on submition
  const { refetch, isFetching } = useQuery(
    ["playerInfo"],
    () => getSelectedPlayerInfo(nbaPlayer.selectedOption.value),
    {
      onSuccess: (res) => {
        console.log("AFTER SUCCESS, response", res);
        const [playerInfo, lastTenGamesInfo] = res;

        setNbaPlayer({
          ...nbaPlayer,
          playerInfo: { ...playerInfo },
          lastTenGamesInfo: { ...lastTenGamesInfo },
        });
      },
    },
    { enabled: false }
  );

  //   Set the selected nba player choice i proper format to app state to be used in other components
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

  if (isLoading) {
    return (
      <Center p={30}>
        <Spinner size={"xl"} />
      </Center>
    );
  }

  if (isError) {
    return <div>{error}</div>;
  }

  console.log("THE STATE", nbaPlayer);
  console.log("THE STATE", nbaPlayer.playerInfo);
  console.log("THE STATE", nbaPlayer.lastTenGamesInfo);

  return (
    <Box>
      <VStack>
        {" "}
        <ComboBox
          listOfOptions={playerNames}
          handleChange={handleComboBoxChange}
          nbaPlayer={nbaPlayer}
          placeholderText="Select a player..."
        />
        <SubmitButton onSubmit={refetch} />
      </VStack>

      {isFetching ? (
        <Spinner color="red.500" />
      ) : (
        <>
          <PlayerInfo playerInfo={nbaPlayer.playerInfo} />
          <BoxScore playerAvgs={nbaPlayer.lastTenGamesInfo} />
          {/* <LineGraph LastTenGames={nbaPlayer.playerInfo} /> */}
        </>
      )}
    </Box>
  );
};
