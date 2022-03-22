import { useState } from "react";
import { ComboBox } from "../UIComponents/ComboBoxSelect";

import { options, statToShow } from "./LineGraphImports";

import { Box, Center, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

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
    label: "Points",
  });
  const [selectedOptionTwo, setSelectedOptionTwo] = useState({
    value: "RPG",
    label: "Rebounds",
  });

  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  console.log(selectedOptionOne);
  console.log(selectedOptionOne.label);
  console.log(selectedOptionTwo);
  console.log(selectedOptionTwo.label);
  return (
    <>
      <VStack w={"container.md"}>
        {/* <h1 style={{ color: '#eceff1' }}> LAST TEN GAMES </h1> */}

        <Heading> LAST TEN GAMES VISUAL</Heading>

        {/* <ComboBox
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
        /> */}

        {/* <Box></Box> */}
        <ResponsiveContainer width="90%" height={400}>
          {JSON.stringify(LastTenGames) !== "{}" ? (
            <LineChart
              data={statToShow(LastTenGames)}
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

              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={selectedOptionOne.label}
                stroke="#8884d8"
              />

              <Line
                type="monotone"
                dataKey={selectedOptionTwo.label}
                stroke="green"
              />
            </LineChart>
          ) : (
            " "
          )}
        </ResponsiveContainer>
      </VStack>
    </>
  );
};
