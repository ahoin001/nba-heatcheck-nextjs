import { Select } from "chakra-react-select";
import { Box, useMediaQuery } from "@chakra-ui/react";

export const ComboBox = ({ handleChange, listOfOptions, placeholderText }) => {
  const [isScreenWidthLessThan600] = useMediaQuery("(max-width: 601px)");

  return (
    <Box
      // px={[6, 8]}
      // py={[8]}
      // w={["sm", "md"]}
      // minW={"sm"}
      className="BIGCOW"
      minW={isScreenWidthLessThan600 ? '300px' : 'xl'}
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
