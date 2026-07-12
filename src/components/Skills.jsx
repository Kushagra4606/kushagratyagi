import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'SQL']
    },
    {
      title: 'Backend',
      skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'REST APIs']
    },
    {
      title: 'Frontend',
      skills: ['React', 'Zustand', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Database & Tools',
      skills: ['MySQL', 'Redis', 'Docker', 'Git', 'GitHub', 'Maven', 'IntelliJ']
    }
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title fade-on-scroll">Technical Stack</h2>
        
        <div className="skills-list">
          {skillCategories.map((category, idx) => (
            <div className="skill-row fade-on-scroll" key={idx}>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, sIdx) => (
                  <span className="skill-tag" key={sIdx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
