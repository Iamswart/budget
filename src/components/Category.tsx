import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import foodSvg from "../assets/food.svg";
import savingsSvg from "../assets/savings.svg";

export const galaxyFoldStyle = {
  "@media screen and (max-width: 280px)": {
    paddingLeft: "2px",
    paddingRight: "0px",
  },
};

const Category = () => {
  const categories = [
    {
      title: "Food and Drink",
      svg: foodSvg,
      percentage: "40%",
      amountSpent: "₦20,000",
      monthlyBudget: "₦42,000",
    },
    {
      title: "Savings",
      svg: savingsSvg,
      percentage: "20%",
      amountSpent: "₦10,000",
      monthlyBudget: "₦24,000",
    },
    {
      title: "Food and Drink",
      svg: foodSvg,
      percentage: "40%",
      amountSpent: "₦20,000",
      monthlyBudget: "₦42,000",
    },
    {
      title: "Savings",
      svg: savingsSvg,
      percentage: "20%",
      amountSpent: "₦10,000",
      monthlyBudget: "₦24,000",
    },
  ];

  return (
    <Box textAlign="left" w="full" mt={"30px"}>
      <Text
        fontSize="21px"
        fontWeight="500"
        color="#001233"
        textAlign="left"
        mb={4}
        lineHeight="24px"
        letterSpacing={"-0.105px"}
        px="30"
        sx={galaxyFoldStyle}
      >
        Category Breakdown
      </Text>
      <VStack spacing={4} w="full" bg={"#FCFEFF"} align="stretch">
        {categories.map((category: any, index: any) => (
          <Flex
            key={index}
            justifyContent="space-between"
            alignItems="center"
            w="full"
            px="30px"
            sx={galaxyFoldStyle}
          >
            <Flex alignItems="center" flexGrow={1}>
              <Image src={category.svg} boxSize="50px" />
              <VStack spacing="4" align="start" ml="2">
                <Text
                  whiteSpace="normal"
                  textAlign="left"
                  color="#001233"
                  fontSize="14px"
                  fontStyle="normal"
                  lineHeight="4px"
                  fontWeight="500"
                  letterSpacing="-0.07px"
                >
                  {category.title}
                </Text>
                <Text
                  whiteSpace="normal"
                  textAlign="left"
                  color="#707480"
                  fontSize="sm"
                  fontStyle="normal"
                  lineHeight="normal"
                  fontWeight="400"
                  letterSpacing="-0.07px"
                >
                  {category.percentage}
                </Text>
              </VStack>
            </Flex>

            <Text
              fontSize="md"
              fontWeight="normal"
              color="#C1C4CD"
              lineHeight="30.5px"
              letterSpacing="-0.08px"
              flexGrow={1}
              textAlign="right"
            >
              <span style={{ color: "#001233" }}>{category.amountSpent}</span>/
              <span style={{ color: "#C1C4CD" }}>{category.monthlyBudget}</span>
            </Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Category;
