import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

import { galaxyFoldStyle } from "./Category";

const MonthSelection = () => {
  return (
    <Flex w={"full"} mt={"30px"} px="30" sx={galaxyFoldStyle}>
      <Text
        color="#707480"
        cursor="pointer"
        fontSize={"16px"}
        fontWeight="400"
        lineHeight={"30.5px"}
        letterSpacing={"-0.08px"}
        fontStyle={"normal"}
      >
        Last Month
      </Text>
      <Spacer />
      <Box position={"relative"} mb={"4"}>
        <Text
          color="#0466C8"
          cursor="pointer"
          whiteSpace="nowrap"
          left="50%"
          transform="translateX(-50%)"
          fontSize={"16px"}
          fontWeight="400"
          lineHeight={"30.5px"}
          letterSpacing={"-0.08px"}
          fontStyle={"normal"}
        >
          This Month
        </Text>
        <Box
          position="absolute"
          bottom="-1px"
          left="1%"
          transform="translateX(-120%)"
          width="30px"
          height="2px"
          bg="#0466C8"
          borderRadius="full"
        />
      </Box>
      <Spacer />
      <Text
        fontSize="16px"
        fontWeight="400"
        lineHeight="30.5px"
        letterSpacing="-0.08px"
        fontStyle="normal"
        color="#707480"
        cursor="pointer"
      >
        ...
      </Text>
    </Flex>
  );
};

export default MonthSelection;
