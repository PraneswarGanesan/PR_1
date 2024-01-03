// Navbar.js
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import '../styles/Navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div>
        <div className='Navbar'>
            <div className='nav-content'>
                <div className='nav-left'>
                    <ul>
                     <Link to="/home"> <li>Home</li></Link>
                      <Link to="/products"><li>Products</li></Link>
                      <Link to="/about-us"><li>About</li></Link>
                    </ul>   
                </div>
                <div className='nav-center'>
                     <Link to="/about"> <p>Goslingfurni</p></Link>
                </div>
                <div className='nav-rigth'>
                  <div className='nav-icons'>
                    <Link to="/carts"><ShoppingCartIcon /></Link>
                    <Link to="/account"> <AccountCircleIcon /></Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
