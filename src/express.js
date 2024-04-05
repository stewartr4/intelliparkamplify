const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'path_to_your_react_app_build')));

// Handles any requests that don't match the ones above by serving the React app's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'path_to_your_react_app_build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
