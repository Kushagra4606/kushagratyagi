import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="section education-section">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title fade-on-scroll">Academic Background</h2>
        
        <div className="edu-card fade-on-scroll">
          <div className="edu-main">
            <h3 className="edu-degree">B.Tech Computer Science</h3>
            <p className="edu-school">Noida Institute of Engineering and Technology</p>
          </div>
          <div className="edu-meta">
            <span className="edu-year mono">2024 — 2028</span>
            <span className="edu-gpa mono">CGPA: 7.7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
