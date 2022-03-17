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
      const playerInfoResponseObject = await getSelectedPlayerInfo(
        nbaPlayer.selectedOption.value
      );
      console.log(
        "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ PlaeyerInfo",
        playerInfoResponseObject
      );

      setplayerInfo({ ...playerInfoResponseObject });
      setisLoading(false);
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

        {JSON.stringify(playerInfo) === "{}" ? (
          ""
        ) : (
          <PlayerInfo playerInfo={playerInfo} />
        )}

        {/* <LineChart /> */}
      </div>
    </>
  );
}
