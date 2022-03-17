import { Select } from "chakra-react-select";
import { FormControl } from "@chakra-ui/react";

export const ComboBox = ({ listOfOptions, nbaPlayer, setNbaPlayer }) => {
  const handleChange = (selectedOption) => {
    const selectPlayer = {
      value: selectedOption.value,
      label: selectedOption.label,
    };

    setNbaPlayer({
      ...nbaPlayer,
      selectedOption: selectPlayer,
    });
  };

  return (
    <FormControl p={4}>
      <Select
        instanceId={"postType"}
        name="players"
        onChange={handleChange}
        options={listOfOptions}
        placeholder="Select a player.."
        closeMenuOnSelect={true}
        size="sm"
      />
    </FormControl>
  );
};
