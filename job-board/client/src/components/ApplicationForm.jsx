import React, { useState } from "react";
import axios from "axios";

const ApplicationForm = ({ jobId }) => {
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      setMessage("Please upload your resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);

    try {
      const token = localStorage.getItem("token"); // User must be logged in

      const res = await axios.post(
        `http://localhost:5000/api/apply/${jobId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Application submitted successfully!");
    } catch (err) {
      setMessage("Error submitting application.");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label>Upload Resume (PDF):</label>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button type="submit">Apply</button>
      <p>{message}</p>
    </form>
  );
};

export default ApplicationForm;
