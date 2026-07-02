import React from 'react';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section className="section education-section">
      <div className="container">
        <h2 className="section-title fade-on-scroll">Education</h2>
        
        <div className="edu-card glass-panel fade-on-scroll">
          <div className="edu-header">
            <div className="edu-title-group">
              <GraduationCap size={24} className="text-blue" />
              <div>
                <h3 className="edu-degree">B.Tech Computer Science</h3>
                <h4 className="edu-school">Noida Institute of Engineering and Technology</h4>
              </div>
            </div>
            <div className="edu-meta">
              <span className="edu-year">2024 - 2028</span>
              <span className="edu-gpa badge">CGPA: 7.7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
