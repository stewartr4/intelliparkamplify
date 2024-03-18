import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Textarea, Center, Box } from '@chakra-ui/react';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = () => {
    // Add your logic to handle form submission here
    // For example, you can send the email and message to your backend
    // and save it to a database or a file
    console.log('Form submitted');
    closeModal();
  };

  return (
    <Center h="100vh">
      <Box
        p={8}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        bgColor="white"
        onClick={openModal}
        _hover={{
          cursor: 'pointer',
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease',
        }}
      >
        <Button variant="unstyled" size="lg">
          <Center>
            <Box fontSize="3xl" color="black">Contact Us</Box>
          </Center>
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Us</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your email" color="black" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your message" color="black" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleSubmit}>
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}

export default Contact;
