import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2 className="section-title fade-on-scroll">Get in Touch</h2>
        <p className="contact-subtitle fade-on-scroll">
          Open to full-time roles, internships, and interesting engineering collaborations.
        </p>

        <div className="contact-grid fade-on-scroll">
          <a href="mailto:kushagra@example.com" className="contact-card glass-panel">
            <div className="contact-icon-wrap">
              <Mail size={22} />
            </div>
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <span className="contact-value">kushagra@example.com</span>
            </div>
            <ArrowUpRight size={16} className="contact-arrow" />
          </a>

          <a href="https://linkedin.com/in/kushagratyagi" target="_blank" rel="noreferrer" className="contact-card glass-panel">
            <div className="contact-icon-wrap">
              <LinkedinIcon size={22} />
            </div>
            <div className="contact-info">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/kushagratyagi</span>
            </div>
            <ArrowUpRight size={16} className="contact-arrow" />
          </a>

          <a href="https://github.com/kushagratyagi" target="_blank" rel="noreferrer" className="contact-card glass-panel">
            <div className="contact-icon-wrap">
              <GithubIcon size={22} />
            </div>
            <div className="contact-info">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/kushagratyagi</span>
            </div>
            <ArrowUpRight size={16} className="contact-arrow" />
          </a>
        </div>

        <footer className="site-footer">
          <p>Designed & Built by Kushagra Tyagi &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
