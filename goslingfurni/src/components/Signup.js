import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';
import Ryan from '../assets/furni-8.jpeg';


const Signup = ({ onSignup, onNavigateToLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (firstName.trim() === '' || lastName.trim() === '' || username.trim() === ''|| password.trim() === '') {
      alert('Please fill in all the fields.');
      return;
    }

    const newUser = {
      firstName,
      lastName,
      username,
      email,
    };

    onSignup(newUser);
    navigate('/');
  };

  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className='container'>
      <div className='signup'>
        <form>
          <h1>Signup Page</h1>
          <hr />
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" onClick={handleSignup}>
            Signup
          </button>
          <p>
            Already have an account?{' '}
            <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleNavigateToLogin}>
              Login
            </span>
          </p>
        </form>
      </div>
      <div className='pic'>
        <img src={Ryan} alt="Your Alt Text" />
      </div>
    </div>
  );
};

export default Signup;
