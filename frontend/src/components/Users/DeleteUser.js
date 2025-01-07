import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
    const [email, setEmail] = useState('');

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/users/delete/${email}`);
            alert('User deleted successfully');
            setEmail('');
        } catch (error) {
            alert('Error deleting user: ' + error.response.data);
        }
    };

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email to delete" required />
            <button onClick={handleDelete}>Delete User</button>
        </div>
    );
};

export default DeleteUser;
