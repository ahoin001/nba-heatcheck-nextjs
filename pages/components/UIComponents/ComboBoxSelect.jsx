import { Select } from "chakra-react-select";
import { Box, FormControl } from "@chakra-ui/react";

export const ComboBox = ({ handleChange, listOfOptions,placeholderText }) => {
  return (
    <FormControl p={4}>
      <Box maxW={["md", "4xl"]}>
        {" "}
        <Select
          instanceId={"postType"}
          name="players"
          onChange={handleChange}
          options={listOfOptions}
          placeholder={placeholderText}
          closeMenuOnSelect={true}
          
        />
      </Box>
    </FormControl>
  );
};
