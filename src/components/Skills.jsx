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
        <h2 className="section-title fade-on-scroll">Technical Arsenal</h2>
        
        <div className="skills-layout">
          {skillCategories.map((category, idx) => (
            <div className="skill-category fade-on-scroll" key={idx} style={{transitionDelay: `${idx * 100}ms`}}>
              <h3 className="category-title">{category.title}</h3>
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
