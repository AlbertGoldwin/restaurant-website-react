import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    var lastScrollTop;
    const navbar = document.querySelector('.app__navbar');
    const navbarHeight = navbar.scrollHeight;
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = `-${navbarHeight}px`;
      } else {
        navbar.style.top = '0';
      }
      lastScrollTop = scrollTop;

      if (scrollTop > navbarHeight) {
        navbar.style.borderBottom = '1px solid var(--color-crimson)';
      } else {
        navbar.style.borderBottom = 'none';
      }
    });
  }, []);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__cormorant">
          <a href="#home">Home</a>
        </li>
        <li className="p__cormorant">
          <a href="#about">About</a>
        </li>
        <li className="p__cormorant">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__cormorant">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__cormorant">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div></div>
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="fff"
          fontSize={27}
          onClick={() => setOpenMenu(true)}
        />
        {openMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setOpenMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__cormorant">
                <a href="#home" onClick={() => setOpenMenu(false)}>
                  Home
                </a>
              </li>
              <li className="p__cormorant">
                <a href="#about" onClick={() => setOpenMenu(false)}>
                  About
                </a>
              </li>
              <li className="p__cormorant">
                <a href="#menu" onClick={() => setOpenMenu(false)}>
                  Menu
                </a>
              </li>
              <li className="p__cormorant">
                <a href="#awards" onClick={() => setOpenMenu(false)}>
                  Awards
                </a>
              </li>
              <li className="p__cormorant">
                <a href="#contact" onClick={() => setOpenMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
