// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles/Login.css';
import LoginImg from '../assets/furni-8.jpeg';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Login({ onLogin }) {
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
      password,
    };

    onLogin(user);
    navigate('/account');
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className='login'>
      <div className='login-compo'>
        <div className='login-box'>
          <div className='login-img'>
            <img src={LoginImg} alt='no-image' />
          </div>
          <div className='login-form'>
            <h2>Login</h2>
            <p className='textt-1'>Goslingfurni</p>
            <hr id='hr123' />
            <form className='form'>
              <label id='label'>Username</label>
              <TextField
                id="outlined-basic"
                type='text'
                placeholder='username'
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label id='label'>Password</label>
              <TextField
                id="outlined-basic"
                type='password'
                placeholder='123Abc#'
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button id="button" variant="contained" onClick={handleLogin}>
                Login
              </Button>
              <p id='check-the-login'>
                New Customer?{' '}
                <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/signup')} id='check-the-signup'>
                  SignUp
                </span>
              </p>
              <p id='check-the-login'>
              <Button variant="outlined" onClick={handleClickOpen}>
        Forget Password?
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>reset</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Your email to reset your password
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Enter</Button>
        </DialogActions>
      </Dialog>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
