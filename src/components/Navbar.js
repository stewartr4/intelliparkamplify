import { Button, Flex, Image, Spacer } from "@chakra-ui/react";
import logo from "../images/intelliPARK-logo.png";
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
      <Image src={logo} className="App-logo" alt="logo" boxSize="80px" />
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
        <Link to="/AdminConsole" target="_blank"> {/* Open in new tab */}
          <Button variant="ghost" colorScheme="blue">
            Admin Console
          </Button>
        </Link>
        <Link to="/Contact">
          <Button variant="ghost" colorScheme="blue">
            Contact
          </Button>
        </Link>
      </Flex>
      <Button onClick={signOut} colorScheme="red">
        Sign Out
      </Button>
    </Flex>
  );
}

export default Navbar;
