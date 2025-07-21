// client/src/pages/ApplyJob.jsx

import React, { useState } from "react";
import axios from "axios";

const ApplyJob = () => {
  const [formData, setFormData] = useState({
    jobId: "",   // Paste real job ID or fetch from URL later
    name: "",
    email: "",
    resume: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append("jobId", formData.jobId);
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("resume", formData.resume);

    try {
  const res = await axios.post("http://localhost:5000/api/apply", submitData);
  console.log("Server Response:", res.data); // <-- Use res
  setMessage("✅ Application submitted successfully!");
} catch (err) {
  setMessage("❌ Failed to submit application.");
  console.error(err);
}

  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Apply for a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="text"
          name="jobId"
          placeholder="Job ID"
          value={formData.jobId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Application
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default ApplyJob;
