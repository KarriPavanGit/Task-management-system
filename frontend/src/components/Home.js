import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to Task Management System</h1>
      <p>Organize your tasks and take detailed notes efficiently.</p>
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => navigate('/home')}
          style={{
            margin: '10px',
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Home
        </button>
        <button 
          onClick={() => navigate('/register')}
          style={{
            margin: '10px',
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Register
        </button>
        <button 
          onClick={() => navigate('/login')}
          style={{
            margin: '10px',
            padding: '10px 20px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
        <button 
          onClick={() => navigate('/about')}
          style={{
            margin: '10px',
            padding: '10px 20px',
            backgroundColor: '#FF5722',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          About
        </button>
      </div>
    </div>
  );
}

export default Home;
