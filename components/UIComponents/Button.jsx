import { Button } from "@chakra-ui/react";
import React from "react";
export const SubmitButton = ({ onSubmit, isLoading }) => {
  return (
    <Button p={10} onClick={() => onSubmit()} isDisabled={isLoading}>
      {isLoading ? "Finding Player Stats" : "Find Player"}
    </Button>
  );
};
