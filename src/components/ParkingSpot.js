import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Box, Center, Flex } from '@chakra-ui/react';

function ParkingSpot() {
    const [boxColor, setBoxColor] = useState('green'); // Default to green
    const [spotAvailable, setSpotAvailable] = useState('Yes');
    const [timeArrived, setTimeArrived] = useState('');
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [connected, setConnected] = useState(false); // Added connected state
    let intervalId = null; // To keep track of the interval ID

    useEffect(() => {
        const socket = io('http://localhost:3000');

        socket.on('connect', () => {
            console.log('Connected to server');
            setConnected(true);
        });

        socket.on('colorChange', (data) => {
            console.log('Color change event received:', data);
            setBoxColor(data.color); // Update the box color based on the event
            setSpotAvailable(data.color === 'green' ? 'Yes' : 'No');

            if (data.color === 'green') {
                if (intervalId) clearInterval(intervalId); // Clear the interval when spot becomes available
                setTimeElapsed(0);
                setTimeArrived('');
            } else {
                if (!intervalId) { // Start timing only if not already started
                    const now = new Date();
                    setTimeArrived(now.toLocaleTimeString());
                    intervalId = setInterval(() => {
                        setTimeElapsed(prevTime => prevTime + 1);
                    }, 1000); // Update timeElapsed every second
                }
            }
        });

        return () => {
            if (intervalId) clearInterval(intervalId); // Cleanup on component unmount
            socket.off('colorChange');
            socket.off('connect');
            socket.disconnect();
            setConnected(false);
        };
    }, []);

    // Implement a more sophisticated way to display time elapsed if needed
    const formatTimeElapsed = (seconds) => {
        // This could be expanded to format seconds into HH:MM:SS or similar
        return `${seconds} seconds`;
    };

    return (
        <Center minH="100vh">
            <Flex direction="column" p="24" bg="gray.100" rounded="xl" boxShadow="md">
                <Flex justify="center" align="center" px="32" py="8">
                    <Box w="40" h="40" rounded="2xl" bg={boxColor} position="relative" display="flex" justify="center" alignItems="center" mr="10">
                        {/* Optional: Display an icon or text here based on the spot availability */}
                    </Box>
                    <Flex direction="column" textAlign="center">
                        <Box mb="8" bg="gray.300" p="4" rounded="md">
                            <p className="text-black text-xl font-semibold">Spot Availability: {spotAvailable}</p>
                        </Box>
                        <Box mb="8" bg="gray.300" p="4" rounded="md">
                            <p className="text-black text-xl font-semibold">Time Arrived: {timeArrived}</p>
                        </Box>
                        <Box bg="gray.300" p="4" rounded="md">
                            <p className="text-black text-xl font-semibold">Time Elapsed: {formatTimeElapsed(timeElapsed)}</p>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Center>
    );
}

export default ParkingSpot;
