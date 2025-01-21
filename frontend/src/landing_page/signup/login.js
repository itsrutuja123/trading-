import React, { useState } from "react";
import axios from "axios";
//import "./signup.css"; // Import the styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await axios.post("http://localhost:3002/api/auth/login", {
        email,
        password,
      });

      // Check if login was successful
      if (response.data.success) {
        alert("Login successful!");
        localStorage.setItem("token", response.data.token); // Save token to localStorage (or context)
        window.location.href = "/home"; // Redirect to home page after successful login
      } else {
        alert("Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed, please try again.");
    }
  };

  return (
    <div className="form_container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
