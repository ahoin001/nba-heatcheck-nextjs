import axios from "axios";

const baseUrl = process.env.NBA_API_BASE_URL;

export async function getPlayerByName(playerFirstName, playerLastName) {
  return axios({
    method: "GET",
    url: `${baseUrl}/players/firstName/${playerFirstName}`,
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key": "4cec6170bcmsh5d6a0ea78315a5ep10f15cjsn59ef0231e8e4",
    },
  })
    .then((playerList) => {
      // console.log('PLAYERS WITH THIS FIRST NAME');
      // console.log(playerList.data.api.players)

      // * Then Get list of players with first name that also match provided last name
      let listOfMatchedPlayers = playerList.data.api.players.filter(
        (players) => {
          return players.lastName === playerLastName;
        }
      );

      // When then is called on the outer function, this is what will be returned
      return listOfMatchedPlayers[0];
    })
    .catch((error) => {
      console.log(error);
    });
}

// Retrieves list of all players in NBA history and save it in state
export async function getAllNBAPlayers() {
  // console.log("STARTING THE get all nbaPlayers");
  return await axios({
    method: "GET",
    url: `${baseUrl}/players/country/USA`,
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key": "4cec6170bcmsh5d6a0ea78315a5ep10f15cjsn59ef0231e8e4",
    },
  })
    .then((response) => {
      // Should be array of ALl players in NBA history
      let playersAsArray = response.data.api.players;
      // console.log(playersAsArray);

      // Get list of all players names for suggestion box
      let formattedPlayerNameData = playersAsArray.map(function (player) {
        // return List of player full names
        // TODO Would like space between names but need to figure how to make
        // Input component ignore spaces or create a new component
        return `${player.firstName} ${player.lastName}`;
      });

      console.log(formattedPlayerNameData);
      return formattedPlayerNameData;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getPlayerTeam(teamID) {
  // await
  return axios({
    method: "GET",
    url: `${baseUrl}/teams/teamId/${teamID}`,
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key": "4cec6170bcmsh5d6a0ea78315a5ep10f15cjsn59ef0231e8e4",
    },
  })
    .then((response) => {
      // console.log('TEAM (FROM API FILE): ', response.data.api.teams[0].fullName)
      return response.data.api.teams[0].fullName;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getPlayerStats(playerID) {
  return axios({
    method: "GET",
    url: `${baseUrl}/statistics/players/playerId/${playerID}`,
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key": "4cec6170bcmsh5d6a0ea78315a5ep10f15cjsn59ef0231e8e4",
    },
  })
    .then((response) => {
      let listOfPlayerBoxScores = response.data.api.statistics;

      // From List of Games, get the last 10
      let lastTenGames = listOfPlayerBoxScores.slice(
        listOfPlayerBoxScores.length - 10
      );

      // console.log('RESPONSE FROM STATS CALL :',response.data.api.statistics)
      return lastTenGames;

      // console.log(`Last 10 games Played: `, lastTenGames);
    })
    .catch((error) => {
      console.log(error);
    });
}
