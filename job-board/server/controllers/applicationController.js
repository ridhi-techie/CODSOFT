const Application = require("../models/Application");

exports.applyToJob = async (req, res) => {
  try {
    // ✅ Debug logs
    console.log("✅ Apply API hit");
    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);

    const { jobId, coverLetter } = req.body;
    const resumePath = req.file ? req.file.path : "";

    const application = new Application({
      job: jobId,
      candidate: req.user.userId,
      resume: resumePath,
      coverLetter,
    });

    await application.save();
    res.status(201).json({ message: "Application submitted", application });
  } catch (err) {
    console.error("❌ Error in applyToJob:", err);
    res.status(500).json({ error: err.message });
  }
};

exports.getApplicationsForJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const applications = await Application.find({ job: jobId }).populate("candidate", "name email");
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
