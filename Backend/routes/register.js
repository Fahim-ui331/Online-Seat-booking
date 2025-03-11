const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("./dbconnect"); // Ensure this path is correct

// Route to handle user registration
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const query = "INSERT INTO userdata (email, password) VALUES (?, ?)";
  try {
    await db.query(query, [email, hashedPassword]);
    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
