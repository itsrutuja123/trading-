import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigate hook for routing
import './signup.css'; // Ensure the correct path to your CSS file

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // For displaying errors
  const [successMessage, setSuccessMessage] = useState(''); // For displaying success message
  const navigate = useNavigate(); // React Router navigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Simulate a successful signup process
    setSuccessMessage('Signup successful!');

    // Clear the error message if passwords match
    setError('');

    // Redirect to the dashboard after a brief delay
    setTimeout(() => {
      navigate('/dashboard'); // Redirect to /dashboard route where Dashboard.js is located
    }, 2000); // Delay of 2 seconds to show success message
  };

  return (
    <div className="page_wrapper">
      <div className="form_container">
        <h2>Signup</h2>

        {/* Display success or error message */}
        {successMessage && <div style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</div>}
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
