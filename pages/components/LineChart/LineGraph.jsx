import { useState } from "react";
import { ComboBox } from "../UIComponents/ComboBoxSelect";

import {
  options,
  data,
  CustomToolTip,
  statToolTip,
  statToShow,
} from "./LineGraphImports";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const LineGraph = ({ LastTenGames }) => {
  const [selectedOptionOne, setSelectedOptionOne] = useState({
    value: "PPG",
    label: "PTS",
  });
  const [selectedOptionTwo, setSelectedOptionTwo] = useState({
    value: "PPG",
    label: "PTS",
  });

  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  console.log(selectedOptionOne);
  console.log(selectedOptionOne.value);
  return (
    <>
      <div>
        {/* <h1 style={{ color: '#eceff1' }}> LAST TEN GAMES </h1> */}
        <h1> LAST TEN GAMES VISUAL</h1>

        <div>
          <ComboBox
            listOfOptions={options}
            value={selectedOptionOne}
            isSearchable={false}
            closeMenuOnSelect={true}
            handleChange={(userSelectedOption) =>
              setSelectedOptionOne(userSelectedOption)
            }
            placeholderText="Select a stat"
          />
          <ComboBox
            listOfOptions={options}
            value={selectedOptionTwo}
            isSearchable={false}
            closeMenuOnSelect={true}
            handleChange={(userSelectedOption) =>
              setSelectedOptionTwo(userSelectedOption)
            }
            placeholderText="Compare a stat!"
          />
        </div>

        <ResponsiveContainer width="99%" height={400}>
          {/* {console.log("++++++++++++++++ VALUE BEING USED IS", selectedOption.value)} */}
          {JSON.stringify(LastTenGames) !== "{}" ? (
            <LineChart
              //   className="line-chart"
              data={statToShow(selectedOptionOne.value, LastTenGames)}
              // data={() => data()}
              margin={{
                top: 30,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomToolTip />} />
              {/* <Tooltip /> */}
              <Legend />
              <Line
                type="monotone"
                // dataKey={"Assists"}
                dataKey={statToolTip(selectedOptionOne.value)}
                stroke="#8884d8"
              />
              {/* <Line
                type="monotone"
                dataKey={statToolTip(selectedOptionTwo.value)}
                stroke="green"
              /> */}
            </LineChart>
          ) : (
            " "
          )}
        </ResponsiveContainer>

        <div className="divider"> </div>
      </div>
    </>
  );
};
