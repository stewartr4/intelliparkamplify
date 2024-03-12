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


function App({ signOut }) {
  return (
    <Router>
    <View className="App">
      <Navbar signOut={signOut} />
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/ParkingLot" element={<ParkingLot />} />
      <Route path="/ParkingSpot" element={<ParkingSpot />} />
      <Route path="/AdminConsole" element={<AdminConsole />} />
      </Routes>
    </View>
    </Router>
  );
}

export default withAuthenticator(App);


