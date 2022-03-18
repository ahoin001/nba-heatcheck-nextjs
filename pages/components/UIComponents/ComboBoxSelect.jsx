import { Select } from "chakra-react-select";
import { Box } from "@chakra-ui/react";

export const ComboBox = ({ handleChange, listOfOptions, placeholderText }) => {
  return (
    <Box w={['100%', "2xl","5xl"]} my={10} px={5}>
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
