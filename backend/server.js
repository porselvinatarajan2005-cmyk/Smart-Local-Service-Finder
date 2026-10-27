const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Home API
app.get("/", (req, res) => {
  res.json({
    message: "Smart Local Service Finder Backend is running!"
  });
});


// Test API
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Frontend and Backend connection is working!"
  });
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});