import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';

import { images, data } from '../../constants';
import './Laurels.css';

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels-awards">
        {data.awards.map((award, i) => (
          <div key={i} className="app__laurel-awards_item">
            <img src={award.imgUrl} alt={award.title} loading="lazy" />
            <div className="app__laurel-awards_item-content">
              <p className="p__cormorant">{award.title}</p>
              <p className="p__opensans">{award.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
