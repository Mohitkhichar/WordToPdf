const express = require('express');
const errorHandler = require('./middlewares/errorHandler'); // Import errorHandler
const routes = require('./routes'); // Import routes

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Example route for testing (ensure this is removed later)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Use the routes from your `routes` folder
app.use('/api', routes); // Adjust '/api' to match your actual routes

// Error handling middleware
app.use(errorHandler);

module.exports = app; // Export the app for use in server.js
