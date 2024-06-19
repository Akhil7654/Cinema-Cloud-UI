import React from 'react';
import "./style.scss"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import ContentWrapper from '../contentWrapper/ContentWrapper';

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="footerContent">
          {/* <div className="footerLogo">
            <img src="/Cinema-cloud-logo.png" alt="CinemaCloud Logo" />
          </div> */}
          <div className="footerLinks">
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div className="footerSocials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="footerCopyright">
            &copy; {new Date().getFullYear()} CinemaCloud. All rights reserved.
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
