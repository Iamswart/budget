import { Box, Text, VStack } from "@chakra-ui/react";

interface ChartsProps {
  monthlyBudget: string;
  amountSpent: string;
}

const Charts = ({ monthlyBudget, amountSpent }: ChartsProps) => {
  // Convert string amounts to numbers and calculate the percentage
  const budget = parseFloat(monthlyBudget.replace("₦", ""));
  const spent = parseFloat(amountSpent.replace("₦", ""));
  const percentage = (spent / budget) * 100;

  // SVG circle settings
  const outerRadius = 70;
  const innerRadius = 62;
  const innerCircumference = innerRadius * 2 * Math.PI;
  const strokeDasharray = `${
    (percentage / 100) * innerCircumference
  } ${innerCircumference}`;

 

  return (
    <VStack spacing={4} align="center" px="30" >
      <Box>
        <svg width="150" height="150" viewBox="0 0 150 150">
          <circle
            cx="75"
            cy="75"
            r={outerRadius}
            fill="none"
            stroke="#0466C866"
            strokeWidth="10"
          />
          <circle
            cx="75"
            cy="75"
            r={innerRadius}
            fill="none"
            stroke="#0466C8"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            transform="rotate(-90 75 75)"
          />
          <text
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
            fill="#0466C8"
            fontFamily="Circular Std, sans-serif"
            fontSize="36px"
            fontStyle="normal"
            fontWeight="700"
            letterSpacing="-0.72px"
          >
            {Math.round(percentage)}%
          </text>
        </svg>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          fontSize="sm"
          color={"#707480"}
          fontStyle={"normal"}
          fontWeight={"normal"}
          lineHeight={"0%"}
          letterSpacing={"-0.07px"}
        >
          Amount spent so far
        </Text>
        <Text
          fontSize="md"
          fontWeight="normal"
          mt={5}
          color={"#67A2DC"}
          lineHeight={"30.5px"}
          letterSpacing={"-0.08px"}
        >
          <span style={{ color: "#0466C8" }}>{amountSpent}</span>/
          <span style={{ color: "#67A2DC" }}>{monthlyBudget}</span>
        </Text>
      </Box>
    </VStack>
  );
};

export default Charts;
