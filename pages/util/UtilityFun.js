import { getPlayerByName, getPlayerStats, getPlayerTeam } from "./NBAApi";

export const getSelectedPlayerInfo = async (playerName) => {
  console.log("GETTING SELECTED PLAYERINFO%%%%%%%%%%%%%%%%");
  // Hold Values and not have to repeatedly call state after to reference data
  let stateObject = {};

  let playerFirstName = playerName.split(" ")[0];
  // console.log('Player First Name:', playerFirstName);

  let playerLastName = playerName.split(" ")[1];
  // console.log('Player Last Name: ', playerLastName);

  // TODO Might not need this line
  // stateObject.currentPlayerFullName = playerName;

  const returnedPlayerByName = await getPlayerByName(
    playerFirstName,
    playerLastName
  );

  console.log("I AM RETURNED FROM GETPLAYER", returnedPlayerByName);
  stateObject.currentPlayer = returnedPlayerByName;

  const returnedPlayerTeam = await getPlayerTeam(
    stateObject.currentPlayer.teamId
  );
  stateObject.playerTeam = returnedPlayerTeam;

  const lastTenGamesPlayerPlayed = await getPlayerStats(
    stateObject.currentPlayer.playerId
  );

  // Use object to organize data to find averages later
  let lastTenGamesAverages = {};

  let pointsSum = 0;
  lastTenGamesAverages.pointsArray = [];

  let reboundsSum = 0;
  lastTenGamesAverages.reboundsArray = [];

  let assistsSum = 0;
  lastTenGamesAverages.assistsArray = [];

  let stealsSum = 0;
  lastTenGamesAverages.stealsArray = [];

  let blocksSum = 0;
  lastTenGamesAverages.blocksArray = [];

  let turnOversSum = 0;
  lastTenGamesAverages.turnOversArray = [];

  let fgASum = 0;
  lastTenGamesAverages.fgAArray = [];

  let fgMSum = 0;
  lastTenGamesAverages.fgMArray = [];

  let fTASum = 0;
  lastTenGamesAverages.ftAArray = [];

  let fTMSum = 0;
  lastTenGamesAverages.ftMArray = [];

  lastTenGamesAverages.games = [];

  // let minutesSum = 0;
  lastTenGamesAverages.minutesArray = [];

  lastTenGamesPlayerPlayed.forEach((game) => {
    pointsSum += Number(game.points);
    lastTenGamesAverages.pointsArray.push(Number(game.points));

    reboundsSum += Number(game.defReb) + Number(game.offReb);
    lastTenGamesAverages.reboundsArray.push(
      Number(game.defReb) + Number(game.offReb)
    );

    assistsSum += Number(game.assists);
    lastTenGamesAverages.assistsArray.push(Number(game.assists));

    stealsSum += Number(game.steals);
    lastTenGamesAverages.stealsArray.push(Number(game.steals));

    blocksSum += Number(game.blocks);
    lastTenGamesAverages.blocksArray.push(Number(game.blocks));

    turnOversSum += Number(game.turnovers);
    lastTenGamesAverages.turnOversArray.push(Number(game.turnovers));

    fgASum += Number(game.fga);
    lastTenGamesAverages.fgAArray.push(Number(game.fga));

    fgMSum += Number(game.fgm);
    lastTenGamesAverages.fgMArray.push(Number(game.fgm));

    fTASum += Number(game.fta);
    lastTenGamesAverages.ftAArray.push(Number(game.fta));

    fTMSum += Number(game.ftm);
    lastTenGamesAverages.ftMArray.push(Number(game.ftm));

    // Saves indivual players stats of each game , used in LastTenGames component
    lastTenGamesAverages.games.push(game);
  });

  lastTenGamesAverages.playerPPG = pointsSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesAverages.playerRPG =
    reboundsSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesAverages.playerAPG = assistsSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesAverages.playerSPG = stealsSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesAverages.playerBPG = blocksSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesAverages.playerTOPG =
    turnOversSum / lastTenGamesPlayerPlayed.length;

  lastTenGamesAverages.playerFGAPG = fgASum / lastTenGamesPlayerPlayed.length;
  lastTenGamesAverages.playerFGMPG = fgMSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesAverages.FGPercent = (fgMSum / fgASum).toFixed(2);

  lastTenGamesAverages.playerFTAPG = fTASum / lastTenGamesPlayerPlayed.length;
  lastTenGamesAverages.playerFTAMPG = fTMSum / lastTenGamesPlayerPlayed.length;
  lastTenGamesAverages.FTPercent = (fTMSum / fTASum).toFixed(2);

  stateObject.lastTenGamesAverages = lastTenGamesAverages;

  console.log("&&&&&&&&&&&&&&&&&&&&&&&: ", lastTenGamesAverages);

  return stateObject
};
