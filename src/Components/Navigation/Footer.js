import React from 'react';
import "../../styles/Footer.scss";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';

function Footer() {
  return (
    <div style={{ background: '#242424' }}>
      <Container maxWidth="xl">
        <div className='footer-wrapper'>
          <div className='footer-links'>
            <div className='footer-link-items'>
              <h2>Contact Us</h2>
              <a href="tel:9987585976">
                <CallIcon /> +91 9987585976
              </a>
              <a href="mailto:parshv83jain@gmail.com?subject=Inquiry%20about%20Dinesh%20Industries'%20Products%20&body=Hi Paresh, %0D%0A%0D%0A">
                <EmailIcon /> parshv83jain@gmail.com
              </a>
              <a href="//api.whatsapp.com/send?phone=919987585976&text=https://www.shubhamcomputers.com/%0A%0AI'm interested in your products and I have a few questions. Can you help?" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> WhatsApp
              </a>
              <a href="https://m.facebook.com/1171466706257889/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />Facebook
              </a>
            </div>
          </div>
          <div className='footer-links'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                <img className="branding-logo" src={Logo} alt="logo" />
                Dinesh Industries
              </Link>
            </div>
            <div>
              Copyright © 2015-<span>{new Date().getFullYear()}</span>
              <div style={{ marginTop: '8px' }}>All rights reserved</div>
            </div>
          </div>
          <Fab color="success" component="a" href="//api.whatsapp.com/send?phone=919987585976&text=https://www.shubhamcomputers.com/%0A%0AI'm interested in your products and I have a few questions. Can you help?" aria-label="WhatsApp" className="fabButton" target="_blank">
        <WhatsAppIcon />
      </Fab>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(Footer);