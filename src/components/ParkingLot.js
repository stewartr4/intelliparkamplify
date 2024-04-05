import { useState, useEffect } from 'react';
import { Box, Center, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function CarPark() {
    const [color, setColor] = useState('green');

    useEffect(() => {
        const fetchColor = async () => {
            try {
                const response = await fetch('/api/color');
                const data = await response.json();
                setColor(data.color);
            } catch (error) {
                console.error(error);
            }
        };

        fetchColor();
        const interval = setInterval(fetchColor, 1000); // Fetch the color every second

        return () => {
            clearInterval(interval); // Clean up the interval when the component unmounts
        };
    }, []);

    return (
        <Center minH="100vh" flexDirection="column">
            <Text fontSize="xl" fontWeight="bold" mb="4">Parking Lot 1</Text>
            <Box w="150" bg="gray.100" p="12" rounded="xl" boxShadow="md" mx="auto">
                <Stack direction="row" justify="center">
                    {['1A', '1B', '2A', '2B', '3A', '3B'].map(id => (
                        <Box key={id} p="4" w="50%" textAlign="center">
                            {id === '1A' ? (
                                <Link to="/ParkingSpot">
                                    <Box
                                        bg={color === 'red' ? 'red.600' : 'green.600'}
                                        color="white"
                                        fontWeight="bold"
                                        fontSize="sm"
                                        rounded="md"
                                        p="2"
                                        transition="background-color 0.3s ease-in-out"
                                        _hover={{ bg: color === 'red' ? 'red.700' : 'green.700' }}
                                    >
                                        {id}
                                    </Box>
                                </Link>
                            ) : (
                                <Box
                                    bg={color === 'red' ? 'red.600' : 'green.600'}
                                    color="white"
                                    fontWeight="bold"
                                    fontSize="sm"
                                    rounded="md"
                                    p="2"
                                    transition="background-color 0.3s ease-in-out"
                                    _hover={{ bg: color === 'red' ? 'red.700' : 'green.700' }}
                                >
                                    {id}
                                </Box>
                            )}
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Center>
    );
}

export default CarPark;
