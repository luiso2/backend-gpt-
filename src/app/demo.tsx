'use client';

import React, { useState } from 'react';
import './globals.css';
import './components.css';

export default function DesignSystemDemo() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-brand">MERCATOP</div>
        <ul className="nav-menu">
          <li><a href="#" className="nav-link active">Home</a></li>
          <li><a href="#" className="nav-link">Services</a></li>
          <li><a href="#" className="nav-link">Products</a></li>
          <li><a href="#" className="nav-link">About</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="container" style={{ padding: '4rem 1rem' }}>
        <div className="text-center animate-fadeIn">
          <h1 style={{ marginBottom: 'var(--space-4)' }}>
            Innovating Business Solutions
          </h1>
          <p style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)', maxWidth: '800px', margin: '0 auto' }}>
            MERCATOP specializes in cutting-edge software development, web applications, 
            e-commerce solutions, and intelligent automation with n8n.
          </p>
          <div className="flex gap-4 justify-center" style={{ marginTop: 'var(--space-8)' }}>
            <button className="btn btn-primary btn-lg">Get Started</button>
            <button className="btn btn-secondary btn-lg">Learn More</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container" style={{ marginTop: 'var(--space-16)' }}>
        <div className="grid grid-cols-4" style={{ gap: 'var(--space-6)' }}>
          <div className="stat-card animate-fadeIn">
            <div className="stat-value">150+</div>
            <div className="stat-label">Projects Completed</div>
            <div className="stat-change positive">+23% this year</div>
          </div>
          <div className="stat-card animate-fadeIn">
            <div className="stat-value">98%</div>
            <div className="stat-label">Client Satisfaction</div>
            <div className="stat-change positive">+5% increase</div>
          </div>
          <div className="stat-card animate-fadeIn">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Support Available</div>
            <div className="badge badge-success" style={{ marginTop: 'var(--space-3)' }}>Always Online</div>
          </div>
          <div className="stat-card animate-fadeIn">
            <div className="stat-value">50+</div>
            <div className="stat-label">Team Members</div>
            <div className="stat-change positive">+12 this quarter</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container" style={{ marginTop: 'var(--space-16)' }}>
        <h2 className="text-center" style={{ marginBottom: 'var(--space-12)' }}>Our Services</h2>
        
        <div className="grid grid-cols-3" style={{ gap: 'var(--space-8)' }}>
          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="9" x2="15" y2="9"></line>
                <line x1="9" y1="13" x2="15" y2="13"></line>
                <line x1="9" y1="17" x2="13" y2="17"></line>
              </svg>
            </div>
            <h3 className="service-title">Software Development</h3>
            <p className="service-description">
              Custom software solutions tailored to your business needs, built with modern technologies and best practices.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="service-title">Web Applications</h3>
            <p className="service-description">
              Responsive, scalable web applications that deliver exceptional user experiences across all devices.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <h3 className="service-title">E-commerce Solutions</h3>
            <p className="service-description">
              Complete online store solutions with secure payment processing and inventory management.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Tabs Demo */}
      <section className="container" style={{ marginTop: 'var(--space-16)' }}>
        <h2 style={{ marginBottom: 'var(--space-8)' }}>Why Choose MERCATOP</h2>
        
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab ${activeTab === 'technology' ? 'active' : ''}`}
            onClick={() => setActiveTab('technology')}
          >
            Technology
          </button>
          <button 
            className={`tab ${activeTab === 'process' ? 'active' : ''}`}
            onClick={() => setActiveTab('process')}
          >
            Process
          </button>
        </div>

        <div className="card">
          {activeTab === 'overview' && (
            <div>
              <h3>Leading Innovation in Business Technology</h3>
              <p style={{ marginTop: 'var(--space-4)' }}>
                At MERCATOP, we combine cutting-edge technology with deep business understanding to deliver 
                solutions that drive real results. Our team of experts works closely with you to understand 
                your unique challenges and opportunities.
              </p>
              <div className="alert alert-info" style={{ marginTop: 'var(--space-6)' }}>
                <strong>Did you know?</strong> We've helped over 150 businesses transform their operations 
                with custom software solutions.
              </div>
            </div>
          )}
          {activeTab === 'technology' && (
            <div>
              <h3>Modern Technology Stack</h3>
              <p style={{ marginTop: 'var(--space-4)' }}>
                We use the latest technologies to ensure your solutions are fast, secure, and scalable:
              </p>
              <div className="grid grid-cols-2" style={{ marginTop: 'var(--space-6)', gap: 'var(--space-4)' }}>
                <div>
                  <h5>Frontend</h5>
                  <ul style={{ marginTop: 'var(--space-2)' }}>
                    <li>React, Vue.js, Angular</li>
                    <li>TypeScript</li>
                    <li>Next.js, Nuxt.js</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h5>Backend</h5>
                  <ul style={{ marginTop: 'var(--space-2)' }}>
                    <li>Node.js, Python, Java</li>
                    <li>PostgreSQL, MongoDB</li>
                    <li>Docker, Kubernetes</li>
                    <li>AWS, Google Cloud</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'process' && (
            <div>
              <h3>Our Development Process</h3>
              <p style={{ marginTop: 'var(--space-4)' }}>
                We follow an agile methodology that ensures transparency and delivers results:
              </p>
              <div style={{ marginTop: 'var(--space-6)' }}>
                <div className="progress" style={{ marginBottom: 'var(--space-2)' }}>
                  <div className="progress-bar" style={{ width: '25%' }}></div>
                </div>
                <p><strong>Discovery</strong> - Understanding your requirements</p>
                
                <div className="progress" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>
                  <div className="progress-bar" style={{ width: '50%' }}></div>
                </div>
                <p><strong>Design</strong> - Creating the perfect solution</p>
                
                <div className="progress" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>
                  <div className="progress-bar" style={{ width: '75%' }}></div>
                </div>
                <p><strong>Development</strong> - Building with best practices</p>
                
                <div className="progress" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>
                  <div className="progress-bar" style={{ width: '100%' }}></div>
                </div>
                <p><strong>Deployment</strong> - Launching your solution</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="container" style={{ marginTop: 'var(--space-16)' }}>
        <h2 className="text-center" style={{ marginBottom: 'var(--space-12)' }}>Our Services</h2>
        
        <div className="grid grid-cols-3" style={{ gap: 'var(--space-8)', alignItems: 'center' }}>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-title">Starter</h3>
            </div>
            <ul className="pricing-features">
              <li className="pricing-feature">Basic web application</li>
              <li className="pricing-feature">Up to 5 user accounts</li>
              <li className="pricing-feature">Email support</li>
              <li className="pricing-feature">Monthly updates</li>
            </ul>
            <button className="btn btn-secondary" style={{ width: '100%' }}>Learn More</button>
          </div>

          <div className="pricing-card featured">
            <div className="pricing-header">
              <h3 className="pricing-title">Professional</h3>
            </div>
            <ul className="pricing-features">
              <li className="pricing-feature">Advanced features</li>
              <li className="pricing-feature">Unlimited user accounts</li>
              <li className="pricing-feature">Priority support</li>
              <li className="pricing-feature">Weekly updates</li>
              <li className="pricing-feature">Custom integrations</li>
              <li className="pricing-feature">Analytics dashboard</li>
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }}>Learn More</button>
          </div>

          <div className="pricing-card">
            <div className="pricing-header">
              <h3 className="pricing-title">Enterprise</h3>
            </div>
            <ul className="pricing-features">
              <li className="pricing-feature">Full custom solution</li>
              <li className="pricing-feature">Dedicated support team</li>
              <li className="pricing-feature">SLA guarantee</li>
              <li className="pricing-feature">On-premise deployment</li>
              <li className="pricing-feature">Custom training</li>
            </ul>
            <button className="btn btn-secondary" style={{ width: '100%' }}>Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Form Demo */}
      <section className="container" style={{ marginTop: 'var(--space-16)', marginBottom: 'var(--space-16)' }}>
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="card-header">
            <h3 className="card-title">Get in Touch</h3>
            <p className="card-description">We'd love to hear about your project</p>
          </div>
          
          <form>
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <label className="label" htmlFor="name">Your Name</label>
              <input type="text" id="name" className="input" placeholder="John Doe" />
            </div>
            
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <label className="label" htmlFor="email">Email Address</label>
              <input type="email" id="email" className="input" placeholder="john@example.com" />
            </div>
            
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <label className="label" htmlFor="service">Service Needed</label>
              <select id="service" className="select">
                <option>Software Development</option>
                <option>Web Application</option>
                <option>E-commerce Solution</option>
                <option>Workflow Automation</option>
              </select>
            </div>
            
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <label className="label" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                className="input" 
                rows={4} 
                placeholder="Tell us about your project..."
                style={{ resize: 'vertical' }}
              />
            </div>
            
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="checkbox-mark"></span>
                <span className="checkbox-label">I agree to the terms and conditions</span>
              </label>
            </div>
            
            <div className="flex gap-4">
              <button type="submit" className="btn btn-primary">Send Message</button>
              <button type="button" className="btn btn-ghost" onClick={() => setIsModalOpen(true)}>
                View Demo Modal
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Modal Demo */}
      <div className={`modal-backdrop ${isModalOpen ? 'active' : ''}`} onClick={() => setIsModalOpen(false)}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">Welcome to MERCATOP</h3>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
          </div>
          <div className="modal-body">
            <p>This is a demonstration of our modal component. You can use it for:</p>
            <ul style={{ marginTop: 'var(--space-4)', paddingLeft: 'var(--space-6)' }}>
              <li>Confirmations and alerts</li>
              <li>Forms and data entry</li>
              <li>Detailed information display</li>
              <li>Image galleries and media</li>
            </ul>
            <div className="alert alert-success" style={{ marginTop: 'var(--space-6)' }}>
              <strong>Success!</strong> The design system has been successfully implemented.
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost" onClick={() => setIsModalOpen(false)}>Cancel</button>
            <button className="btn btn-primary" onClick={() => setIsModalOpen(false)}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}