import React from 'react';
import OurWorks from './OurWorks';
import '../styles/Portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-page">
      <section className="portfolio-header-section">
        <div className="portfolio-header-bg">
          <div className="portfolio-header-content">
            <h1 className="portfolio-title">PORTFOLIO SLIDER</h1>
            <div className="portfolio-breadcrumb">
              <span>Home</span> <span className="portfolio-breadcrumb-sep">/</span> <span>Portfolio Slider</span>
            </div>
          </div>
        </div>
      </section>
      <OurWorks />
    </div>
  );
};

export default Portfolio; 