import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100032110643148">
          <FaFacebookF />
        </a>
        <a href="https://api.whatsapp.com/send?phone+380637173812">
          <BsWhatsapp />
        </a>
        <a href="http://t.me/alex_goltf">
          <FaTelegramPlane />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Oleksandr Tkachenko. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
