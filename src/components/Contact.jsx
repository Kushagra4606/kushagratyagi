import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title fade-on-scroll">Let's Connect</h2>
        <p className="contact-subtitle fade-on-scroll">
          Open to full-time roles, internships, and engineering collaborations.
        </p>

        <div className="contact-links fade-on-scroll">
          <a href="mailto:kushagra@example.com" className="contact-row">
            <Mail size={18} />
            <span>kushagra@example.com</span>
            <ArrowUpRight size={14} className="contact-arrow" />
          </a>
          <a href="https://linkedin.com/in/kushagratyagi" target="_blank" rel="noreferrer" className="contact-row">
            <LinkedinIcon size={18} />
            <span>linkedin.com/in/kushagratyagi</span>
            <ArrowUpRight size={14} className="contact-arrow" />
          </a>
          <a href="https://github.com/kushagratyagi" target="_blank" rel="noreferrer" className="contact-row">
            <GithubIcon size={18} />
            <span>github.com/kushagratyagi</span>
            <ArrowUpRight size={14} className="contact-arrow" />
          </a>
        </div>

        <footer className="site-footer">
          <p>Kushagra Tyagi &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
