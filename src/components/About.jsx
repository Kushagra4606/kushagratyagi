import React from 'react';
import { Terminal, Layout, Server, Cpu, Database, Settings } from 'lucide-react';
import './About.css';

const About = () => {
  const focusAreas = [
    { title: 'Java Ecosystem', icon: <Terminal size={24} />, desc: 'Deep expertise in core Java and enterprise applications.' },
    { title: 'Spring Boot', icon: <Settings size={24} />, desc: 'Building robust, scalable REST APIs and microservices.' },
    { title: 'Backend Engineering', icon: <Server size={24} />, desc: 'Architecting high-performance server-side solutions.' },
    { title: 'System Design', icon: <Cpu size={24} />, desc: 'Designing scalable, distributed architectures.' },
    { title: 'Full Stack Dev', icon: <Layout size={24} />, desc: 'Connecting complex backends to modern React frontends.' },
    { title: 'Problem Solving', icon: <Database size={24} />, desc: 'Algorithmic thinking and optimizing database schemas.' }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title fade-on-scroll">Engineering Focus</h2>
        
        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <div 
              className="focus-card glass-panel fade-on-scroll" 
              key={index}
              style={{transitionDelay: `${index * 50}ms`}}
            >
              <div className="focus-icon-wrapper">
                {area.icon}
              </div>
              <h3 className="focus-title">{area.title}</h3>
              <p className="focus-desc">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
