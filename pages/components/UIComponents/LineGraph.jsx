import { useState } from "react";
import { ComboBox } from "./ComboBoxSelect";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const LineGraph = ({ LastTenGames }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: "PPG",
    label: "PTS",
  });

  const handleComboBoxChange = (userSelectedOption) => {
    setSelectedOption(userSelectedOption);
    console.log(`Option selected:`, userSelectedOption);
  };

  const options = [
    { value: "PPG", label: "PTS" },
    { value: "RPG", label: "REB" },
    { value: "APG", label: "AST" },
    { value: "SPG", label: "STL" },
    { value: "BPG", label: "BLK" },
    { value: "TOPG", label: "TO" },
    { value: "FGA", label: "FGA" },
    { value: "FGM", label: "FGM" },
  ];

  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          {/* {console.log('payload****************', payload)} */}
          {/* {console.log('label****************', label)} */}
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          {/* <p className="intro">{getIntroOfPage(label)}</p> */}
          {/* <p className="desc">Anything you want can be displayed here.</p> */}
        </div>
      );
    }

    return null;
  }

  const statToolTip = (param) => {
    switch (param) {
      case "PPG":
        return "Points";

      case "RPG":
        return "Rebounds";

      case "APG":
        return "Assists";

      case "SPG":
        return "Steals";

      case "BPG":
        return "Blocks";

      case "TOPG":
        return "Turnovers";

      case "FGA":
        return "FGA";

      case "FGM":
        return "FGM";

      default:
        return "Problem In Selection";
    }
  };

  const statToShow = (param) => {
    switch (param) {
      case "PPG":
        return [
          {
            name: "Game 1",
            Points: LastTenGames.pointsArray[0],
          },
          {
            name: "Game 2",
            Points: LastTenGames.pointsArray[1],
          },
          {
            name: "Game 3",
            Points: LastTenGames.pointsArray[2],
          },
          {
            name: "Game 4",
            Points: LastTenGames.pointsArray[3],
          },
          {
            name: "Game 5",
            Points: LastTenGames.pointsArray[4],
          },
          {
            name: "Game 6",
            Points: LastTenGames.pointsArray[5],
          },
          {
            name: "Game 7",
            Points: LastTenGames.pointsArray[6],
          },
          {
            name: "Game 8",
            Points: LastTenGames.pointsArray[7],
          },
          {
            name: "Game 9",
            Points: LastTenGames.pointsArray[8],
          },
          {
            name: "Game X",
            Points: LastTenGames.pointsArray[9],
          },
        ];

      case "RPG":
        return [
          {
            name: "Game 1",
            Rebounds: LastTenGames.reboundsArray[0],
          },
          {
            name: "Game 2",
            Rebounds: LastTenGames.reboundsArray[1],
          },
          {
            name: "Game 3",
            Rebounds: LastTenGames.reboundsArray[2],
          },
          {
            name: "Game 4",
            Rebounds: LastTenGames.reboundsArray[3],
          },
          {
            name: "Game 5",
            Rebounds: LastTenGames.reboundsArray[4],
          },
          {
            name: "Game 6",
            Rebounds: LastTenGames.reboundsArray[5],
          },
          {
            name: "Game 7",
            Rebounds: LastTenGames.reboundsArray[6],
          },
          {
            name: "Game 8",
            Rebounds: LastTenGames.reboundsArray[7],
          },
          {
            name: "Game 9",
            Rebounds: LastTenGames.reboundsArray[8],
          },
          {
            name: "Game X",
            Rebounds: LastTenGames.reboundsArray[9],
          },
        ];

      case "APG":
        return [
          {
            name: "Game 1",
            Assists: LastTenGames.assistsArray[0],
          },
          {
            name: "Game 2",
            Assists: LastTenGames.assistsArray[1],
          },
          {
            name: "Game 3",
            Assists: LastTenGames.assistsArray[2],
          },
          {
            name: "Game 4",
            Assists: LastTenGames.assistsArray[3],
          },
          {
            name: "Game 5",
            Assists: LastTenGames.assistsArray[4],
          },
          {
            name: "Game 6",
            Assists: LastTenGames.assistsArray[5],
          },
          {
            name: "Game 7",
            Assists: LastTenGames.assistsArray[6],
          },
          {
            name: "Game 8",
            Assists: LastTenGames.assistsArray[7],
          },
          {
            name: "Game 9",
            Assists: LastTenGames.assistsArray[8],
          },
          {
            name: "Game X",
            Assists: LastTenGames.assistsArray[9],
          },
        ];

      case "SPG":
        return [
          {
            name: "Game 1",
            Steals: LastTenGames.stealsArray[0],
          },
          {
            name: "Game 2",
            Steals: LastTenGames.stealsArray[1],
          },
          {
            name: "Game 3",
            Steals: LastTenGames.stealsArray[2],
          },
          {
            name: "Game 4",
            Steals: LastTenGames.stealsArray[3],
          },
          {
            name: "Game 5",
            Steals: LastTenGames.stealsArray[4],
          },
          {
            name: "Game 6",
            Steals: LastTenGames.stealsArray[5],
          },
          {
            name: "Game 7",
            Steals: LastTenGames.stealsArray[6],
          },
          {
            name: "Game 8",
            Steals: LastTenGames.stealsArray[7],
          },
          {
            name: "Game 9",
            Steals: LastTenGames.stealsArray[8],
          },
          {
            name: "Game X",
            Steals: LastTenGames.stealsArray[9],
          },
        ];

      case "BPG":
        return [
          {
            name: "Game 1",
            Blocks: LastTenGames.blocksArray[0],
          },
          {
            name: "Game 2",
            Blocks: LastTenGames.blocksArray[1],
          },
          {
            name: "Game 3",
            Blocks: LastTenGames.blocksArray[2],
          },
          {
            name: "Game 4",
            Blocks: LastTenGames.blocksArray[3],
          },
          {
            name: "Game 5",
            Blocks: LastTenGames.blocksArray[4],
          },
          {
            name: "Game 6",
            Blocks: LastTenGames.blocksArray[5],
          },
          {
            name: "Game 7",
            Blocks: LastTenGames.blocksArray[6],
          },
          {
            name: "Game 8",
            Blocks: LastTenGames.blocksArray[7],
          },
          {
            name: "Game 9",
            Blocks: LastTenGames.blocksArray[8],
          },
          {
            name: "Game X",
            Blocks: LastTenGames.blocksArray[9],
          },
        ];

      case "TOPG":
        return [
          {
            name: "Game 1",
            Turnovers: LastTenGames.turnOversArray[0],
          },
          {
            name: "Game 2",
            Turnovers: LastTenGames.turnOversArray[1],
          },
          {
            name: "Game 3",
            Turnovers: LastTenGames.turnOversArray[2],
          },
          {
            name: "Game 4",
            Turnovers: LastTenGames.turnOversArray[3],
          },
          {
            name: "Game 5",
            Turnovers: LastTenGames.turnOversArray[4],
          },
          {
            name: "Game 6",
            Turnovers: LastTenGames.turnOversArray[5],
          },
          {
            name: "Game 7",
            Turnovers: LastTenGames.turnOversArray[6],
          },
          {
            name: "Game 8",
            Turnovers: LastTenGames.turnOversArray[7],
          },
          {
            name: "Game 9",
            Turnovers: LastTenGames.turnOversArray[8],
          },
          {
            name: "Game X",
            Turnovers: LastTenGames.turnOversArray[9],
          },
        ];

      case "FGA":
        return [
          {
            name: "Game 1",
            FGA: LastTenGames.fgAArray[0],
          },
          {
            name: "Game 2",
            FGA: LastTenGames.fgAArray[1],
          },
          {
            name: "Game 3",
            FGA: LastTenGames.fgAArray[2],
          },
          {
            name: "Game 4",
            FGA: LastTenGames.fgAArray[3],
          },
          {
            name: "Game 5",
            FGA: LastTenGames.fgAArray[4],
          },
          {
            name: "Game 6",
            FGA: LastTenGames.fgAArray[5],
          },
          {
            name: "Game 7",
            FGA: LastTenGames.fgAArray[6],
          },
          {
            name: "Game 8",
            FGA: LastTenGames.fgAArray[7],
          },
          {
            name: "Game 9",
            FGA: LastTenGames.fgAArray[8],
          },
          {
            name: "Game X",
            FGA: LastTenGames.fgAArray[9],
          },
        ];

      case "FGM":
        return [
          {
            name: "Game 1",
            FGM: LastTenGames.fgMArray[0],
          },
          {
            name: "Game 2",
            FGM: LastTenGames.fgMArray[1],
          },
          {
            name: "Game 3",
            FGM: LastTenGames.fgMArray[2],
          },
          {
            name: "Game 4",
            FGM: LastTenGames.fgMArray[3],
          },
          {
            name: "Game 5",
            FGM: LastTenGames.fgMArray[4],
          },
          {
            name: "Game 6",
            FGM: LastTenGames.fgMArray[5],
          },
          {
            name: "Game 7",
            FGM: LastTenGames.fgMArray[6],
          },
          {
            name: "Game 8",
            FGM: LastTenGames.fgMArray[7],
          },
          {
            name: "Game 9",
            FGM: LastTenGames.fgMArray[8],
          },
          {
            name: "Game X",
            FGM: LastTenGames.fgMArray[9],
          },
        ];

      default:
        return "foo";
    }
  };
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  console.log(selectedOption);
  console.log(selectedOption.value);
  return (
    <>
      <div>
        {/* <h1 style={{ color: '#eceff1' }}> LAST TEN GAMES </h1> */}
        <h1> LAST TEN GAMES VISUAL</h1>

        <div>
          <ComboBox
            listOfOptions={options}
            value={selectedOption}
            isSearchable={false}
            closeMenuOnSelect={true}
            handleChange={handleComboBoxChange}
            placeholderText="Select a stat"
          />
        </div>

        <ResponsiveContainer width="99%" height={400}>
          {/* {console.log("++++++++++++++++ VALUE BEING USED IS", selectedOption.value)} */}
          {JSON.stringify(LastTenGames) !== "{}" ? (
            <LineChart
              //   className="line-chart"
              // width={1200}
              // height={400}
              //   data={statToShow(selectedOption.value)}
              data={statToShow(selectedOption.value)}
              margin={{
                top: 30,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey={statToolTip(selectedOption.value)}
                // dataKey={selectedOption.value}
                stroke="#8884d8"
              />
              {/* <Line type="monotone" dataKey="stat" stroke="#8884d8" /> */}
              {/* <Line type="monotone" dataKey="Rebounds" stroke="#82ca9d" />
    <Line type="monotone" dataKey="Assists" stroke="red" /> */}
            </LineChart>
          ) : (
            " "
          )}
        </ResponsiveContainer>

        <div className="divider"> </div>
      </div>
    </>
  );
};
