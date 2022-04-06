import { VStack, Text } from "@chakra-ui/react";

export const Statbox = ({ Average, Stat }) => {
  return (
    <VStack p={2}>
      <Text fontSize={"3xl"} fontWeight={"bold"} mb={2}>
        {Stat}
      </Text>

      <Text fontSize={"2xl"} fontWeight={"semibold"}>
        {Average}
      </Text>
    </VStack>
  );
};
