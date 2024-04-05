import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Textarea, Center, Text } from '@chakra-ui/react';
import axios from 'axios';

function Contact() {
  const [isOpen, setIsOpen] = useState(true); // Open the modal by default
  const [formData, setFormData] = useState({ email: 'intellipark@gmail.com', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const closeModal = () => {
    setIsOpen(false);
    setFormData({ email: '', message: '' }); // Clear input fields
    setErrorMessage(''); // Clear error message
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { email, message } = formData;
    const mailtoLink = `mailto:${email}?body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
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
  );
}

export default Contact;
