import { getPlayerByName, getPlayerStats, getPlayerTeam } from "./NBAApi";

export const getSelectedPlayerInfo = async (playerName) => {
  console.log("GETTING SELECTED PLAYERINFO%%%%%%%%%%%%%%%%");
  // Hold Values and not have to repeatedly call state after to reference data
  let playerInfo = {};

  console.log("FROM UTILITY: RECIEVED PLAYERNAME OBJECT THING: ", playerName);

  let playerFirstName = playerName.split(" ")[0];
  // console.log('Player First Name:', playerFirstName);

  let playerLastName = playerName.split(" ")[1];
  // console.log('Player Last Name: ', playerLastName);

  // TODO Might not need this line
  // playerInfo.currentPlayerFullName = playerName;

  const returnedPlayerByName = await getPlayerByName(
    playerFirstName,
    playerLastName
  );

  console.log("I AM RETURNED FROM GETPLAYER BY NAME ", returnedPlayerByName);

  playerInfo.currentPlayer = returnedPlayerByName;

  const returnedPlayerTeam = await getPlayerTeam(
    playerInfo.currentPlayer.teamId
  );
  playerInfo.playerTeam = returnedPlayerTeam;

  const lastTenGamesPlayerPlayed = await getPlayerStats(
    playerInfo.currentPlayer.playerId
  );



  // Use object to organize data to find averages later
  let lastTenGamesInfo = {};

  let pointsSum = 0;
  lastTenGamesInfo.pointsArray = [];

  let reboundsSum = 0;
  lastTenGamesInfo.reboundsArray = [];

  let assistsSum = 0;
  lastTenGamesInfo.assistsArray = [];

  let stealsSum = 0;
  lastTenGamesInfo.stealsArray = [];

  let blocksSum = 0;
  lastTenGamesInfo.blocksArray = [];

  let turnOversSum = 0;
  lastTenGamesInfo.turnOversArray = [];

  let fgASum = 0;
  lastTenGamesInfo.fgAArray = [];

  let fgMSum = 0;
  lastTenGamesInfo.fgMArray = [];

  let fTASum = 0;
  lastTenGamesInfo.ftAArray = [];

  let fTMSum = 0;
  lastTenGamesInfo.ftMArray = [];

  lastTenGamesInfo.games = [];

  // let minutesSum = 0;
  lastTenGamesInfo.minutesArray = [];

  lastTenGamesPlayerPlayed.forEach((game) => {
    pointsSum += Number(game.points);
    lastTenGamesInfo.pointsArray.push(Number(game.points));

    reboundsSum += Number(game.defReb) + Number(game.offReb);
    lastTenGamesInfo.reboundsArray.push(
      Number(game.defReb) + Number(game.offReb)
    );

    assistsSum += Number(game.assists);
    lastTenGamesInfo.assistsArray.push(Number(game.assists));

    stealsSum += Number(game.steals);
    lastTenGamesInfo.stealsArray.push(Number(game.steals));

    blocksSum += Number(game.blocks);
    lastTenGamesInfo.blocksArray.push(Number(game.blocks));

    turnOversSum += Number(game.turnovers);
    lastTenGamesInfo.turnOversArray.push(Number(game.turnovers));

    fgASum += Number(game.fga);
    lastTenGamesInfo.fgAArray.push(Number(game.fga));

    fgMSum += Number(game.fgm);
    lastTenGamesInfo.fgMArray.push(Number(game.fgm));

    fTASum += Number(game.fta);
    lastTenGamesInfo.ftAArray.push(Number(game.fta));

    fTMSum += Number(game.ftm);
    lastTenGamesInfo.ftMArray.push(Number(game.ftm));

    // Saves indivual players stats of each game , used in LastTenGames component
    lastTenGamesInfo.games.push(game);
  });

  lastTenGamesInfo.playerPPG = pointsSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesInfo.playerRPG = reboundsSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesInfo.playerAPG = assistsSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesInfo.playerSPG = stealsSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesInfo.playerBPG = blocksSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesInfo.playerTOPG = turnOversSum / lastTenGamesPlayerPlayed.length;

  lastTenGamesInfo.playerFGAPG = fgASum / lastTenGamesPlayerPlayed.length;
  lastTenGamesInfo.playerFGMPG = fgMSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesInfo.FGPercent = (fgMSum / fgASum).toFixed(2);

  lastTenGamesInfo.playerFTAPG = fTASum / lastTenGamesPlayerPlayed.length;
  lastTenGamesInfo.playerFTAMPG = fTMSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesInfo.FTPercent = (fTMSum / fTASum).toFixed(2);

  // playerInfo.lastTenGamesInfo = lastTenGamesInfo;

  console.log("&&&&&&&&&&&&&&&&&&&&&&&: ", lastTenGamesInfo);
  console.log("&&&&&&&&&&&&&&&&&&&&&&&: ", playerInfo);

  return [playerInfo,lastTenGamesInfo]
  // return lastTenGamesInfo;
};
