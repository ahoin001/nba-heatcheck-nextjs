import { Button } from "@chakra-ui/react";
import React from 'react'
export const SubmitButton = ({ displayPlayerInfo }) => {
  return (
    <Button
      onClick={() => {
        displayPlayerInfo = true;
      }}
    >
      Find Player!
    </Button>
  );
};
