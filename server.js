const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// Serve static files (e.g. index.html)
app.use(express.static(path.join(__dirname, ".")));

// Default route for health check
app.get("/", (req, res) => {
  res.send("Voice agent server is live");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});