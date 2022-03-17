import React, { useState } from "react";
import { Skeleton } from "@chakra-ui/react";

export const LastTenGames = ({ games }) => {
  // const header = {
  //     fontFamily: "Rajdhani",
  //     fontWeight: 400,
  //     lineHeight: 1.5,
  //     textAlign: "center",
  //     color: '#eceff1'
  // };

  //? If the props aren't loaded yet, display loading component
  if (!games) {
    return (
      <Skeleton>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>MIN</th>
                <th>FGM</th>
                <th>FGA</th>
                <th>FG%</th>
                <th>FTM</th>
                <th>FTA</th>
                <th>FT%</th>
                <th>OREB</th>
                <th>DREB</th>
                <th>REB</th>
                <th>AST</th>
                <th>STL</th>
                <th>BLK</th>
                <th>TO</th>
                <th>PF</th>
                <th>PTS</th>
              </tr>
            </thead>

            <tbody>{statRows}</tbody>
          </table>
        </div>
      </Skeleton>
    );
  } else {
    const statRows = games.map((game) => {
      return (
        <tr key={game.gameId}>
          <td>{game.min}</td>
          <td>{game.fgm}</td>
          <td>{game.fga}</td>
          <td>{game.fgp}</td>
          <td>{game.ftm}</td>
          <td>{game.fta}</td>
          <td>{game.ftp}</td>
          <td>{game.offReb}</td>
          <td>{game.defReb}</td>
          <td>{game.totReb}</td>
          <td>{game.assists}</td>
          <td>{game.steals}</td>
          <td>{game.blocks}</td>
          <td>{game.turnovers}</td>
          <td>{game.pFouls}</td>
          <td>{game.points}</td>
        </tr>
      );
    });

    return (
      <>
        <h1> Last Ten Games </h1>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>MIN</th>
                <th>FGM</th>
                <th>FGA</th>
                <th>FG%</th>
                <th>FTM</th>
                <th>FTA</th>
                <th>FT%</th>
                <th>OREB</th>
                <th>DREB</th>
                <th>REB</th>
                <th>AST</th>
                <th>STL</th>
                <th>BLK</th>
                <th>TO</th>
                <th>PF</th>
                <th>PTS</th>
              </tr>
            </thead>

            <tbody>{statRows}</tbody>
          </table>
        </div>
      </>
    );
  }

