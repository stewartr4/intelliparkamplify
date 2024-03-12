// Navbar.js
import { Button, Flex, Image, Spacer } from "@chakra-ui/react";
import logo from "../logo.svg";
import { Link } from 'react-router-dom'; // Import Link

function Navbar({ signOut }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p={4}
      bg="gray.200"
      borderBottom="1px"
      borderColor="gray.400"
    >
      <Image src={logo} className="App-logo" alt="logo" boxSize="40px" />
      <Spacer />
      <Flex>
        <Link to="/Home">
          <Button variant="ghost" colorScheme="blue">
            Home
          </Button>
        </Link>
        <Link to="/ParkingLot">
        <Button variant="ghost" colorScheme="blue">
          Parking Lot
        </Button>
        </Link>
        <Link to="/ParkingSpot">
        <Button variant="ghost" colorScheme="blue">
          Parking Spot
        </Button>
        </Link>
        <Link to="/AdminConsole">
        <Button variant="ghost" colorScheme="blue">
          Admin Console
        </Button>
        </Link>
        <Button variant="ghost" colorScheme="blue">
          Contact
        </Button>
      </Flex>
      <Button onClick={signOut} colorScheme="red">
        Sign Out
      </Button>
    </Flex>
  );
}

export default Navbar;

