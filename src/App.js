import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import ParkingLot from "./components/ParkingLot"; 
import ParkingSpot from "./components/ParkingSpot";
import AdminConsole from "./components/AdminConsole";
import Contact from "./components/Contact" 
import React, { useState } from 'react';
import theme from './theme';
import { ChakraProvider } from "@chakra-ui/react";



function App({ signOut }) {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  
  return (
    <ChakraProvider theme={theme}>
    <Router>
    <View className="App">
      <Navbar signOut={signOut} />
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/ParkingLot" element={<ParkingLot />} />
      <Route path="/ParkingSpot" element={<ParkingSpot />} />
      <Route path="/AdminConsole" element={<AdminConsole />} />
      <Route path="/Contact" element={<Contact />} />
      </Routes>
    </View>
    </Router>
    </ChakraProvider>
  );
}

export default App;


