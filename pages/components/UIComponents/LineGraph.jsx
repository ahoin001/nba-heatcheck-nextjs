import { useState } from "react";
import { ComboBox } from "./ComboBoxSelect";
export const LineGraph = ({ lastTenGames }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: "PPG",
    label: "PTS",
  });

  const handleChange = (userSelectedOption) => {
    setSelectedOption({ selectedOption: userSelectedOption });
    console.log(`Option selected:`, userSelectedOption);
  };

  const options = [
    { value: "PPG", label: "PTS" },
    { value: "RPG", label: "REB" },
    { value: "APG", label: "AST" },
    { value: "SPG", label: "STL" },
    { value: "BPG", label: "BLK" },
    { value: "TOPG", label: "TO" },
    { value: "FGA", label: "FGA" },
    { value: "FGM", label: "FGM" },
  ];

  return (
    <div>
      <ComboBox
        listOfOptions={options}
        value={selectedOption}
        isSearchable={false}
        closeMenuOnSelect={true}
        // onChange={handleChange}
      />
      ;
    </div>
  );
};
