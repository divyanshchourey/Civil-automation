import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Anubha Chouhan Associates Pvt. Ltd. All rights reserved.</p>
      <p>Designed with <span style={{color: 'red'}}>&hearts;</span> by the ACA Team</p>
    </div>
  </footer>
);

export default Footer; 