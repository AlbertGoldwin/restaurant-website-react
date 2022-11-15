import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="app__footer app__bg section__padding">
    <div className="app__newsletter">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <div className="newsletter-subscribe">
        <input
          type="email"
          placeholder="Your email address"
          className="p__cormorant"
        />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>

    <div className="footer-links">
      <div className="footer-links_contact">
        <h1 className="footer-headtext p__cormorant">Contact Us</h1>
        <p className="p__opensans">
          2715 Ash Dr. San Jose, South Dakota 834751
        </p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">
          "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
          Others."
        </p>
        <img
          style={{ marginTop: '0.5rem' }}
          src={images.spoon}
          class="spoon__img"
          alt="spoon"
        />
        <div className="footer-links_icons">
          <FaFacebookF className="icon" />
          <FiTwitter className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>

      <div className="footer-links_work">
        <h1 className="footer-headtext p__cormorant">Working Hours</h1>
        <p className="p__opensans">
          Monday-Friday: <span>08:00 AM - 12:00 AM</span>
        </p>
        <p className="p__opensans">
          Saturday-Sunday: <span>07:00 AM - 11:00 PM</span>
        </p>
      </div>
    </div>

    <div className="footer-copyright">
      <a
        className="p__cormorant"
        href="https://www.flaticon.com/free-icons/restaurant"
        target="_blank"
        title="restaurant icons"
      >
        Restaurant icons created by Freepik - Flaticon
      </a>
      <p className="p__cormorant">2022 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
