import { useState, useEffect } from "react";

import { getAllNBAPlayers } from "./util/NBAApi";

import { PlayerInfo } from "./components/PlayerInfo/PlayerInfo";
import { ComboBox } from "./components/UIComponents/ComboBoxSelect";
import { SubmitButton } from "./components/UIComponents/Button";
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
    displayPlayerInfo: false,
  });

  useEffect(() => {
    const getData = async () => {
      const playerNames = await getAllNBAPlayers();

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
    };

    getData();
  }, []);
  return (
    <>
      <div>
        <ComboBox
          listOfOptions={nbaPlayer.allPlayers}
          nbaPlayer={nbaPlayer}
          setNbaPlayer={setNbaPlayer}
        />

        <SubmitButton displayPlayerInfo={nbaPlayer.displayPlayerInfo} />
        
      </div>
    </>
  );
}
