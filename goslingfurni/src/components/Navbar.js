// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ user }) => {
  return (
    <nav className="nav">
      <div className="nleft">
        <Link id="nlinks" to="/">Home</Link>
        <Link id="nlinks" to="/pricing">Pricing</Link>
        <Link id="nlinks" to="/products" className='current'>Products</Link>
      </div>
      <Link id="nlinks" className="centertag" to="/">
        GoslingFurni
      </Link>
      <div id="nlinks" className="nrigth">
      <div className="user-info">
        {user ? (
          <>
            <span id="username">{user.username}</span>
            <Link id="nlinks" to="/login">Logout</Link>
          </>
        ) : (
          <>
            <Link id="nlinks" to="/login">Login</Link>
            <Link id="nlinks" to="/signup">Signup</Link>
          </>
        )}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
