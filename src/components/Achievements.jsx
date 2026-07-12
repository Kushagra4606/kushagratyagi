import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const items = [
    {
      title: '300+ LeetCode Problems',
      desc: 'Consistent practice across arrays, trees, graphs, DP, and system design.'
    },
    {
      title: 'Striver A2Z DSA Roadmap',
      desc: 'Following the comprehensive roadmap for structured algorithmic problem solving.'
    },
    {
      title: 'GSoC 2026 Proposal — CodeLabz',
      desc: 'Submitted proposal for Google Summer of Code under C2SI (Computational Science Initiative).'
    }
  ];

  return (
    <section className="section achievements-section">
      <div className="container">
        <p className="section-label">Achievements</p>
        <h2 className="section-title fade-on-scroll">Milestones</h2>
        
        <div className="achievements-list">
          {items.map((item, i) => (
            <div className="achievement-row fade-on-scroll" key={i}>
              <span className="achievement-marker">0{i + 1}</span>
              <div>
                <h4 className="achievement-title">{item.title}</h4>
                <p className="achievement-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
