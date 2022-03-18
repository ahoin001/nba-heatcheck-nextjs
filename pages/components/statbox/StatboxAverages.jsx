import { Statbox } from "./Statbox";
import { Center, Heading, HStack, Box } from "@chakra-ui/react";

export const StatboxAverages = ({
  playerPPG,
  playerRPG,
  playerAPG,
  playerSPG,
  playerBPG,
  playerTOPG,
  playerFGAPG,
  playerFGMPG,
  FGPercent,
  playerFTAPG,
  playerFTAMPG,
  FTPercent,
}) => {
  //   const container = {
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     flex: "1 1 auto" /* Positive flex-shrink */,
  //     width: "100%",
  //     margin: "20px auto 30px auto",
  //     // border: '1px solid yellow'
  //   };

  //   const boxScore = {
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     flex: "1 1 auto" /* Positive flex-shrink */,
  //     color: "blue",
  //     // border: '1px solid blue'
  //   };

  //   const header = {
  //     textAlign: "center",
  //     fontFamily: "Rajdhani",
  //     fontWeight: 400,
  //     lineHeight: 1.5,
  //     color: "#eceff1",
  //   };

  return (
    <Box>
      <Center>
        <Heading size={"xl"} p={8}> CURRENT SEASON AVERAGES </Heading>
      </Center>

      <HStack justify={"center"}>
        <Statbox Stat={"PPG"} Average={playerPPG} />
        <Statbox Stat={"RPG"} Average={playerRPG} />
        <Statbox Stat={"APG"} Average={playerAPG} />
        <Statbox Stat={"SPG"} Average={playerSPG} />
        <Statbox Stat={"BPG"} Average={playerBPG} />
        <Statbox Stat={"TO"} Average={playerTOPG} />
        <Statbox Stat={"FGA"} Average={playerFGAPG} />
        <Statbox Stat={"FGM"} Average={playerFGMPG} />
        <Statbox Stat={"FG%"} Average={FGPercent} />
        <Statbox Stat={"FTA"} Average={playerFTAPG} />
        <Statbox Stat={"FM"} Average={playerFTAMPG} />
        <Statbox Stat={"FT%"} Average={FTPercent} />
      </HStack>
    </Box>
    // <div style={container}>
    //   {this.props.boxSize === "large" ? (
    //     <React.Fragment>
    //       <h1 style={header}> '18 - '19 SEASON AVERAGES </h1>

    //       <div style={boxScore}>
    //         <Stat Stat={"PPG"} Average={this.props.playerPPG} />
    //         <Stat Stat={"RPG"} Average={this.props.playerRPG} />
    //         <Stat Stat={"APG"} Average={this.props.playerAPG} />
    //         <Stat Stat={"SPG"} Average={this.props.playerSPG} />
    //         <Stat Stat={"BPG"} Average={this.props.playerBPG} />
    //         <Stat Stat={"TO"} Average={this.props.playerTOPG} />
    //         <Stat Stat={"FGA"} Average={this.props.playerFGAPG} />
    //         <Stat Stat={"FGM"} Average={this.props.playerFGMPG} />
    //         <Stat Stat={"FG%"} Average={this.props.FGPercent} />
    //         <Stat Stat={"FTA"} Average={this.props.playerFTAPG} />
    //         <Stat Stat={"FM"} Average={this.props.playerFTAMPG} />
    //         <Stat Stat={"FT%"} Average={this.props.FTPercent} />
    //       </div>
    //     </React.Fragment>
    //   ) : (
    //     <React.Fragment>
    //       <h1 style={header}> '18 - '19 SEASON Averages </h1>

    //       <div style={boxScore}>
    //         <Stat Stat={"PPG"} Average={this.props.playerPPG} />
    //         <Stat Stat={"RPG"} Average={this.props.playerRPG} />
    //         <Stat Stat={"APG"} Average={this.props.playerAPG} />
    //         <Stat Stat={"SPG"} Average={this.props.playerSPG} />
    //         <Stat Stat={"BPG"} Average={this.props.playerBPG} />
    //         {/* <Stat Stat={"TO"} Average={this.props.playerTOPG} />
    //                       <Stat Stat={"FGA"} Average={this.props.playerFGAPG} />
    //                       <Stat Stat={"FGM"} Average={this.props.playerFGMPG} /> */}
    //       </div>
    //     </React.Fragment>
    //   )}

    //   <div className="divider"> </div>
    // </div>
  );
};
