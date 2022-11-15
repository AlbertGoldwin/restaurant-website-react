import React from 'react';
import MenuItem from '../../components/Menuitem/MenuItem';
import SubHeading from '../../components/SubHeading/SubHeading';

import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__menu flex__center section__padding" id="menu">
    <div className="app__menu-title">
      <SubHeading title="Menu That Fits Your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__menu-content">
      <div className="app__menu-content_left flex__center">
        <p className="app__menu-content_heading">Wine & Beer</p>
        <div className="app__menu-content_items">
          {data.wines.map((wine, i) => (
            <MenuItem key={i} item={wine} />
          ))}
        </div>
      </div>

      <div className="app__menu-content_img">
        <img src={images.menu} alt="menu_img" loading="lazy" />
      </div>

      <div className="app__menu-content_right flex__center">
        <p className="app__menu-content_heading">Wine & Beer</p>
        <div className="app__menu-content_items">
          {data.cocktails.map((wine, i) => (
            <MenuItem key={i} item={wine} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: '1rem' }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
