import React from 'react';
import '../styles/WowSpace.css';

const WowSpace: React.FC = () => {
  return (
    <div className="wow-space-page">
      <section className="wow-space-header-section">
        <div className="wow-space-header-bg">
          <div className="wow-space-header-content">
            <h1 className="wow-space-title">WOW SPACE</h1>
            <div className="wow-space-breadcrumb">
              <span>Home</span> <span className="wow-space-breadcrumb-sep">/</span> <span>Wow Space</span>
            </div>
          </div>
        </div>
      </section>

      {/* WOW Space Main Content */}
      <section className="wow-space-main-section">
        <div className="wow-space-main-container">
        <p style={{ color: '#232b2b', fontSize: '1.1rem', marginBottom: '32px' }}>
            Being An Women Entrepreneur <b>Anubha Chouhan Associates</b> thought about the challenges which our aspiring Women who wants to be independent faces when they come to any new city or places.<br />
            They have to look for residential spaces, and also the workspace to start their own dream startup. They face a lot of issues to kickstart their vision being a lone fighter. To solve this issues Anubha Chouhan Associates Launched their new product venture WOWSpace for Women's.
          </p>
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="WOW Space Interior"
            style={{ width: '100%', maxWidth: '1200px', display: 'block', margin: '0 auto 32px auto', borderRadius: '8px' }}
          />
          

          <div style={{ margin: '40px 0 24px 0' }}>
            <b>What Is WOWSpace ?</b>
            <p style={{ margin: '12px 0 0 0' }}>
              It's a one of its kind co-working and co-living space dedicated only to serve women entrepreneurs. Here you can out your bags and start living without much fuss. We have covered everything which one women needs to start their venture.
            </p>
          </div>

          <div style={{ margin: '32px 0 24px 0' }}>
            <b>WOWSpace Salient Features :</b>
            <ul style={{ margin: '12px 0 0 20px', fontSize: '1.05rem' }}>
              <li>Fully Residential Workspace</li>
              <li>Kitchen To Self Cook</li>
              <li>Separate Work Terminals To Jump into your works</li>
              <li>Meeting Room</li>
              <li>Cafe Lounge for refreshment</li>
              <li>WiFi Zone</li>
              <li>Meetups Every weekends to encourage and inspire women entrepreneur.</li>
              <li>&amp; Many More…..</li>
            </ul>
          </div>

          <div style={{ margin: '32px 0 24px 0' }}>
            <b>Coming Soon:</b>
            <p style={{ margin: '12px 0 0 0' }}>
              We are launching our first Co-working space in Indore very soon. Till then you can mail your queries at : <a href="mailto:anubha@anubhaassociates.com">aarushi@aarushiassociates.com</a> . Our team will call you back and assist you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WowSpace; 