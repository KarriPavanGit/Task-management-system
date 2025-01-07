import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fullname: '',
    phonenumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/admin/register', formData);
      if (response.status === 201) {
        alert('Registration successful');
      } else {
        alert(response.data.message || 'Registration failed');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);  // Displays specific error message from the backend
      } else {
        console.error('Error:', error);
        alert('An error occurred.');
      }
    }
  };
  
  

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={handleChange}
        />
        <br />
        <input
          type="tel"
          name="phonenumber"
          placeholder="Phone Number"
          value={formData.phonenumber}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
