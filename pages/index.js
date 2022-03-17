import { useState, useEffect } from "react";
import axios from "axios";

import { Button, ButtonGroup } from '@chakra-ui/react'
import { ComboBox } from "./components/ComboBox";

export default function Home() {
  const [nbaPlayer, setNbaPlayer] = useState({
    allPlayers: [],
    searchedPlayersName: "", // Name of player input by user
    currentPlayer: {}, // Currrent Player Saved To get from data
    currentPlayerFullName: "",
    playerTeamID: "",
    playerTeam: "",
    playerHeadshot: "",
    selectedOption: { value: "-", label: "Type Player Name Here" },
    lastTenGamesAverages: {},
  });

  useEffect(() => {
    // create async request to get data
    const getData = async () => {
      await axios({
        method: "GET",
        url: "https://api-nba-v1.p.rapidapi.com/players/country/USA",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "4cec6170bcmsh5d6a0ea78315a5ep10f15cjsn59ef0231e8e4",
        },
      }).then((response) => {
        // Should be array of ALl players in NBA history
        let playersAsArray = response.data.api.players;
        console.log(playersAsArray);

        // Return array of player names from all player objects
        let playerNames = playersAsArray.map((player) => {
          return `${player.firstName} ${player.lastName}`;
        });

        console.log(playerNames);
        const formattedListOfPlayersForSelect = playerNames.map((player) => {
          return {
            value: player,
            label: player,
          };
        });

        console.log(formattedListOfPlayersForSelect);
        setNbaPlayer({
          ...nbaPlayer,
          allPlayers: formattedListOfPlayersForSelect,
        });
      });
    };
    getData();
  }, []);

  return (
    <>
      <ComboBox
        listOfOptions={nbaPlayer.allPlayers}
        nbaPlayer={nbaPlayer}
        setNbaPlayer={setNbaPlayer}
      />

      <Button >Submit!</Button>
    </>
  );
}
