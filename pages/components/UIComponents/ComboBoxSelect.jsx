import { Select } from "chakra-react-select";
import { Box, FormControl } from "@chakra-ui/react";

export const ComboBox = ({ listOfOptions, nbaPlayer, setNbaPlayer }) => {
  const handleChange = (selectedOption) => {
    const userOptionSelect = {
      value: selectedOption.value,
      label: selectedOption.label,
    };

    setNbaPlayer({
      ...nbaPlayer,
      selectedOption: userOptionSelect,
    });
  };

  return (
    <FormControl p={4}>
      <Box maxW={["md", "4xl"]}>
        {" "}
        <Select
          instanceId={"postType"}
          name="players"
          onChange={handleChange}
          options={listOfOptions}
          placeholder="Select a player.."
          closeMenuOnSelect={true}
          size="sm"
        />
      </Box>
    </FormControl>
  );
};
