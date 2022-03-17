import { Skeleton } from "@chakra-ui/react";

export const PlayerInfo = ({leagues}) => {
//   const playerInfo = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     flex: "1 1 auto" /* Positive flex-shrink */,
//     marginTop: "3.2rem",
//     color: "rgb(236,239,241)",
    // border: '1px solid green'
  };
  if (!leagues) {
    return <Skeleton></Skeleton>;
  }
  return <div>PlayerInfo</div>;
};
