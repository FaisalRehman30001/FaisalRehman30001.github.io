import React from 'react';
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Owasoft Technologies',
      role: 'React JS Developer',
      period: 'January 2023 - Present',
      location: 'Rawalpindi, Pakistan',
      description: [
        'Enhanced user experience by implementing responsive web designs and optimizing application performance.',
        'Developed reusable components to facilitate faster development timelines and improve overall code quality.',
        'Contributed to a positive UX through careful attention to design specifications and close collaboration with UI/UX designers.',
        'Designed intuitive graphical user interfaces to improve user experience and ensure smooth interactions with backend APIs.',
        'Built and maintained RESTful APIs and backend services with Node.js and MongoDB, ensuring secure and efficient data handling.',
        'Integrated real-time features using Socket.IO for real-time updates in web applications.',
        'Utilized GitHub for version control, code reviews, and collaboration with cross-functional teams following best development practices.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-icon">
                  <FaBuilding />
                </div>
                <div className="experience-info">
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <div className="experience-meta">
                    <span className="meta-item">
                      <FaCalendarAlt />
                      {exp.period}
                    </span>
                    <span className="meta-item location">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="experience-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="experience-education">
          <h3 className="subsection-title">Education</h3>
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <div className="education-info">
              <h4>Bachelor of Science in Computer Science (BSCS)</h4>
              <p className="education-school">National University of Modern Languages (Rawalpindi Branch)</p>
              <p className="education-period">September 2020 - June 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
