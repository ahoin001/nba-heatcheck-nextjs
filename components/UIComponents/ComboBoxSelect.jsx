import { Select } from "chakra-react-select";
import { Box } from "@chakra-ui/react";

export const ComboBox = ({ handleChange, listOfOptions, placeholderText }) => {
  return (
    <Box px={[6, 8]} py={[8]} w={"4xl"}>
      <Select
        size="lg"
        instanceId={"postType"}
        name="players"
        onChange={handleChange}
        options={listOfOptions}
        placeholder={placeholderText}
        closeMenuOnSelect={true}
      />
    </Box>
  );
};
