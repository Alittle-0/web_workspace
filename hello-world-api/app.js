//Main application file (app.js)
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

//Innitialize
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const greetingRouter = require("./routes/greetings");

//API routes
app.use("/api/greeting", greetingRouter);

// Import logger middleware
const requestLogger = require("./middleware/logger");

// Use logger middleware
app.use(requestLogger);

//Create data directory if it doesn't exist
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
  //Create initial data.json file if it doesn't exist
  if (!fs.existsSync(path.join(dataDir, "data.json"))) {
    fs.writeFileSync(
      path.join(dataDir, "data.json"),
      JSON.stringify([], null, 2),
      "utf-8"
    );
  }
}

//Root route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Hello World API!",
    version: "1.0.0",
    endpoints: {
      greeting: "/api/greeting",
      method: ["GET", "POST", "PUT", "DELETE"],
    },
  });
});

// Import Error handling middleware routes
const { errorHandler, notFoundHandler } = require("./middleware/errorHandler");

//404 handler
app.use(notFoundHandler);
app.use(errorHandler);

//Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API Documentation: http://localhost:${PORT}`);
})

module.exports = app;