// Require necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();
const port = 3001;

// Parking spot status object
let parkingStatus = { color: 'green' };

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to update parking spot status
app.post('/updateStatus', (req, res) => {
  const { color } = req.body;
  parkingStatus.color = color;
  res.send('Status updated');
});

// Endpoint to get parking spot status
app.get('/status', (req, res) => {
  res.json(parkingStatus);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
