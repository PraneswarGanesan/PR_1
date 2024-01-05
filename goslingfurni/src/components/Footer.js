import React from 'react';
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const HomeFooter = () => {
  return (
    <div>
      <footer>
        <p>&copy; 2023 Goslingfurni. All rights reserved.</p>
        <div className="footer-content">
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
          </div>
          <div className="contact-info">
            <p><PhoneIcon /> Contact: +1 123 456 7890</p>
            <p><EmailIcon /> Email: info@goslingfurni.com</p>
            <p><LockIcon /> <a href="/privacy-policy">Privacy Policy</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeFooter;
