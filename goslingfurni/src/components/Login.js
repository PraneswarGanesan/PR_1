import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import Ryan from '../assets/furni-8.jpeg';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password.');
      return;
    }

    const user = {
      username,
    };

    onLogin(user);
    navigate('/');
  };
  const handleNavigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className='container'>
      <div className='login'>
        <form>
          <h1>Login GoslingFurni</h1>
          <hr />
          <p>Explore the World!</p>
          <label>Username</label>
          <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label>Email</label>
          <input type="text" placeholder="abc@exampl.com"/>
          <label>Password</label>
          <input type="password" placeholder="enter your password!" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <p>
          Don't have an account?{' '}
  <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleNavigateToSignup}>
    Signup
  </span>

          </p>
        </form>
      </div>
      <div className='pic'>
        <img src={Ryan} alt="Background" />
      </div>
    </div>
  );
};

export default Login;
  