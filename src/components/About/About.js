import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              <span className="gradient-text">A self-taught Full Stack Developer</span>, 
              functioning in the industry since 2023. I make meaningful and delightful 
              digital products that create an equilibrium between user needs and business goals.
            </p>
            
            <p className="about-description">
              I'm an experienced React Developer with a strong background in building responsive, 
              high-performance web applications. My expertise lies in developing reusable and 
              scalable components, optimizing state management, and delivering smooth, user-centric interfaces.
            </p>
            
            <p className="about-description">
              I'm also proficient in backend development using Node.js and MongoDB, with hands-on 
              experience in building RESTful APIs, designing database schemas, implementing 
              authentication, and developing secure server-side logic.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">2+</span>
                <span className="highlight-label">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">10+</span>
                <span className="highlight-label">Projects Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-label">Happy Clients</span>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="about-card">
              <div className="card-icon">🎯</div>
              <h3>Mission</h3>
              <p>To create exceptional digital experiences that solve real problems and bring value to users.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">💡</div>
              <h3>Vision</h3>
              <p>Building technology that improves people's lives through accessible and intuitive design.</p>
            </div>
          </div>
        </div>
        
        <div className="about-quote">
          <p>"I'm currently looking to join a <span className="gradient-text">cross-functional team</span> that values improving people's lives through accessible design."</p>
        </div>
      </div>
    </section>
  );
};

export default About;
