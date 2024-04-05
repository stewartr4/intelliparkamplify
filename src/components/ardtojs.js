// Node.js Server Setup
const http = require('http');
const fs = require('fs');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const socketIO = require('socket.io');

// Load your React app's built index.html file to serve it
const index = fs.readFileSync('<path_to_your_react_app_build>/index.html', 'utf-8');

// Set up the serial port
const port = new SerialPort('/dev/tty.usbmodem2101', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

// Attach socket.io to the server
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('A client connected');
    
    // Listen for messages from clients
    socket.on('message', (message) => {
        console.log(message);
    });
});

// Read data from the serial port
parser.on('data', (data) => {
    console.log('Received data from port: ' + data);
    data = data.trim();
    io.emit('colorChange', { color: data.toLowerCase() });
});

// Start the server
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
