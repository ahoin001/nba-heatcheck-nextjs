import {
  Skeleton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";

export const LastTenGames = ({ LastTenGames }) => {
  // const header = {
  //     fontFamily: "Rajdhani",
  //     fontWeight: 400,
  //     lineHeight: 1.5,
  //     textAlign: "center",
  //     color: '#eceff1'
  // };

  const [isLessThan1280] = useMediaQuery("(max-width: 800px)");

  //? If the props aren't loaded yet, display loading component
  if (!LastTenGames) {
    return (
      <Skeleton>
        <div>
          <Table size={"md"} variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>MIN</Th>
                <Th>FGM</Th>
                <Th>FGA</Th>
                <Th>FG%</Th>
                <Th>FTM</Th>
                <Th>FTA</Th>
                <Th>FT%</Th>
                <Th>OREB</Th>
                <Th>DREB</Th>
                <Th>REB</Th>
                <Th>AST</Th>
                <Th>STL</Th>
                <Th>BLK</Th>
                <Th>TO</Th>
                <Th>PF</Th>
                <Th>PTS</Th>
              </Tr>
            </Thead>

            <Tbody>{statRows}</Tbody>
          </Table>
        </div>
      </Skeleton>
    );
  } else {
    const statRows = LastTenGames.map((game, index) => {

      if (isLessThan1280) {

        console.log("######################## IS LESS THAN *800 px!!!",isLessThan128)
        if (index % 2 !== 0) {
          return (
            <Tr key={game.gameId}>
              <Td textAlign={"center"}>{game.min}</Td>
              <Td textAlign={"center"}>{game.fgm}</Td>
              <Td textAlign={"center"}>{game.fga}</Td>
              <Td textAlign={"center"}>{game.fgp}</Td>
              <Td textAlign={"center"}>{game.ftp}</Td>
              <Td textAlign={"center"}>{game.totReb}</Td>
              <Td textAlign={"center"}>{game.assists}</Td>
              <Td textAlign={"center"}>{game.steals}</Td>
              <Td textAlign={"center"}>{game.blocks}</Td>
              <Td textAlign={"center"}>{game.turnovers}</Td>
              <Td textAlign={"center"}>{game.points}</Td>
            </Tr>
          );
        }
      }

      if (index % 2 !== 0) {
        return (
          <Tr key={game.gameId}>
            <Td textAlign={"center"}>{game.min}</Td>
            <Td textAlign={"center"}>{game.fgm}</Td>
            <Td textAlign={"center"}>{game.fga}</Td>
            <Td textAlign={"center"}>{game.fgp}</Td>
            <Td textAlign={"center"}>{game.ftm}</Td>
            <Td textAlign={"center"}>{game.fta}</Td>
            <Td textAlign={"center"}>{game.ftp}</Td>
            <Td textAlign={"center"}>{game.offReb}</Td>
            <Td textAlign={"center"}>{game.defReb}</Td>
            <Td textAlign={"center"}>{game.totReb}</Td>
            <Td textAlign={"center"}>{game.assists}</Td>
            <Td textAlign={"center"}>{game.steals}</Td>
            <Td textAlign={"center"}>{game.blocks}</Td>
            <Td textAlign={"center"}>{game.turnovers}</Td>
            <Td textAlign={"center"}>{game.pFouls}</Td>
            <Td textAlign={"center"}>{game.points}</Td>
          </Tr>
        );
      }
      return (
        <Tr key={game.gameId}>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.min}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.fgm}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.fga}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.fgp}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.ftm}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.fta}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.ftp}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.offReb}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.defReb}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.totReb}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.assists}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.steals}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.blocks}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.turnovers}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.pFouls}
          </Td>
          <Td textAlign={"center"} fontWeight={"bold"}>
            {game.points}
          </Td>
        </Tr>
      );
    });

    return (
      <>
        <h1> Last Ten Games </h1>

        {/* <Center></Center> */}
        <Center maxW={"md"}>
          <Table
            size={"sm"}
            variant="striped"
            colorScheme="gray"
            overflowX={"scroll"}
            p={5}
          >
            <Thead>
              <Tr>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  MIN
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  FGM
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  FGA
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  FG%
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  FTM
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  FTA
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  FT%
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  OREB
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  DREB
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  REB
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  AST
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  STL
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  BLK
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  TO
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  PF
                </Th>
                <Th fontSize={"lg"} fontWeight={"extrabold"}>
                  PTS
                </Th>
              </Tr>
            </Thead>

            <Tbody>{statRows}</Tbody>
          </Table>
        </Center>
      </>
    );
  }
};
