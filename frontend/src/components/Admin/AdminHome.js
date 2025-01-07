import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <Link to="/adduser">
          <button>Add User</button>
        </Link>
        <Link to="/deleteuser">
          <button>Delete User</button>
        </Link>
        <Link to="/updateuser">
          <button>Update User</button>
        </Link>
        <Link to="/viewallusers">
          <button>View All Users</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminHome;
