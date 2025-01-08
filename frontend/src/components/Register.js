import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaUserPlus } from 'react-icons/fa';
import '../styles/register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        fullname: '',
        phonenumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/users/add', formData);
            alert('User added successfully');
            setFormData({
                username: '',
                email: '',
                password: '',
                fullname: '',
                phonenumber: ''
            });
        } catch (error) {
            alert('Error adding user: ' + error.response.data);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <FaUser className="icon" />
                    <input 
                        type="text" 
                        name="fullname" 
                        value={formData.fullname} 
                        onChange={handleChange} 
                        placeholder="Full Name" 
                        required 
                    />
                </div>
                <div className="input-group">
                    <FaPhone className="icon" />
                    <input 
                        type="text" 
                        name="phonenumber" 
                        value={formData.phonenumber} 
                        onChange={handleChange} 
                        placeholder="Phone Number" 
                        required 
                    />
                </div>
                <div className="input-group">
                    <FaUser className="icon" />
                    <input 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        placeholder="Username" 
                        required 
                    />
                </div>
                <div className="input-group">
                    <FaEnvelope className="icon" />
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Email" 
                        required 
                    />
                </div>
                <div className="input-group">
                    <FaLock className="icon" />
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        placeholder="Password" 
                        required 
                    />
                </div>
                <button type="submit" className="submit-btn"><FaUserPlus /> Register</button>
            </form>
        </div>
    );
};

export default Register;
