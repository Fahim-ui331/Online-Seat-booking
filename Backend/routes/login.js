const express = require("express");
const multer = require("multer");
const fs = require("fs/promises");
const path = require("path");
const mysql = require("mysql2/promise");

// Route to handle user login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  const query =
    "SELECT firstName, lastName, displayName, email FROM userdata WHERE email = ? AND password = ?";
  try {
    const [results] = await db.query(query, [email, password]);

    if (results.length > 0) {
      res.json({ message: "Login successful.", user: results[0] });
    } else {
      res.status(401).json({ message: "Invalid email or password." });
    }
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ message: "Server error." });
  }
});
