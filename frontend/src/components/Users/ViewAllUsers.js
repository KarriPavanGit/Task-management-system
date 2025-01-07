import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users/viewall');
                setUsers(response.data);
            } catch (error) {
                alert('Error fetching users: ' + error.response.data);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>All Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.fullname} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewAllUsers;
