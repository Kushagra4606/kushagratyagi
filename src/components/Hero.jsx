import React from 'react';
import { Mail, ArrowRight, Activity, Database, Server, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <span className="pulse-dot"></span> Available for Opportunities
          </div>
          <h1 className="hero-name">Kushagra Tyagi</h1>
          <h2 className="hero-title text-gradient">Full Stack Developer | Java Backend Engineer</h2>
          
          <p className="hero-tagline">
            Building scalable systems with Java, Spring Boot, React and distributed architectures.
          </p>
          
          <p className="hero-intro">
            B.Tech Computer Science student passionate about backend engineering, system design, distributed systems and full-stack development.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#" className="btn btn-secondary">
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/kushagratyagi" target="_blank" rel="noreferrer" className="social-icon">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com/in/kushagratyagi" target="_blank" rel="noreferrer" className="social-icon">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:kushagra@example.com" className="social-icon">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="dashboard-mockup glass-panel">
            {/* Header */}
            <div className="dash-header">
              <div className="window-controls">
                <span></span><span></span><span></span>
              </div>
              <div className="dash-title">system-architecture.tsx</div>
            </div>
            
            {/* Body */}
            <div className="dash-body">
              {/* API Requests */}
              <div className="dash-card api-card">
                <div className="card-header">
                  <Activity size={16} className="text-blue" />
                  <span>API Traffic (Real-time)</span>
                </div>
                <div className="bar-chart">
                  {[40, 70, 45, 90, 65, 80, 50, 85, 60, 95].map((h, i) => (
                    <div key={i} className="bar" style={{height: `${h}%`}}></div>
                  ))}
                </div>
              </div>

              {/* DB Nodes */}
              <div className="dash-card db-nodes">
                <div className="card-header">
                  <Database size={16} className="text-purple" />
                  <span>Database Shards</span>
                </div>
                <div className="node-grid">
                  <div className="node active">DB-1</div>
                  <div className="node active">DB-2</div>
                  <div className="node sync">DB-3</div>
                  <div className="node active">DB-4</div>
                </div>
              </div>

              {/* Server Status */}
              <div className="dash-card server-status">
                <div className="card-header">
                  <Server size={16} className="text-green" />
                  <span>Microservices</span>
                </div>
                <div className="status-list">
                  <div className="status-item"><span className="status-dot healthy"></span> Auth Service</div>
                  <div className="status-item"><span className="status-dot healthy"></span> Order Engine</div>
                  <div className="status-item"><span className="status-dot warning"></span> Analytics</div>
                </div>
              </div>
              
              {/* Analytics */}
              <div className="dash-card code-snippet">
                 <div className="card-header">
                  <Code2 size={16} className="text-gray" />
                  <span>WebSocket Stream</span>
                </div>
                <pre>
                  <code>
                    <span className="token keyword">const</span> ws = <span className="token keyword">new</span> <span className="token class">WebSocket</span>('wss://stream');<br/>
                    ws.<span className="token method">onmessage</span> = (event) =&gt; {'{'}<br/>
                    &nbsp;&nbsp;<span className="token method">processOrderBook</span>(event.data);<br/>
                    {'}'};
                  </code>
                </pre>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
