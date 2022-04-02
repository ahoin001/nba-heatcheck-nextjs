import { Select } from "chakra-react-select";
import { Box, useMediaQuery } from "@chakra-ui/react";

export const ComboBox = ({ handleChange, listOfOptions, placeholderText }) => {
  // const [isLessThan600] = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      // px={[6, 8]}
      py={[8]}
      w={["sm","md", "md", "2xl"]}
    >
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
