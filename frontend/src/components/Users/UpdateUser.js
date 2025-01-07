import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
    const [formData, setFormData] = useState({
        email: '',
        fullname: '',
        password: ''
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
            const response = await axios.put('http://localhost:5000/users/update', formData);
            alert('User updated successfully');
            setFormData({ email: '', fullname: '', password: '' });
        } catch (error) {
            alert('Error updating user: ' + error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Full Name" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <button type="submit">Update User</button>
        </form>
    );
};

export default UpdateUser;
