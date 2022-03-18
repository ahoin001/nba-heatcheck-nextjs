import { StatboxAverages } from "./StatboxAverages";

export const BoxScore = ({ playerAvgs }) => {
  if (!playerAvgs) {
    return <div></div>;
  } else {
    return (
      <div>
        <StatboxAverages
          //   boxSize={this.props.boxSize}
          playerPPG={playerAvgs.playerPPG}
          playerRPG={playerAvgs.playerRPG}
          playerAPG={playerAvgs.playerAPG}
          playerSPG={playerAvgs.playerSPG}
          playerBPG={playerAvgs.playerBPG}
          playerTOPG={playerAvgs.playerTOPG}
          playerFGAPG={playerAvgs.playerFGAPG}
          playerFGMPG={playerAvgs.playerFGMPG}
          FGPercent={playerAvgs.FGPercent}
          playerFTAPG={playerAvgs.playerFTAPG}
          playerFTAMPG={playerAvgs.playerFTAMPG}
          FTPercent={playerAvgs.FTPercent}
        />
      </div>
    );
  }
};
