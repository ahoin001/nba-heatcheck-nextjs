import {
  Skeleton,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";

export const LastTenGames = ({ LastTenGames }) => {
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");

  //? If the props aren't loaded yet, display loading component
  if (JSON.stringify(LastTenGames) === "{}") {
    // return "";
    return <Skeleton></Skeleton>;
  } else {
    // console.log("FROM LASTTENGAMES ****: ", LastTenGames);
    // console.log("===========");
    // console.log("FROM LASTTENGAMES ****: ", LastTenGames.games);
    // ** Change how much informatino displayed judged by screen size
    const statRows = LastTenGames.games.map((game, index) => {
      if (isLessThan800) {
        if (index % 2 !== 0) {
          return (
            <Tr key={game.gameId}>
              <Td textAlign={"center"}>{game.points}</Td>
              <Td textAlign={"center"}>{game.totReb}</Td>
              <Td textAlign={"center"}>{game.assists}</Td>
              <Td textAlign={"center"}>{game.steals}</Td>
              {/* <Td textAlign={"center"}>{game.blocks}</Td> */}
              {/* <Td textAlign={"center"}>{game.fga}</Td>
              <Td textAlign={"center"}>{game.fgm}</Td>
              <Td textAlign={"center"}>{game.fgp}</Td> */}
            </Tr>
          );
        } else {
          return (
            <Tr key={game.gameId}>
              <Td textAlign={"center"} fontWeight={"bold"}>
                {game.points}
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
              {/* <Td textAlign={"center"} fontWeight={"bold"}>
                {game.blocks}
              </Td> */}
              {/* <Td textAlign={"center"} fontWeight={"bold"}>
                {game.fga}
              </Td>
              <Td textAlign={"center"} fontWeight={"bold"}>
                {game.fgm}
              </Td>
              <Td textAlign={"center"} fontWeight={"bold"}>
                {game.fgp}
              </Td> */}
            </Tr>
          );
        }
      } else {
        if (index % 2 !== 0) {
          return (
            <Tr key={game.gameId}>
              <Td textAlign={"center"}>{game.min}</Td>
              <Td textAlign={"center"}>{game.fgm}</Td>
              <Td textAlign={"center"}>{game.fga}</Td>
              <Td textAlign={"center"}>{game.fgp}</Td>
              <Td textAlign={"center"}>{game.ftm}</Td>
              {/* <Td textAlign={"center"}>{game.fta}</Td>
              <Td textAlign={"center"}>{game.ftp}</Td>
              <Td textAlign={"center"}>{game.offReb}</Td>
              <Td textAlign={"center"}>{game.defReb}</Td> */}
              <Td textAlign={"center"}>{game.totReb}</Td>
              <Td textAlign={"center"}>{game.assists}</Td>
              <Td textAlign={"center"}>{game.steals}</Td>
              <Td textAlign={"center"}>{game.blocks}</Td>
              {/* <Td textAlign={"center"}>{game.turnovers}</Td>
              <Td textAlign={"center"}>{game.pFouls}</Td> */}
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
            {/* <Td textAlign={"center"} fontWeight={"bold"}>
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
            </Td> */}
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
            {/* <Td textAlign={"center"} fontWeight={"bold"}>
              {game.turnovers}
            </Td>
            <Td textAlign={"center"} fontWeight={"bold"}>
              {game.pFouls}
            </Td> */}
            <Td textAlign={"center"} fontWeight={"bold"}>
              {game.points}
            </Td>
          </Tr>
        );
      }
    });
    const tableColumnsCompute = () => {
      if (isLessThan800) {
        return (
          <Tr>
            <Th fontSize={"lg"} fontWeight={"extrabold"}>
              PTS
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
            {/* <Th fontSize={"lg"} fontWeight={"extrabold"}>
              BLK
            </Th> */}
            {/* <Th fontSize={"lg"} fontWeight={"extrabold"}>
              FGA
            </Th>{" "}
            <Th fontSize={"lg"} fontWeight={"extrabold"}>
              FGM
            </Th>
            <Th fontSize={"lg"} fontWeight={"extrabold"}>
              FG%
            </Th> */}
          </Tr>
        );
      } else {
        return (
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
            {/* <Th fontSize={"lg"} fontWeight={"extrabold"}>
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
            </Th> */}
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
            {/* <Th fontSize={"lg"} fontWeight={"extrabold"}>
              TO
            </Th>
            <Th fontSize={"lg"} fontWeight={"extrabold"}>
              PF
            </Th> */}
            <Th fontSize={"lg"} fontWeight={"extrabold"}>
              PTS
            </Th>
          </Tr>
        );
      }
    };

    const tableColumns = tableColumnsCompute();

    return (
      <VStack
        align={"center"}
        justify={"center"}
        wrap={"wrap"}
        // sx={{ border: "1px solid yellow" }}
      >
        <Heading mb={6}> Last Ten Games </Heading>

        <Table
          // sx={{ border: "1px solid yellow" }}
          // maxW={["20px"]}
          variant="striped"
          colorScheme="gray"
        >
          <Thead>{tableColumns}</Thead>
          <Tbody>{statRows}</Tbody>
        </Table>
      </VStack>
    );
  }
};
