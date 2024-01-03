import React from 'react';
import '../styles/Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Button from '@mui/material/Button';
import Furni14 from '../assets/furni-14.jpg';
import Furni16 from '../assets/furni-16.jpg';
import Furni17 from '../assets/furni-17.jpg';

const Home = () => {
  return (
    <div className='Home'>
      <div className='home'>
        <div className='home-content'>
          <div className='homecon'>
            <Navbar className="nav-homeside" />

            {/* Parallax Container for Image 1 */}
            <div className="parallax-container">
              <div
                className="parallax-image"
                style={{ backgroundImage: `url(${Furni14})` }}
              >
                <div className='hero-1'>
                  <span className='img-text'>Goslingfurni
                  <div className='buttonhero-1'>
               <p>
                <Link to='/products'>
                  Explore<KeyboardDoubleArrowRightIcon />
                </Link>
                </p>
               </div>
                  <div className='line-1'></div>
                  <div className='line-3'></div>
                  </span>
                </div>
              </div>
            </div>


            {/* Content-1 */}
            <div className='Content-1'>
              <div className='hero-img-1'>
                  <img src={Furni17}></img>
              </div>
              <div className='hero-text-content'>
                <h4> Welcome to </h4>
                <h2 className='hero-text-heading'>Goslingfurni </h2>
                <p className='hero-text'>
                Explore our wide range of high-quality furniture and decor. Find the perfect       furnishings for your home that blend style and comfort seamlessly. Whether you're looking for modern designs or classic pieces, Goslingfurni has something for every taste and lifestyle.
                </p>
               <div className='buttonhero'>
               <p>
                <Link to='/products'>
                <Button className='explore-button' style={{ border: '2px solid rgb(248, 227, 200)', color: 'white', backgroundColor: 'transparent' }}>
                  Explore<KeyboardDoubleArrowRightIcon />
                </Button>
                </Link>
                </p>
               </div>
              </div>
            </div>

            {/* Parallax Container for Image 2 */}
            <div className="parallax-container">
              <div
                className="parallax-image"
                style={{ backgroundImage: `url(${Furni16})` }}
              >   <div className='hero-1'>
              <span className='img-text-2'>Be the Real You 
             <div className='line-2'>

             </div>
              </span>
              
            </div>
                {/* Content for the second parallax image if needed */}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
