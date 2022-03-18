import { Select } from "chakra-react-select";
import { Box } from "@chakra-ui/react";

export const ComboBox = ({ handleChange, listOfOptions, placeholderText }) => {
  return (
    <Box px={[6, 8]} py={[4]} w={["80%", "80%", "4xl"]}>
      <Select
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
