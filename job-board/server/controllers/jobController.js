const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, postedBy: req.user.userId });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    if (job.postedBy.toString() !== req.user.userId)
      return res.status(403).json({ message: "Unauthorized" });

    await job.deleteOne();
    res.json({ message: "Job deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
