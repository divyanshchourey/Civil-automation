import React from 'react';
import '../styles/FeatureHighlights.css';

interface Feature {
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    title: 'BUILD THE DREAMS',
    desc: 'We understand your needs and handhold to build your dream home or office. We believe in walking with you in your journey to deliver excellence and satisfaction',
  },
  {
    title: 'GET THE BEST SERVICES',
    desc: 'We are complete solution provider which can build your dream project from scratch. Hire us and handover your responsibilities rest we will take care off.',
  },
  {
    title: 'ALWAYS LEADING',
    desc: 'We are leading service provider in architectural, structural and interior designing and development. With more than 100 project in our belt you can easily trust on us.',
  },
];

const FeatureHighlights: React.FC = () => (
  <section className="feature-highlights-section">
    <div className="feature-highlights-container">
      <div className="feature-highlights-image">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Engineering"/>
      </div>
      <div className="feature-highlights-content">
        {features.map((f, i) => (
          <div className="feature-highlight-block" key={i}>
            <div>
              <div className="feature-highlight-title">{f.title}</div>
              <div className="feature-highlight-desc">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureHighlights; 