import { Skeleton } from "@chakra-ui/react";

// export const PlayerInfo = ({leagues}) => {
// //   const playerInfo = {
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     flex: "1 1 auto" /* Positive flex-shrink */,
// //     marginTop: "3.2rem",
// //     color: "rgb(236,239,241)",
//     // border: '1px solid green'
//   };
//   if (!leagues) {
//     return <Skeleton></Skeleton>;
//   }
//   return <div>PlayerInfo</div>;
// };

export const PlayerInfo = ({ playerInfo }) => {
  if (!playerInfo) {
    return (
      <Skeleton>
        {" "}
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
      </Skeleton>
    );
  }
  return (
    <>
      <div>
        <h1> {playerInfo.currentPlayer.firstName} </h1>
        <h2> {playerInfo.currentPlayer.lastName} </h2>
        <h2> Position: {playerInfo.currentPlayer.leagues.standard.pos} </h2>
        <h2> Jersey #: {playerInfo.currentPlayer.leagues.standard.jersey} </h2>

        <div className="divider"> </div>
      </div>
    </>
  );
};
