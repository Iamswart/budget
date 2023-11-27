import { Box, VStack } from "@chakra-ui/react";
import Amount, { monthlyBudget } from "./components/Amount";
import Category from "./components/Category";
import Charts from "./components/Charts";
import MobileFooter from "./components/MobileFooter";
import MonthSelection from "./components/MonthSelection";

const amountSpent = "₦50,000";

function App() {
  return (
    <>
      <Box bg="#FCFCFC" minH="100vh">
        <VStack mb={20}>
          <Amount />
          <MonthSelection />
          <Charts monthlyBudget={monthlyBudget} amountSpent={amountSpent} />
          <Category />
        </VStack>
      </Box>
      <MobileFooter />
    </>
  );
}

export default App;
