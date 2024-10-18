import React from 'react';
import Hero from '../hero/Hero';
import about from '../../assets/abt.jpeg';
import cardImg from '../../assets/about.jpg'
import './About.css';

const About = () => {
  return (
    <>
    <Hero
    image = {about}
    title = "ABOUT US"
    btnClassname = "hide"
    />
    <div className='about'>
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
            <img src={cardImg} alt="" />
        </div>
      </div>
      <div className="about-right">
        <>
            <h1 className='about-title'>About Us</h1>
            <p className='about-description'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
        </>
      </div>
      </div>
    </>
  )
}

export default About
