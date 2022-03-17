import { useState, useEffect } from "react";

import { getAllNBAPlayers } from "./util/NBAApi";
import { getSelectedPlayerInfo } from "./util/UtilityFun";

import { PlayerInfo } from "./components/PlayerInfo/PlayerInfo";
import { ComboBox } from "./components/UIComponents/ComboBoxSelect";
import { SubmitButton } from "./components/UIComponents/Button";
export default function Home() {
  const [retrievedAllPlayers, setRetrievedAllPlayers] = useState(false);
  const [resubmitDisplay, setResubmitDisplay] = useState(false);
  const [playerInfo, setplayerInfo] = useState({});

  const [nbaPlayer, setNbaPlayer] = useState({
    allPlayers: [],
    searchedPlayersName: "", // Name of player input by user
    // currentPlayer: {}, // Currrent Player Saved To get from data
    currentPlayerFullName: "",
    // playerTeamID: "",
    // playerTeam: "",
    // playerHeadshot: "",
    selectedOption: { value: "-", label: "Type Player Name Here" },
    // lastTenGamesAverages: {},
    myObject: {},
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
      setRetrievedAllPlayers(true);
    };

    !retrievedAllPlayers ? getData() : "";

    const showPlayerData = async () => {
      const playerInfoResponseObject = await getSelectedPlayerInfo(
        nbaPlayer.selectedOption.value
      );
      console.log(
        "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ PlaeyerInfo",
        playerInfoResponseObject
      );

      setplayerInfo({ ...playerInfoResponseObject });
    };

    nbaPlayer.selectedOption.value !== "-" ? showPlayerData() : "";
  }, [resubmitDisplay]);

  return (
    <>
      <div>
        <ComboBox
          listOfOptions={nbaPlayer.allPlayers}
          nbaPlayer={nbaPlayer}
          setNbaPlayer={setNbaPlayer}
        />

        <SubmitButton
          resubmitDisplay={resubmitDisplay}
          setResubmit={setResubmitDisplay}
        />

        {/* If playerinfo object is empty dont render */}
        {JSON.stringify(playerInfo) !== "{}" ? (
          <PlayerInfo playerInfo={playerInfo} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
