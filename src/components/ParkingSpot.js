import { useState, useEffect } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';

function Parking() {
    const [boxColor, setBoxColor] = useState('');
    const [spotAvailable, setSpotAvailable] = useState('');
    const [timeArrived, setTimeArrived] = useState('');
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(() => {
        let timer;
        let colorChangedTime;
        const intervalId = setInterval(() => {
            fetch('/api/color')
                .then(response => response.json())
                .then(data => {
                    setBoxColor(data.color);
                    setSpotAvailable(data.color === 'green' ? 'Yes' : 'No');
                    if (data.color === 'red' && !colorChangedTime) {
                        colorChangedTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit' });
                        setTimeArrived(colorChangedTime);
                    }
                    if (data.color === 'red') {
                        if (!timer) {
                            timer = setInterval(() => {
                                setTimeElapsed(prevTime => prevTime + 1);
                            }, 1000);
                        }
                    } else {
                        clearInterval(timer);
                        timer = null;
                        setTimeElapsed(0);
                        setTimeArrived('');
                        colorChangedTime = null;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }, 1000);

        return () => {
            clearInterval(intervalId);
            clearInterval(timer);
        };
    }, []);

    const formatTime = (time) => {
        if (!time) {
            return '00:00:00';
        }
        if (typeof time !== 'string') {
            return time;
        }
        const [hours, minutes, seconds] = time.split(':');
        return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    };

    return (
        <Center minH="100vh">
            <Flex direction="column" p="12" bg="gray.100" rounded="xl" boxShadow="md">
                <Flex justify="center" align="center" px="32" py="8">
                    <Box w="40" h="40" mr="16" rounded="2xl" bg={boxColor} position="relative" display="flex" justify="center" alignItems="center">
                        <img src="" alt="" className="w-3/5 mt-12" />
                    </Box>

                    <Flex direction="column" textAlign="center">
                        <Box mb="8" bg="gray.300" p="4" rounded="md" position="relative">
                            <i className="parking-icon fas fa-car mr-4"></i>
                            <p className="text-black text-xl font-semibold inline">Spot Availability</p>
                            <Box mt="4" fontSize="3xl">{spotAvailable}</Box>
                        </Box>

                        <Box mb="8" bg="gray.300" p="4" rounded="md" position="relative">
                            <i className="parking-icon fas fa-clock mr-4"></i>
                            <p className="text-black text-xl font-semibold inline">Time Arrived</p>
                            <Box mt="4" fontSize="3xl">{formatTime(timeArrived)}</Box>
                        </Box>

                        <Box bg="gray.300" p="4" rounded="md" position="relative">
                            <i className="parking-icon fas fa-stopwatch mr-4"></i>
                            <p className="text-black text-xl font-semibold inline">Time Elapsed</p>
                            <Box mt="4" fontSize="3xl">{timeElapsed}</Box>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Center>
    );
}

export default Parking;
