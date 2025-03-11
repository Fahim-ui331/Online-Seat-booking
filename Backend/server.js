// Backend/server.js

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Import routes
const registerRoutes = require("./routes/register");

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Routes
app.use(registerRoutes); // Use the registration routes

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
