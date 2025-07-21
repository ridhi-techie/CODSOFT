// job-board/server/models/Application.js

const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
  },
  resume: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
