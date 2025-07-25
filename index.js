const express = require('express');

const app = express();
const PORT = 3000;

// Vulnerable route: uses eval on user input
app.post('/eval', (req, res) => {
  const userCode = req.body.code;
  const result = eval(userCode); // <-- Vulnerability
  res.send(`Result: ${result}`);
});

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = server; // Export the server instance