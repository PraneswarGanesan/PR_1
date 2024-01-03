import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Account.css';
import Furni10 from '../assets/furni-10.jpeg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Account = ({ user, onUpdateUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedUsername, setEditedUsername] = useState(user?.username || '');
  const [editedPassword, setEditedPassword] = useState(user?.password || '');
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveChanges = () => {
    onUpdateUser({
      ...user,
      username: editedUsername,
      password: editedPassword,
    });
    setEditMode(false);
  };

  const handleLogout = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  };

  const handleConfirmLogout = () => {
    setOpenLogoutDialog(false);
    onUpdateUser(null);
    setEditMode(false); 
    setEditedUsername(''); 
    setEditedPassword('');
  };

  return (
    <div className='Account'>
      <Navbar />
      <div className='account'>
        <div className='Account-heading'>
          {user ? (
            <div className='acc-head'>
              <h1>Welcome {user.username}</h1>
              <Button onClick={handleLogout} startIcon={<ExitToAppIcon />}>
                Logout
              </Button>
              <div className='welcome-img'>
                <img src={Furni10} alt='no-image'></img>
                </div>
            </div>
          ) : (
            <>
              <h1 className='welcome-text'>Welcome Guest</h1>
              <p id='query-text'>Would you like to&nbsp;
                <Link to='/signup'>signup</Link>&nbsp;
                or&nbsp;
                <Link to='/login'>login</Link>?
              </p>
              <div className='welcome-img'>
                <img src={Furni10} alt='no-image'></img>
                </div>
            </>
          )}
        </div>
        {user && (
          <div className='Account-box'>
            
            {editMode ? (
              <div className='center-box'>
                <form>

                <ul> 
                    <li><TextField
                  value={editedUsername}
                  onChange={(e) => setEditedUsername(e.target.value)}
                  label="Username" id='lol-textt-1'
                /></li>
                <li>
                <TextField
                  type='password'
                  value={editedPassword}
                  onChange={(e) => setEditedPassword(e.target.value)}
                  label="Password"
                />
                </li>
                <li>
                <Button variant="contained" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
                </li>
                </ul>
                </form>
                <div className='security-info'>
  <h2>Security Information</h2>
  <p>
    Ensuring the security of your account is our top priority. Here are some tips to help you maintain a secure account:
  </p>
  <ul>
    <li>
      <strong>Use a Strong Password:</strong> Choose a password that is unique, combining letters, numbers, and symbols.
    </li>
    <li>
      <strong>Enable Two-Factor Authentication (2FA):</strong> Add an extra layer of protection to your account with 2FA.
    </li>
    <li>
      <strong>Regularly Update Your Password:</strong> Change your password periodically to enhance security.
    </li>
  </ul>
</div>
                
               
                
              </div>
            ) : (
              <div className='center-box'>
                   
                <ul>
                <li><PermIdentityIcon id='chnagelh'/></li>
                <li>Username: {user.username || 'N/A'}</li>
                <li>Password: {user.password? '*hidden*': 'N/A'}</li>
                <li>
                <Button onClick={handleEditClick} variant="outlined" id='chnage'>
                  Edit
                </Button>
                </li>
                </ul>
                <div className='security-info'>
  <h2>Security Information</h2>
  <p>
    Ensuring the security of your account is our top priority. Here are some tips to help you maintain a secure account:
  </p>
  <ul>
    <li>
      <strong>Use a Strong Password:</strong> Choose a password that is unique, combining letters, numbers, and symbols.
    </li>
    <li>
      <strong>Enable Two-Factor Authentication (2FA):</strong> Add an extra layer of protection to your account with 2FA.
    </li>
    <li>
      <strong>Regularly Update Your Password:</strong> Change your password periodically to enhance security.
    </li>
  </ul>
</div>

              </div>
            )}
          </div>
        )}
      </div>

      {/* Logout Dialog */}
      <Dialog open={openLogoutDialog} onClose={handleCloseLogoutDialog}>
        <DialogTitle>Logout</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to logout?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogoutDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmLogout} color="primary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>


      <Footer />
    </div>


  );
};

export default Account;