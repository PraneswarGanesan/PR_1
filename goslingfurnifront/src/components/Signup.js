// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SignupImg from '../assets/furni-8.jpeg';

function Signup({ onSignup }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (firstName.trim() === '' || lastName.trim() === '' || username.trim() === '' || password.trim() === '') {
      alert('Please fill in all the fields.');
      return;
    }

    const newUser = {
      firstName,
      lastName,
      username,
      email,
      password,
    };

    onSignup(newUser);

    // Redirect to the account page after successful signup
    navigate('/account');
  };

  return (
    <div className='Signup'>
      <div className='signup'>
        <div className='signup-compo'>
          <div className='signup-box'>
            <div className='signup-img'>
              <img src={SignupImg} alt='no-image'></img>
            </div>
            <div className='signup-form'>
              <h2>Signup</h2>
              <p className='textt-1'>Goslingfurni</p>
              <hr></hr>
              <form>
                <label>First Name</label>
                <TextField
                  id="outlined-basic"
                  placeholder=''
                  variant="outlined"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label>Last Name</label>
                <TextField
                  id="outlined-basic"
                  placeholder=''
                  variant="outlined"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label>User Name</label>
                <TextField
                  id="outlined-basic"
                  placeholder='User_012'
                  variant="outlined"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email</label>
                <TextField
                  id="outlined-basic"
                  type='email'
                  placeholder='example@gmail.com'
                  variant="outlined"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <TextField
                  id="outlined-basic"
                  type='password'
                  placeholder='123Abc#'
                  variant="outlined"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button id="button" variant="contained" onClick={handleSignup}>
                  Sign up
                </Button>
                <p className='message'>
                  Already have an account?{' '}
                  <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/login')}>
                    Login
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
