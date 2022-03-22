import { Button } from "@chakra-ui/react";
import React from "react";
export const SubmitButton = ({ onSubmit }) => {
  return (
    <Button p={10} onClick={() => onSubmit()}>
      Find Player!
    </Button>
  );
};
