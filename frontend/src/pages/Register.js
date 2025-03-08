import React, { useState } from "react";
import axios from "axios";

const Register = ({ setIsLoggedIn }) => {  // ✅ Accept setIsLoggedIn as a prop
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/register", formData, {
        headers: { "Content-Type": "application/json" }
      });
      console.log("User registered:", res.data);
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
    }
  };
  return (
    <form onSubmit={handleRegister}>
      <input type="text" name="username" onChange={handleChange} placeholder="Username" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;


