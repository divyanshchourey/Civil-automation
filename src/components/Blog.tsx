import React from 'react';
import '../styles/Blog.css';

const Blog: React.FC = () => {
  return (
    <div className="blog-page">
      <section className="blog-header-section">
        <div className="blog-header-bg">
          <div className="blog-header-content">
            <h1 className="blog-title">BLOG</h1>
            <div className="blog-breadcrumb">
              <span>Home</span> <span className="blog-breadcrumb-sep">/</span> <span>Blog</span>
            </div>
          </div>
        </div>
      </section>
      <div className="blog-content-container">
        <main className="blog-main-content">
          <article className="blog-post">
            <h2 className="blog-post-title">My Thoughts On Upcoming Resort Project On Hillocks</h2>
            <div className="blog-post-meta">
              <span>November 8, 2017</span>
              <span className="blog-post-meta-sep">|</span>
              <span className="blog-post-categories">
                <span className="blog-post-category">Architectural, Building, Landscaping, Project Planning, Topographical Survey</span>
              </span>
            </div>
            <p className="blog-post-summary">
              Between too Little and too Much It seems to be raining perpetually, I thought to myself. We were at the lambasingi village junction enjoying our morning tea with bun and jam. I clearly recall the last time I saw the site. Sun was lost in translation between twilight and dusk. I manage to see the [&hellip;]
            </p>
            <a className="blog-post-readmore" href="#">Read more</a>
            <div className="blog-post-image-wrapper">
              <img className="blog-post-image" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Blog Post" />
            </div>
          </article>
        </main>
        <aside className="blog-sidebar">
          <section className="blog-about-box">
            <h3 className="blog-about-title">About The Brick</h3>
            <p className="blog-about-desc">
              Vestibulum nunc justo, hendre et pretium sed, tempus eu duiirt. Nullam quis dui a nibh aliquet consequat. Sed sodales velit ac lacus viverra blandit. In hac habitasse platea dictumst.
            </p>
          </section>
          <section className="blog-recent-projects">
            <h3 className="blog-recent-title">Recent Projects</h3>
            <ul className="blog-recent-list">
              <li>WOWSpace : WorkSpace For Women</li>
              <li>Sangeeta Bishnoi's Apartment</li>
              <li>Deepak Soni's residence at Indore</li>
              <li>Conceptual plan for pipariya residence</li>
              <li>COMPLEX MULTIPLEX & MALL PROJECT COMING UP AT SHAHOL(MP)</li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Blog; 