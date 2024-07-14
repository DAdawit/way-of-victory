/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// About.js
import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  const handlePlayClick = () => {
    setPlayState(true);
  };

  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="About" className='about-img' />
        <img src={play_icon} alt="Play" className='play-icon' onClick={handlePlayClick} />
      </div>
      <div className="about-right">
        <h3>ABOUT COLLEGE</h3>
        <h2>Create people who have God's image and likeness today</h2>
        <p>Way of Victory International Bible College Ministry was founded in 2021 by Mr. Dula Teshome and his wife. This college is a non-profit organization organized to fulfill the mission of our Lord Jesus Christ.</p>
        <p>This college is focused on advancing the evangelical mission of Christ in Ethiopia and other countries.</p>
        <p>Way of Victory International Bible College Ministry fully relies on prayers and financial support from all of its partners throughout the world.</p>
        <p>VISION - To see transformative leaders and ministers in the world who care for the church of God and protect it from false doctrine.</p>
        <p>MISSION
          - Fulfill the Great Commission according to the Word of God
          - Produce leaders and ministers for the Church of Jesus Christ
          - Teach the Word of God
        </p>
        <p>GOAL - Create people who have God's image and likeness</p>
      </div>
    </div>
  );
}

export default About;

