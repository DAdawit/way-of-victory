/* eslint-disable no-unused-vars */
import React from 'react'
import './College.css'
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_5 from '../../assets/gallery-5.png';
import gallery_6 from '../../assets/gallery-6.png';
import gallery_7 from '../../assets/gallery-7.png';
import white_arrow from '../../assets/white-arrow.png'
const College = () => {
  return (
    <div className='college'>
      <div className="heading-paragraph">
      </div>
      <div className="gallery">
      <img src={gallery_1} alt=""/>
      <img src={gallery_2} alt=""/>
      <img src={gallery_3} alt=""/>
      <img src={gallery_5} alt=""/>
      <img src={gallery_6} alt=""/>
      <img src={gallery_7} alt=""/>
      </div>
      <button className='btn dark-btn'>See more here<img src={white_arrow} alt=""/></button>
    </div>
   );
}

export default College
