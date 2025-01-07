import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate=useNavigate();
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            const { token, message } = response.data;
            sessionStorage.setItem('token', token);
            alert(message);
            if(message=='Login successful'){
                navigate('/adminhome')
            }
        } catch (error) {
            alert(error.response?.data || 'Login failed');
        }
    };

    return (
        <div style={{ width: '300px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Login</h2>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" 
                    required
                    style={{ width: '100%', padding: '8px', margin: '8px 0' }}
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter your password" 
                    required
                    style={{ width: '100%', padding: '8px', margin: '8px 0' }}
                />
            </div>
            <button onClick={handleLogin} style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
                Login
            </button>
        </div>
    );
};

export default Login;
