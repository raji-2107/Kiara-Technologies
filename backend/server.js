const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 5000;

const filePath = path.join(__dirname, "registrations.json");

app.use(cors());
app.use(express.json());


// Test API
app.get("/", (req, res) => {
  res.json({
    message: "State Level Competition API is running"
  });
});


// Registration API
app.post("/register", (req, res) => {

  console.log("Registration data received:");
  console.log(req.body);

  try {

    // Read existing registrations
    const data = fs.readFileSync(filePath, "utf8");

    const registrations = JSON.parse(data);

    // Create new registration
    const newRegistration = {
      id: registrations.length + 1,
      ...req.body,
      registeredAt: new Date().toISOString()
    };

    // Add registration
    registrations.push(newRegistration);

    // Save registration
    fs.writeFileSync(
      filePath,
      JSON.stringify(registrations, null, 2)
    );

    console.log("Registration saved successfully");

    res.status(201).json({
      success: true,
      message: "Registration successful",
      registration: newRegistration
    });

  } catch (error) {

    console.error("Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to save registration",
      error: error.message
    });

  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});