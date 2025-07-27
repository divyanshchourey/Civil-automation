import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker, faBars, faTimes, faHouse } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-v1">
      <div id="justify_mega" className="header">
        <div className="top-bar">
          <div className="uk-container uk-container-center uk-clearfix">
            <div className="uk-grid" style={{ alignItems: 'center' }}>
              <div className="uk-width-medium-4-10 uk-width-small-1-1 uk-width-1-1 set-width-3-10">
                <div className="logo brick-flex-box">
                  <div className="box-icon" style={{ fontSize: 48, color: '#f9bf0f' }}>
                    <FontAwesomeIcon icon={faHouse} />
                  </div>
                  <div className="company-name">
                    <h1 style={{ color: '#676767', fontWeight: 700, fontSize: '1.2rem', margin: 0, letterSpacing: 0 }}>ANUBHA CHOUHAN<br />ASSOCIATES PVT. LTD.</h1>
                  </div>
                </div>
              </div>
              <div className="uk-width-medium-6-10 uk-width-small-1-1 uk-width-1-1 set-width-7-10">
                <aside className="widget contact-top-header brick-widget-contact-header">
                  <div className="widget-contact">
                    <ul style={{ justifyContent: 'space-between', width: '100%' }}>
                      <li>
                        <div className="brick-flex-box">
                          <div className="box">
                            <div className="box-icon" style={{ color: '#676767' }}>
                              <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="box-text">
                              <h5 style={{ color: '#676767', fontWeight: 700 }}>EMAIL</h5>
                              <a href="mailto:aarushi@aarushiassociates.in">
                                <p style={{ color: '#676767' }}>anubah@anubhassociates.in</p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="brick-flex-box">
                          <div className="box">
                            <div className="box-icon" style={{ color: '#676767' }}>
                              <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="box-text">
                              <h5 style={{ color: '#676767', fontWeight: 700 }}>24/7 SUPPORT</h5>
                              <p style={{ color: '#676767' }}>(+91) 7997400028, (+91) 7997500028</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="brick-flex-box">
                          <div className="box">
                            <div className="box-icon" style={{ color: '#676767' }}>
                              <FontAwesomeIcon icon={faMapMarker} />
                            </div>
                            <div className="box-text">
                              <h5 style={{ color: '#f9bf0f', fontWeight: 700 }}>WE ARE HERE</h5>
                              <p style={{ color: '#676767' }}>Indore, Madhya Pradesh, India</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Restore navigation menu below info bar */}
      <nav className="main-navigation">
        <div className="uk-container uk-container-center">
          <div className="mobile-header">
            <Link to="/" className="mobile-logo">
              <FontAwesomeIcon icon={faHouse} style={{ fontSize: 28, color: '#f9bf0f' }} />
            </Link>
            <button className="mobile-menu-button" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </li>
              <li className="nav-item">
                <a href="https://www.aarushiassociates.in/" className="nav-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Our Associates</a>
              </li>
              <li className="nav-item">
                <Link to="/wow-space" className="nav-link" onClick={() => setIsMenuOpen(false)}>Wow Space</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 