import { useState } from "react";
import { useQuery } from "react-query";
import { Box, Center, Spinner, VStack } from "@chakra-ui/react";
import { Timeline } from "../Timeline/Timeline";

import { SubmitButton } from "../UIComponents/Button";
import { ComboBox } from "../UIComponents/ComboBoxSelect";

import { BoxScore } from "../statbox/BoxScore";
import { PlayerInfo } from "../PlayerInfo/PlayerInfo";
import { LineGraph } from "../LineChart/LineGraph";

import { getAllNBAPlayers } from "../../util/NBAApi";
import { getSelectedPlayerInfo } from "../../util/UtilityFun";
import { getTweetsWithKeyWord } from "../../util/TwitterApiRequests";
import { LastTenGames } from "../LastTenGames/LastTenGames";

export const PlayerSearch = ({ nbaPlayer, setNbaPlayer }) => {
  const [allRetrievedTweets, setallRetrievedTweets] = useState("");

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

  const { refetch: fetchTweets, isFetching: isFetchingTweets } = useQuery(
    ["tweetsWithKeyWord"],
    () => getTweetsWithKeyWord(nbaPlayer.selectedOption.value),
    {
      enabled: false,
      onSuccess: (res) => {
        console.log(
          "$$$$$$$$$$$$$$$$$$$$$$$$$$$AFTER SUCCESS GETTING TWEETS, response",
          res.data
        );
        // const [playerInfo, lastTenGamesInfo] = res;

        setallRetrievedTweets(res.data);
      },
    }
  );
  //   Query to call for player information on submition
  // Should not fire on mount due to enabled : false
  const { refetch, isFetching } = useQuery(
    ["playerInfo"],
    () => getSelectedPlayerInfo(nbaPlayer.selectedOption.value),
    {
      enabled: false,
      onSuccess: (res) => {
        console.log("AFTER SUCCESS, response", res);
        const [playerInfo, lastTenGamesInfo] = res;

        setNbaPlayer({
          ...nbaPlayer,
          playerInfo: { ...playerInfo },
          lastTenGamesInfo: { ...lastTenGamesInfo },
        });
        fetchTweets();
      },
    }
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

  return (
    <Box>
      <VStack p={4} width="100%">
        {" "}
        <ComboBox
          value={{
            value: "",
            label: "",
          }}
          listOfOptions={playerNames}
          handleChange={handleComboBoxChange}
          nbaPlayer={nbaPlayer}
          placeholderText="Select a player..."
        />
        <SubmitButton onSubmit={refetch} isLoading={isFetching} />
      </VStack>

      {isFetching ? (
        <Center p={20}>
          <Spinner color="red.500" size={"xl"} />
        </Center>
      ) : (
        <>
          <PlayerInfo playerInfo={nbaPlayer.playerInfo} />
          <BoxScore playerAvgs={nbaPlayer.lastTenGamesInfo} />
          <LineGraph LastTenGames={nbaPlayer.lastTenGamesInfo} />
          <LastTenGames LastTenGames={nbaPlayer.lastTenGamesInfo} />{" "}
          {isFetchingTweets ? (
            "LOADING"
          ) : (
            <Timeline fetchedTweets={allRetrievedTweets} />
          )}
        </>
      )}
    </Box>
  );
};
