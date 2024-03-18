import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Textarea, Center, Box, Text } from '@chakra-ui/react';
import axios from 'axios';

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setFormData({ email: '', message: '' }); // Clear input fields
    setErrorMessage(''); // Clear error message
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://c6uwn2b6fjnrxshx42ehgohsmm0jyzjb.lambda-url.us-east-1.on.aws/', formData);
      console.log('Form submitted:', response.data);
      closeModal();
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('There was an error submitting your message. Please try again later.');
    }
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
          <ModalHeader colorScheme="black">Contact Us</ModalHeader>
          <ModalCloseButton colorScheme="blue"/>
          <ModalBody>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Your email"
                color="black"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Your message"
                color="black"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </FormControl>
            {errorMessage && (
              <Text mt={4} color="red.500">
                {errorMessage}
              </Text>
            )}
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
