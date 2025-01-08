import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTasks, FaUserPlus, FaSignInAlt, FaInfoCircle } from 'react-icons/fa'; // FontAwesome icons
import '../styles/home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Task Management System</h1>
      <p className="intro-text">Organize your tasks and take detailed notes efficiently.</p>

      {/* Icons Section */}
      <div className="icon-container">
        <div>
          <FaTasks className="icon" />
          <h2>Manage Tasks</h2>
          <p>Stay on top of your tasks with ease.</p>
        </div>
        <div>
          <FaUserPlus className="icon" />
          <h2>Register</h2>
          <p>Create your account and start managing tasks.</p>
        </div>
        <div>
          <FaSignInAlt className="icon" />
          <h2>Login</h2>
          <p>Access your account and track your progress.</p>
        </div>
        <div>
          <FaInfoCircle className="icon" />
          <h2>About</h2>
          <p>Learn more about our task management system.</p>
        </div>
      </div>

      {/* Button Section */}
      <div className="button-container">
        <button className="home-btn" onClick={() => navigate('/home')}>Home</button>
        <button className="register-btn" onClick={() => navigate('/register')}>Register</button>
        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
        <button className="about-btn" onClick={() => navigate('/about')}>About</button>
      </div>
    </div>
  );
}

export default Home;
