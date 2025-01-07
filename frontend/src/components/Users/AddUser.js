import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
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
        <form onSubmit={handleSubmit}>
            <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Full Name" required />
            <input type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} placeholder="Phone Number" required />
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;
