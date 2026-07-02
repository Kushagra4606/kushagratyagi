import React from 'react';
import { ArrowUpRight, Activity, Zap, Shield, Cpu, Network, Database, Server } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title fade-on-scroll">Featured Projects</h2>
        
        <div className="projects-list">
          
          {/* TradeVerse Project */}
          <div className="project-card fade-on-scroll">
            <div className="project-content">
              <div className="project-tag">Real-Time Stock Market Simulator</div>
              <h3 className="project-title">TradeVerse</h3>
              <p className="project-desc">
                A full-scale simulated Indian stock exchange with a real-time order matching engine, trading bots, sentiment engine, strategy backtester and cognitive bias analytics.
              </p>
              
              <ul className="project-highlights">
                <li><Activity size={16} className="text-blue" /> 1000+ order book updates/sec</li>
                <li><Database size={16} className="text-purple" /> Redis caching & WebSocket streaming</li>
                <li><Cpu size={16} className="text-green" /> 200 autonomous trading bots</li>
                <li><Network size={16} className="text-gray" /> Strategy backtesting & Market sentiment engine</li>
              </ul>
              
              <a href="#" className="btn btn-secondary project-link">View Repository <ArrowUpRight size={16}/></a>
            </div>
            
            <div className="project-visual">
              <div className="tradeverse-ui glass-panel">
                <div className="tv-header">
                  <span>NIFTY 50</span> <span className="tv-price positive">22,453.20 ▲</span>
                </div>
                <div className="tv-body">
                  <div className="tv-orderbook">
                    <div className="tv-row header"><span>Price</span><span>Size</span></div>
                    <div className="tv-row sell"><span className="tv-price-red">22,455.10</span><span className="tv-size bar-red" style={{'--w': '80%'}}>1450</span></div>
                    <div className="tv-row sell"><span className="tv-price-red">22,454.50</span><span className="tv-size bar-red" style={{'--w': '40%'}}>600</span></div>
                    <div className="tv-row sell"><span className="tv-price-red">22,453.80</span><span className="tv-size bar-red" style={{'--w': '60%'}}>900</span></div>
                    <div className="tv-spread">Spread: 0.60</div>
                    <div className="tv-row buy"><span className="tv-price-green">22,453.20</span><span className="tv-size bar-green" style={{'--w': '70%'}}>1200</span></div>
                    <div className="tv-row buy"><span className="tv-price-green">22,452.10</span><span className="tv-size bar-green" style={{'--w': '30%'}}>400</span></div>
                    <div className="tv-row buy"><span className="tv-price-green">22,451.00</span><span className="tv-size bar-green" style={{'--w': '90%'}}>1800</span></div>
                  </div>
                  <div className="tv-chart">
                    <svg viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path d="M0,40 L10,35 L20,38 L30,25 L40,30 L50,15 L60,20 L70,5 L80,10 L90,2 L100,8" fill="none" stroke="var(--accent-blue)" strokeWidth="2" className="path-anim" />
                      <path d="M0,40 L10,35 L20,38 L30,25 L40,30 L50,15 L60,20 L70,5 L80,10 L90,2 L100,8 L100,50 L0,50 Z" fill="url(#blue-grad)" />
                      <defs>
                        <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ShopNest Project */}
          <div className="project-card reverse fade-on-scroll">
            <div className="project-content">
              <div className="project-tag">Intelligent E-Commerce Platform</div>
              <h3 className="project-title">ShopNest</h3>
              <p className="project-desc">
                Full-stack e-commerce platform with dynamic pricing engine, group buying discounts and bill splitting features.
              </p>
              
              <ul className="project-highlights">
                <li><Server size={16} className="text-green" /> Spring Boot backend & React frontend</li>
                <li><Zap size={16} className="text-purple" /> Dynamic pricing engine</li>
                <li><Database size={16} className="text-gray" /> Advanced MySQL schema</li>
                <li><Shield size={16} className="text-blue" /> Cloud deployment</li>
              </ul>
              
              <a href="#" className="btn btn-secondary project-link">View Repository <ArrowUpRight size={16}/></a>
            </div>
            
            <div className="project-visual">
              <div className="shopnest-ui glass-panel">
                 <div className="sn-header">
                    <span>ShopNest Admin</span>
                 </div>
                 <div className="sn-grid">
                    <div className="sn-card">
                      <span className="sn-label">Dynamic Pricing</span>
                      <span className="sn-value">Active</span>
                    </div>
                    <div className="sn-card">
                      <span className="sn-label">Active Users</span>
                      <span className="sn-value">1,204</span>
                    </div>
                    <div className="sn-card full">
                      <div className="sn-bar-bg"><div className="sn-bar-fill" style={{width: '75%'}}></div></div>
                      <span className="sn-label">Inventory Optimization</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Sensecal Project */}
          <div className="project-card fade-on-scroll">
            <div className="project-content">
              <div className="project-tag">AI Digital Chief of Staff</div>
              <h3 className="project-title">Sensecal</h3>
              <p className="project-desc">
                An AI-powered executive assistant designed to act as a digital chief of staff, capable of planning, delegation, execution tracking, context management and autonomous workflow orchestration.
              </p>
              
              <ul className="project-highlights">
                <li><Network size={16} className="text-purple" /> Multi-agent architecture</li>
                <li><Database size={16} className="text-blue" /> Memory and context engine</li>
                <li><Activity size={16} className="text-green" /> Task orchestration & Executive dashboard</li>
                <li><Cpu size={16} className="text-gray" /> AI-first workflow automation</li>
              </ul>
              
              <a href="#" className="btn btn-secondary project-link">View Repository <ArrowUpRight size={16}/></a>
            </div>
            
            <div className="project-visual">
              <div className="sensecal-ui glass-panel">
                <div className="sc-sidebar">
                   <div className="sc-dot"></div>
                   <div className="sc-dot"></div>
                   <div className="sc-dot active"></div>
                </div>
                <div className="sc-main">
                  <div className="sc-agent-status">
                    <span className="sc-ping"></span>
                    Agent Orchestrator Online
                  </div>
                  <div className="sc-timeline">
                    <div className="sc-task done">Analyze Q3 metrics</div>
                    <div className="sc-task active">Draft investor update</div>
                    <div className="sc-task pending">Schedule team sync</div>
                  </div>
                  <div className="sc-graph">
                    {/* Simulated node graph using divs and borders */}
                    <div className="node-wrapper">
                      <div className="sc-node main-node">Core AI</div>
                      <div className="sc-node sub-node s1">Memory</div>
                      <div className="sc-node sub-node s2">Tools</div>
                      <div className="sc-node sub-node s3">Plan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
