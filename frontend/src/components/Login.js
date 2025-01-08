import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import '../styles/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            const { token, message } = response.data;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('email', email);
            alert(message);
            if (message === 'Login successful') {
                navigate('/adminhome');
            }
        } catch (error) {
            alert(error.response?.data || 'Login failed');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div className="input-group">
                    <FaEnvelope className="icon" />
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter your email" 
                        required 
                    />
                </div>
                <div className="input-group">
                    <FaLock className="icon" />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter your password" 
                        required 
                    />
                </div>
                <button type="submit" className="submit-btn">
                    <FaSignInAlt /> Login
                </button>
            </form>
        </div>
    );
};

export default Login;
