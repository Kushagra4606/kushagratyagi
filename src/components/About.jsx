import React from 'react';
import './About.css';

const About = () => {
  const focusAreas = [
    { title: 'Java Ecosystem', desc: 'Core Java, enterprise applications, and JVM internals.' },
    { title: 'Spring Boot', desc: 'REST APIs, microservices, Spring Security, Hibernate.' },
    { title: 'Backend Engineering', desc: 'High-performance server-side solutions and architecture.' },
    { title: 'System Design', desc: 'Scalable, distributed systems and data modeling.' },
    { title: 'Full Stack Dev', desc: 'React frontends connected to complex Java backends.' },
    { title: 'Problem Solving', desc: '300+ LeetCode problems. Algorithmic thinking.' }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title fade-on-scroll">What I Work On</h2>
        
        <div className="about-grid">
          {focusAreas.map((area, index) => (
            <div className="about-card fade-on-scroll" key={index}>
              <h3 className="about-card-title">{area.title}</h3>
              <p className="about-card-desc">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
