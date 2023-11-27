import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import nairaSvg from "../assets/naira.svg";

const galaxyFoldStyle = {
  "@media screen and (max-width: 280px)": {
    paddingLeft: "2px",
    paddingRight: "0px",
    width: "250px",
  },
};

export const monthlyBudget = "₦120,000";

const Amount = () => {
  return (
    <Box px="30" mt={"20px"} sx={galaxyFoldStyle}>
      <VStack align="flex-start" spacing="2.5">
        <HStack >
          <Image src={nairaSvg} boxSize={"20px"} />
          <Text
            whiteSpace="normal"
            textAlign="left"
            color={"#707480"}
            fontSize={"sm"}
            fontStyle={"normal"}
            lineHeight={"0%"}
            fontWeight={"normal"}
            letterSpacing={"-0.07px"}
          >
            Monthly Budget
          </Text>
        </HStack>
        <Box
          h={"51px"}
          width={"315px"}
          borderRadius={"10PX"}
          background={"#fff"}
          display="flex" 
          alignItems="center"
          sx={{
            boxShadow: "0px 5px 10px 2px rgba(0, 0, 0, 0.03)",
          }}
        >
          <Text
            color={"#001233"}
            fontSize={"xl"}
            fontStyle={"normal"}
            fontWeight={"bold"}
            lineHeight={"taller"}
            letterSpacing={"-1.4px"}
            ml={"20px"}
          >
            {monthlyBudget}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Amount;
