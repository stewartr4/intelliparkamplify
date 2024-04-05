import React from 'react';
import logo from "../images/intelliPARK-logo.png";
import { Box, Heading, Text, Center, Image, VStack } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';

const Home = () => {
  return (
    <Center flexDirection="column" mt="40px">
      <Box maxW="250px">
        <Image src={logo} alt="Logo" maxW="250px" />
      </Box>
      <Box maxW="800px" p="4" borderWidth="1px" borderRadius="lg" textAlign="center" mt="40px">
        <Heading as="h1" size="xl" mt="4">Welcome to IntelliPARK</Heading>
        <Text fontSize="lg" mt="4">
          IntelliPARK revolutionizes parking management at Sacred Heart University by integrating advanced technologies. Originally starting with Arduino-based sensors and LED lights for monitoring parking availability, the project now employs machine vision, IoT, and AI algorithms for real-time, intelligent parking management. This approach enhances accuracy in monitoring parking spaces, vehicle identification, and introduces predictive analytics for optimizing utilization. By improving traffic flow, enhancing safety, and providing a seamless parking experience, IntelliPARK transforms campus life.
        </Text>
      </Box>
    </Center>
  );
};

export default Home;
