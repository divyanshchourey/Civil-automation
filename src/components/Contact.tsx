import React, { useState } from 'react';
import Particles from './Particles';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log('Server response:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-header-section">
        <div className="contact-header-bg">
          <div className="contact-header-content">
            <h1 className="contact-title">CONTACT</h1>
            <div className="contact-breadcrumb">
              <span>Home</span> <span className="contact-breadcrumb-sep">/</span> <span>Contact</span>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-particles-section">
        <Particles />
        <div className="contact-form-glass">
          <h2 className="contact-form-title">Get In Touch</h2>
          <p className="contact-form-subtitle">We are always here for you! 24/7 Support</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label htmlFor="name">Name <span className="required">*</span></label>
              <input type="text" id="name" name="name" required autoComplete="off" value={form.name} onChange={handleChange} />
            </div>
            <div className="contact-form-row">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input type="email" id="email" name="email" required autoComplete="off" value={form.email} onChange={handleChange} />
            </div>
            <div className="contact-form-row">
              <label htmlFor="message">Message <span className="required">*</span></label>
              <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} />
            </div>
            <div className="contact-form-row">
              <button type="submit" className="contact-form-submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
            </div>
            <div className="contact-form-note">Fields marked with an <span className="required">*</span> are required</div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact; 