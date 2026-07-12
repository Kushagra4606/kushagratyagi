import React from 'react';
import { Mail, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">

        <div className="hero-photo-area">
          <div className="photo-placeholder">
            {/* Replace src with your photo path */}
            <span className="photo-initials">KT</span>
            <p className="photo-hint">Add your photo here</p>
          </div>
        </div>

        <div className="hero-text">
          <p className="hero-greeting mono">Hi, I'm</p>
          <h1 className="hero-name">Kushagra Tyagi</h1>
          <h2 className="hero-title">Software Engineer</h2>
          
          <p className="hero-desc">
            B.Tech Computer Science student building scalable systems with 
            Java, Spring Boot, and React. Focused on backend engineering, 
            system design, and distributed architectures.
          </p>

          <div className="hero-links">
            <a href="https://github.com/kushagratyagi" target="_blank" rel="noreferrer" className="hero-link-item">
              <GithubIcon size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/kushagratyagi" target="_blank" rel="noreferrer" className="hero-link-item">
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <a href="mailto:kushagra@example.com" className="hero-link-item">
              <Mail size={18} /> Email
            </a>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowDown size={16} />
            </a>
            <a href="#" className="btn-outline">
              Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
