import { Flex, Image, Text, VStack } from '@chakra-ui/react';
import BudgetSvg from '../assets/budget.svg';
import ChatSvg from '../assets/chat.svg';
import HomeSvg from '../assets/home.svg';
import ProfileSvg from '../assets/profile.svg';
import ReportsSvg from '../assets/reports.svg';

const MobileFooter = () => {
  const menuItems = [
    { label: 'Home', icon: HomeSvg },
    { label: 'Reports', icon: ReportsSvg },
    { label: 'Chat', icon: ChatSvg },
    { label: 'Budget', icon: BudgetSvg },
    { label: 'Profile', icon: ProfileSvg },
  ];

  return (
    <Flex
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg="white"
      justifyContent="space-around"
      alignItems="center"
      boxShadow="0 -2px 10px rgba(0, 0, 0, 0.1)"
      p={2}
    >
      {menuItems.map((item, index) => (
        <VStack key={index} textAlign="center" spacing={1}> 
          <Image src={item.icon} boxSize="20px" />
          <Text fontSize="xs" color="#C1C4CD" fontWeight="450" lineHeight="normal">
            {item.label}
          </Text>
        </VStack>
      ))}
    </Flex>
  );
};

export default MobileFooter;
