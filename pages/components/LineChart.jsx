// TODO
// 1. wHY ONLY ANIMATION BETWEEN RPG AND APG if both have same name?

import React, { PureComponent } from "react";
// import ReactSelect from 'react-select';

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

export default class Linechart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // selectedOption: this.props.StatToChart,
      lastTenGames: this.props.LastTenGames,
      selectedOption: { value: "PPG", label: "PTS" },
    };
  }

  statToShow(param) {
    switch (param) {
      case "PPG":
        return [
          {
            name: "Game 1",
            Points: this.props.LastTenGames.pointsArray[0],
          },
          {
            name: "Game 2",
            Points: this.props.LastTenGames.pointsArray[1],
          },
          {
            name: "Game 3",
            Points: this.props.LastTenGames.pointsArray[2],
          },
          {
            name: "Game 4",
            Points: this.props.LastTenGames.pointsArray[3],
          },
          {
            name: "Game 5",
            Points: this.props.LastTenGames.pointsArray[4],
          },
          {
            name: "Game 6",
            Points: this.props.LastTenGames.pointsArray[5],
          },
          {
            name: "Game 7",
            Points: this.props.LastTenGames.pointsArray[6],
          },
          {
            name: "Game 8",
            Points: this.props.LastTenGames.pointsArray[7],
          },
          {
            name: "Game 9",
            Points: this.props.LastTenGames.pointsArray[8],
          },
          {
            name: "Game X",
            Points: this.props.LastTenGames.pointsArray[9],
          },
        ];

      case "RPG":
        return [
          {
            name: "Game 1",
            Rebounds: this.props.LastTenGames.reboundsArray[0],
          },
          {
            name: "Game 2",
            Rebounds: this.props.LastTenGames.reboundsArray[1],
          },
          {
            name: "Game 3",
            Rebounds: this.props.LastTenGames.reboundsArray[2],
          },
          {
            name: "Game 4",
            Rebounds: this.props.LastTenGames.reboundsArray[3],
          },
          {
            name: "Game 5",
            Rebounds: this.props.LastTenGames.reboundsArray[4],
          },
          {
            name: "Game 6",
            Rebounds: this.props.LastTenGames.reboundsArray[5],
          },
          {
            name: "Game 7",
            Rebounds: this.props.LastTenGames.reboundsArray[6],
          },
          {
            name: "Game 8",
            Rebounds: this.props.LastTenGames.reboundsArray[7],
          },
          {
            name: "Game 9",
            Rebounds: this.props.LastTenGames.reboundsArray[8],
          },
          {
            name: "Game X",
            Rebounds: this.props.LastTenGames.reboundsArray[9],
          },
        ];

      case "APG":
        return [
          {
            name: "Game 1",
            Assists: this.props.LastTenGames.assistsArray[0],
          },
          {
            name: "Game 2",
            Assists: this.props.LastTenGames.assistsArray[1],
          },
          {
            name: "Game 3",
            Assists: this.props.LastTenGames.assistsArray[2],
          },
          {
            name: "Game 4",
            Assists: this.props.LastTenGames.assistsArray[3],
          },
          {
            name: "Game 5",
            Assists: this.props.LastTenGames.assistsArray[4],
          },
          {
            name: "Game 6",
            Assists: this.props.LastTenGames.assistsArray[5],
          },
          {
            name: "Game 7",
            Assists: this.props.LastTenGames.assistsArray[6],
          },
          {
            name: "Game 8",
            Assists: this.props.LastTenGames.assistsArray[7],
          },
          {
            name: "Game 9",
            Assists: this.props.LastTenGames.assistsArray[8],
          },
          {
            name: "Game X",
            Assists: this.props.LastTenGames.assistsArray[9],
          },
        ];

      case "SPG":
        return [
          {
            name: "Game 1",
            Steals: this.props.LastTenGames.stealsArray[0],
          },
          {
            name: "Game 2",
            Steals: this.props.LastTenGames.stealsArray[1],
          },
          {
            name: "Game 3",
            Steals: this.props.LastTenGames.stealsArray[2],
          },
          {
            name: "Game 4",
            Steals: this.props.LastTenGames.stealsArray[3],
          },
          {
            name: "Game 5",
            Steals: this.props.LastTenGames.stealsArray[4],
          },
          {
            name: "Game 6",
            Steals: this.props.LastTenGames.stealsArray[5],
          },
          {
            name: "Game 7",
            Steals: this.props.LastTenGames.stealsArray[6],
          },
          {
            name: "Game 8",
            Steals: this.props.LastTenGames.stealsArray[7],
          },
          {
            name: "Game 9",
            Steals: this.props.LastTenGames.stealsArray[8],
          },
          {
            name: "Game X",
            Steals: this.props.LastTenGames.stealsArray[9],
          },
        ];

      case "BPG":
        return [
          {
            name: "Game 1",
            Blocks: this.props.LastTenGames.blocksArray[0],
          },
          {
            name: "Game 2",
            Blocks: this.props.LastTenGames.blocksArray[1],
          },
          {
            name: "Game 3",
            Blocks: this.props.LastTenGames.blocksArray[2],
          },
          {
            name: "Game 4",
            Blocks: this.props.LastTenGames.blocksArray[3],
          },
          {
            name: "Game 5",
            Blocks: this.props.LastTenGames.blocksArray[4],
          },
          {
            name: "Game 6",
            Blocks: this.props.LastTenGames.blocksArray[5],
          },
          {
            name: "Game 7",
            Blocks: this.props.LastTenGames.blocksArray[6],
          },
          {
            name: "Game 8",
            Blocks: this.props.LastTenGames.blocksArray[7],
          },
          {
            name: "Game 9",
            Blocks: this.props.LastTenGames.blocksArray[8],
          },
          {
            name: "Game X",
            Blocks: this.props.LastTenGames.blocksArray[9],
          },
        ];

      case "TOPG":
        return [
          {
            name: "Game 1",
            Turnovers: this.props.LastTenGames.turnOversArray[0],
          },
          {
            name: "Game 2",
            Turnovers: this.props.LastTenGames.turnOversArray[1],
          },
          {
            name: "Game 3",
            Turnovers: this.props.LastTenGames.turnOversArray[2],
          },
          {
            name: "Game 4",
            Turnovers: this.props.LastTenGames.turnOversArray[3],
          },
          {
            name: "Game 5",
            Turnovers: this.props.LastTenGames.turnOversArray[4],
          },
          {
            name: "Game 6",
            Turnovers: this.props.LastTenGames.turnOversArray[5],
          },
          {
            name: "Game 7",
            Turnovers: this.props.LastTenGames.turnOversArray[6],
          },
          {
            name: "Game 8",
            Turnovers: this.props.LastTenGames.turnOversArray[7],
          },
          {
            name: "Game 9",
            Turnovers: this.props.LastTenGames.turnOversArray[8],
          },
          {
            name: "Game X",
            Turnovers: this.props.LastTenGames.turnOversArray[9],
          },
        ];

      case "FGA":
        return [
          {
            name: "Game 1",
            FGA: this.props.LastTenGames.fgAArray[0],
          },
          {
            name: "Game 2",
            FGA: this.props.LastTenGames.fgAArray[1],
          },
          {
            name: "Game 3",
            FGA: this.props.LastTenGames.fgAArray[2],
          },
          {
            name: "Game 4",
            FGA: this.props.LastTenGames.fgAArray[3],
          },
          {
            name: "Game 5",
            FGA: this.props.LastTenGames.fgAArray[4],
          },
          {
            name: "Game 6",
            FGA: this.props.LastTenGames.fgAArray[5],
          },
          {
            name: "Game 7",
            FGA: this.props.LastTenGames.fgAArray[6],
          },
          {
            name: "Game 8",
            FGA: this.props.LastTenGames.fgAArray[7],
          },
          {
            name: "Game 9",
            FGA: this.props.LastTenGames.fgAArray[8],
          },
          {
            name: "Game X",
            FGA: this.props.LastTenGames.fgAArray[9],
          },
        ];

      case "FGM":
        return [
          {
            name: "Game 1",
            FGM: this.props.LastTenGames.fgMArray[0],
          },
          {
            name: "Game 2",
            FGM: this.props.LastTenGames.fgMArray[1],
          },
          {
            name: "Game 3",
            FGM: this.props.LastTenGames.fgMArray[2],
          },
          {
            name: "Game 4",
            FGM: this.props.LastTenGames.fgMArray[3],
          },
          {
            name: "Game 5",
            FGM: this.props.LastTenGames.fgMArray[4],
          },
          {
            name: "Game 6",
            FGM: this.props.LastTenGames.fgMArray[5],
          },
          {
            name: "Game 7",
            FGM: this.props.LastTenGames.fgMArray[6],
          },
          {
            name: "Game 8",
            FGM: this.props.LastTenGames.fgMArray[7],
          },
          {
            name: "Game 9",
            FGM: this.props.LastTenGames.fgMArray[8],
          },
          {
            name: "Game X",
            FGM: this.props.LastTenGames.fgMArray[9],
          },
        ];

      default:
        return "foo";
    }
  }

  statToolTip(param) {
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
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    // Styles for react-select
    const customStyles = {
      control: (styles) => ({ ...styles, backgroundColor: "rgb(44,44,44)" }),

      menuList: () => ({
        // none of react-select's styles are passed to <Control />
        color: "white",
        backgroundColor: "rgb(66,66,66)",
      }),
    };

    // Options for react-select
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

    const { selectedOption } = this.state;

    /*
            Line Chart Customization
        */

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

    // Styles for component

    const lastTenGamesContainer = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "70rem",
      margin: "0 auto",
      flex: "1 1 auto" /* Positive flex-shrink */,
      // overflow: 'hidden',
      // border: '3px solid Purple'
    };

    const header = {
      fontFamily: "Rajdhani",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "#eceff1",
    };

    // TODO If the props aren't loaded yet, don't display anything
    if (!this.props.LastTenGames.pointsArray) {
      return <div></div>;
    } else {
      // console.log('AVAILABLE PROPS IN LINE CHART', this.props);

      return (
        <div style={lastTenGamesContainer}>
          {/* <h1 style={{ color: '#eceff1' }}> LAST TEN GAMES </h1> */}
          <h1 style={header}> LAST TEN GAMES VISUAL</h1>

          <div style={{ width: "100px" }}>
            {/* TODO */}
            {/* <ReactSelect

                            styles={customStyles}
                            isSearchable={false}
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                        /> */}
          </div>

          <ResponsiveContainer width="99%" height={400}>
            <LineChart
              className="line-chart"
              // width={1200}
              // height={400}
              data={this.statToShow(this.state.selectedOption.value)}
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
                dataKey={this.statToolTip(this.state.selectedOption.value)}
                stroke="#8884d8"
              />
              {/* <Line type="monotone" dataKey="stat" stroke="#8884d8" /> */}
              {/* <Line type="monotone" dataKey="Rebounds" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Assists" stroke="red" /> */}
            </LineChart>
          </ResponsiveContainer>

          <div className="divider"> </div>
        </div>
      );
    }
  }
}
