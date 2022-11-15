import React from 'react';

import './MenuItem.css';

const MenuItem = ({ item }) => (
  <div className="app__menuItem">
    <div className="app__menuItem-head">
      <p className="app__menuItem-name p__cormorant">{item.title}</p>
      <div className="app__menuItem-dash"></div>
      <p className="app__menuItem-price p__cormorant">{item.price}</p>
    </div>
    <div className="app__menuItem-sub">
      <p className="p__opensans">{item.tags}</p>
    </div>
  </div>
);

export default MenuItem;
