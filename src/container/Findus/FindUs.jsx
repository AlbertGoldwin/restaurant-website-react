import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './FindUs.css';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant">Find Us</h1>
      <div className="app__findus-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p className="p__cormorant">Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 AM - 02:00 AM</p>
        <p className="p__opensans">Sat - Sun: 10:00 AM - 03:00 AM</p>
      </div>
      <button type="button" className="custom__button">
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
