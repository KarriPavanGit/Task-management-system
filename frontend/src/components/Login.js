import axios from 'axios';

const handleLogin = async (email, password) => {
    try {
        const response = await axios.post('/login', { email, password });
        const { token,message } = response.data;
        localStorage.setItem('token', token);  
        alert(message);
    } catch (error) {
        alert(error.response?.data || 'Login failed');
    }
};
