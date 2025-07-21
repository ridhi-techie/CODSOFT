// server/routes/applyRoute.js

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Application = require("../models/Application");

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// POST /api/apply
router.post("/", upload.single("resume"), async (req, res) => {
  const { jobId, name, email } = req.body;
  const resumePath = req.file ? req.file.path : null;

  try {
    const application = new Application({
      jobId,
      name,
      email,
      resume: resumePath,
    });

    await application.save();
    res.status(201).json({ message: "Application submitted successfully." });
  } catch (err) {
    console.error("Error saving application:", err);
    res.status(500).json({ error: "Failed to submit application." });
  }
});

module.exports = router;
