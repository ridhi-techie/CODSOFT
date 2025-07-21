const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: String,
  location: String,
  description: String,
  category: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", jobSchema);
