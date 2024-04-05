import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Your login logic goes here
    // For demonstration, let's just show a pop-up message
    alert("Thank you for logging into the Intellipark admin console!");
  };

  return (
    <Box maxW="500px" mx="auto" mt="20">
      <Heading as="h1" textAlign="center" mb="6">
        Welcome to the Intellipark Admin Console
      </Heading>
      <Box bg="white" p="6" borderRadius="md" boxShadow="md">
        <Text textAlign="center" mb="4">
          Please log in with your credentials below
        </Text>
        <Box mb="4">
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            color="black"
          />
        </Box>
        <Box mb="4">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            color="black"
          />
        </Box>
        <Button colorScheme="blue" size="lg" w="full" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
