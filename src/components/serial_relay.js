const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const fetch = require('node-fetch');

const serialPort = new SerialPort('COM3', { baudRate: 9600 }); // Adjust COM port as necessary

const parser = serialPort.pipe(new Readline({ delimiter: '\n' }));

const serverUrl = 'http://localhost:3001/updateStatus'; // Adjust server URL as necessary

parser.on('data', async (line) => {
    let color;
    if (line.includes('GREEN')) {
        color = 'green';
    } else if (line.includes('RED')) {
        color = 'red';
    } else {
        color = 'yellow';
    }

    try {
        const response = await fetch(serverUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ color }),
        });
        console.log(`Status updated to ${color}`);
    } catch (error) {
        console.error('Error updating status:', error);
    }
});
