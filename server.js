const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Allow CORS (modify later for failure demonstration)
app.use(cors());

// Dice rolling endpoint
app.get("/roll-dice", (req, res) => {
    const sides = req.query.sides ? parseInt(req.query.sides) : 6;
    const roll = Math.floor(Math.random() * sides) + 1;
    res.json({ diceRoll: roll });
});

// Wake-up API endpoint
app.get("/wake-up", (req, res) => {
    res.json({ message: "Server is awake!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
