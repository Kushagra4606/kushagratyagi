import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 'tradeverse',
    title: 'TradeVerse',
    tagline: 'Real-Time Stock Market Simulator',
    tech: ['Java', 'Spring Boot', 'React', 'Redis', 'WebSocket', 'MySQL'],
    summary: 'A full-scale simulated Indian stock exchange with a real-time order matching engine, trading bots, sentiment engine, and strategy backtester.',
    details: [
      'Built a high-throughput order matching engine processing 1000+ order book updates per second using Java concurrency primitives and in-memory data structures.',
      'Implemented WebSocket-based real-time data streaming for live price charts, order book depth, and portfolio updates to the React frontend.',
      'Designed and deployed 200 autonomous trading bots with configurable strategies (mean reversion, momentum, market making) that generate realistic market behavior.',
      'Built a sentiment analysis engine that processes simulated news feeds and adjusts stock volatility and bot behavior in real-time.',
      'Implemented Redis caching layer for frequently accessed stock data, reducing database load by ~60% and improving API response times.',
      'Created a strategy backtesting module that allows users to test trading algorithms against historical simulated data with P&L reporting.',
      'Used Spring Security with JWT for user authentication and role-based access control.',
    ],
    link: '#',
  },
  {
    id: 'shopnest',
    title: 'ShopNest',
    tagline: 'Intelligent E-Commerce Platform',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs'],
    summary: 'Full-stack e-commerce platform with a dynamic pricing engine, group buying discounts, and bill splitting features.',
    details: [
      'Architected a Spring Boot backend with layered architecture — controllers, services, repositories — following SOLID principles throughout.',
      'Built a dynamic pricing engine that adjusts product prices based on demand, inventory levels, and time-based discount rules.',
      'Implemented group buying functionality where users can create groups, invite others, and unlock tiered discounts as group size grows.',
      'Designed a bill splitting feature for shared purchases with support for equal, percentage-based, and custom splits.',
      'Created an advanced MySQL schema with proper normalization, indexing, and query optimization for catalog, user, and order management.',
      'Deployed on cloud infrastructure with CI/CD pipeline for automated testing and deployment.',
    ],
    link: '#',
  },
  {
    id: 'sensecal',
    title: 'Sensecal',
    tagline: 'AI Digital Chief of Staff',
    tech: ['AI', 'Multi-Agent', 'React', 'Node.js', 'LLM'],
    summary: 'An AI-powered executive assistant that handles planning, delegation, execution tracking, context management, and autonomous workflow orchestration.',
    details: [
      'Designed a multi-agent architecture where specialized agents (planner, executor, researcher, communicator) collaborate to complete complex tasks.',
      'Built a persistent memory and context engine that maintains user preferences, past decisions, and organizational knowledge across sessions.',
      'Implemented a task orchestration system with dependency graphs, priority queues, and automated status tracking with notifications.',
      'Created an executive dashboard in React showing real-time agent activity, task progress, and actionable insights.',
      'Integrated LLM-based natural language interfaces for task creation, delegation, and reporting.',
      'Built a permission and access control layer to manage what each agent can view and modify.',
    ],
    link: '#',
  }
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`project-card ${expanded ? 'expanded' : ''}`}>
      <div className="project-header">
        <div>
          <p className="project-tagline mono">{project.tagline}</p>
          <h3 className="project-title">{project.title}</h3>
        </div>
        <a href={project.link} className="project-repo-link" target="_blank" rel="noreferrer">
          <ArrowUpRight size={16} />
        </a>
      </div>

      <p className="project-summary">{project.summary}</p>

      <div className="project-tech">
        {project.tech.map((t, i) => (
          <span className="tech-tag" key={i}>{t}</span>
        ))}
      </div>

      <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Hide details' : 'Read more'}
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {expanded && (
        <div className="project-details">
          <ul>
            {project.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title fade-on-scroll">Things I've Built</h2>
        
        <div className="projects-list">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
