import React from 'react';
import { Award, Code, Map } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="section achievements-section">
      <div className="container">
        <h2 className="section-title fade-on-scroll">Achievements</h2>
        
        <div className="achievements-list">
          <div className="achievement-item fade-on-scroll" style={{transitionDelay: '0ms'}}>
            <div className="achievement-icon">
              <Code size={20} />
            </div>
            <div className="achievement-content">
              <h4 className="achievement-title">300+ LeetCode Problems Solved</h4>
              <p className="achievement-desc">Consistent practice in Data Structures and Algorithms.</p>
            </div>
          </div>

          <div className="achievement-item fade-on-scroll" style={{transitionDelay: '100ms'}}>
            <div className="achievement-icon">
              <Map size={20} />
            </div>
            <div className="achievement-content">
              <h4 className="achievement-title">Striver A2Z DSA Roadmap</h4>
              <p className="achievement-desc">Following comprehensive roadmap for algorithmic problem solving.</p>
            </div>
          </div>

          <div className="achievement-item fade-on-scroll" style={{transitionDelay: '200ms'}}>
            <div className="achievement-icon">
              <Award size={20} />
            </div>
            <div className="achievement-content">
              <h4 className="achievement-title">GSOC 2026 Proposal Submitted</h4>
              <p className="achievement-desc">For CodeLabz under C2SI (Computational Science Initiative).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
