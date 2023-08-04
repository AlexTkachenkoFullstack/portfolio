import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook} from 'react-icons/bi';
import { AiFillProfile } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <>
      <nav>
        <a
          href="#top"
          onClick={() => setActiveNav('#top')}
          className={activeNav === '#top' ? 'active' : ''}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          <BiBook />
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav('#portfolio')}
          className={activeNav === '#portfolio' ? 'active' : ''}
        >
          <AiFillProfile />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <BiSolidContact />
        </a>
      </nav>
    </>
  );
};

export default Nav;
