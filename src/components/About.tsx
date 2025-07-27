import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-header-section">
        <div className="about-header-bg">
          <div className="about-header-content">
            <h1 className="about-title">ABOUT US</h1>
            <div className="about-breadcrumb">
              <span>Home</span> <span className="about-breadcrumb-sep">/</span> <span>About Us</span>
            </div>
          </div>
        </div>
      </section>
      <section className="about-main-section">
        <div className="about-main-container">
          <p className="about-subtitle">We Are Awesome</p>
          <h2 className="about-main-title">WHO WE ARE</h2>
          <p className="about-main-lead"><b>Anubha Chouhan Associates : We build most advanced structure for You. Thinking about your home think us.</b></p>
          <p className="about-main-desc">Anubha Chouhan Associates is an architecture design studio based in Indore, India.</p>
          <p className="about-main-desc">Our strength lies in innovative conceptual thinking backed by demonstrated experience, skills and technical expertise to competently translate ideas into reality. The diverse nature, in building type, scale and geographic location, of commissions secured over the past 21 years gives us a distinct professional versatility.</p>
        </div>
      </section>
    </div>
  );
};

export default About; 