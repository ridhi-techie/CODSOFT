// client/src/pages/Register.js

import { useState } from "react";
import axios from "../api/axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


// inside handleSubmit
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("/auth/register", formData);
    alert("Registered Successfully");
    console.log(res.data);
  } catch (err) {
    console.error(err);
    alert("Registration Failed");
  }
};


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="candidate">Candidate</option>
          <option value="employer">Employer</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
