import { Button } from "@chakra-ui/react";
import React from "react";
export const SubmitButton = ({ resubmitDisplay, setResubmit }) => {
  return (
    <Button
    p={10}
      onClick={() => {
        setResubmit(!resubmitDisplay);
      }}
    >
      Find Player!
    </Button>
  );
};
