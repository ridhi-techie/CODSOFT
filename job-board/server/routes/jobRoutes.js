const express = require("express");
const router = express.Router();
const {
  createJob,
  getJobs,
  getJobById,
  deleteJob,
} = require("../controllers/jobController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createJob);
router.get("/", getJobs);
router.get("/:id", getJobById);
router.delete("/:id", authMiddleware, deleteJob);

module.exports = router;
