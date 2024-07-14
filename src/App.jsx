/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import College from './Components/College/College';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {
  const [playState, setPlayState] = useState(false);

return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='WHAT WE OFFER' />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='College photos' />
        <College />
        <Title subTitle='Testimonials' title='What student says' />
        <Testimonials />
        <Title subTitle="Contact us" title="Get in touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div> 
  );
};

export default App;