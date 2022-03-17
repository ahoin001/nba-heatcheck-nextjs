import { Skeleton, Spinner } from "@chakra-ui/react";

export const PlayerInfo = ({ playerInfo }) => {
  if (JSON.stringify(playerInfo) === "{}") {
    return <Skeleton height={"500px"} />;
  } else {
    return (
      <>
        <div>
          <h1> {playerInfo.currentPlayer.firstName} </h1>
          <h2> {playerInfo.currentPlayer.lastName} </h2>
          <h2> Position: {playerInfo.currentPlayer.leagues.standard.pos} </h2>
          <h2>
            {" "}
            Jersey #: {playerInfo.currentPlayer.leagues.standard.jersey}{" "}
          </h2>

          <div className="divider"> </div>
        </div>
      </>
    );
  }
};
