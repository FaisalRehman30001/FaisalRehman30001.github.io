import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../../assets/images/profileImage/profileImage.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-wave">👋</span>
            <span className="greeting-text">Hello! I am <span className="gradient-text">Faisal Ur Rehman</span></span>
          </div>
          
          <div className="hero-tagline">
            <span className="tagline-small">A Developer who</span>
            <h1 className="hero-title">
              Builds <span className="gradient-text animated-text">exceptional</span>
              <br />web experiences
            </h1>
            <p className="tagline-quote">"Code is poetry when it solves real problems"</p>
          </div>
          
          <h2 className="hero-subtitle">
            I'm a <span className="typing-text">React JS Developer</span>
          </h2>
          
          <p className="hero-current">
            Currently, I'm a Software Developer at <a href="https://owasoft.com" target="_blank" rel="noopener noreferrer" className="company-link">Owasoft Technologies</a>
          </p>
          
          <p className="hero-description">
            An experienced React Developer with expertise in building responsive, high-performance 
            web applications. I create meaningful and delightful digital products that balance 
            user needs with business goals.
          </p>
          
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/FaisalRehman30001" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/faisalurrehman30001" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:faisalrehman30003@gmail.com" className="social-link" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="avatar-container">
            <div className="avatar-glow"></div>
            <div className="avatar">
              <img src={profileImage} alt="Faisal Ur Rehman" className="avatar-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
