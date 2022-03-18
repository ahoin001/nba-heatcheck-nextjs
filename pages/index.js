import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

import { getAllNBAPlayers } from "./util/NBAApi";
import { getSelectedPlayerInfo } from "./util/UtilityFun";

import { PlayerInfo } from "./components/PlayerInfo/PlayerInfo";
import { ComboBox } from "./components/UIComponents/ComboBoxSelect";
import { LineGraph } from "./components/UIComponents/LineGraph";
import { SubmitButton } from "./components/UIComponents/Button";
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
      setlastTenGamesInfo({...lastTenGamesInfo});
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
      <div>
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

        {lastTenGamesInfo ? <LineGraph LastTenGames={lastTenGamesInfo} /> : ""}
      </div>
    </>
  );
}
