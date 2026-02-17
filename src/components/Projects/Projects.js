import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMui, SiStripe, SiExpress, SiReactquery } from 'react-icons/si';
import './Projects.css';

// Import project images
import inkedFlowImage from '../../assets/images/projectsImage/Inkedflow.png';
import mediDiscountsImage from '../../assets/images/projectsImage/MediDiscounts.jpg';
import piddoImage from '../../assets/images/projectsImage/Piddo.jpg';
import sagaticaImage from '../../assets/images/projectsImage/Sagatica.png';

const Projects = () => {
  const projects = [
    {
      title: 'InkedFlow',
      category: 'Full-Scale SaaS Platform',
      description: 'A comprehensive SaaS platform with Admin, User, and Customer portals. Features end-to-end frontend UI/UX implementation, backend development, and API integrations.',
      highlights: [
        'Projects, quotes, contracts, and invoicing workflows',
        'Role-based access control',
        'Stripe-powered payments',
        'Automated business workflows',
      ],
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Stripe', icon: <SiStripe /> },
        { name: 'Material UI', icon: <SiMui /> },
      ],
      image: inkedFlowImage,
    },
    {
      title: 'Piddo',
      category: 'Food Ordering & Restaurant Management',
      description: 'A complete food ordering solution with Admin, Vendor, and Customer portals. Features menu management, order processing, real-time notifications, and multi-vendor support.',
      highlights: [
        'Multi-vendor restaurant management',
        'Real-time order tracking',
        'Payment integration',
        'Admin dashboard analytics',
      ],
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
      ],
      image: piddoImage,
    },
    {
      title: 'MediDiscounts',
      category: 'Healthcare Discount Platform',
      description: 'A healthcare platform connecting users with discounted medical services. Features provider listings, discount management, and user subscription systems.',
      highlights: [
        'Healthcare provider directory',
        'Discount card management',
        'Subscription plans',
        'Admin & user portals',
      ],
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Material UI', icon: <SiMui /> },
      ],
      image: mediDiscountsImage,
    },
    {
      title: 'Sagatica',
      category: 'Employee Assessment Platform',
      description: 'An enterprise assessment platform with Admin, Employee, and Client portals for comprehensive employee engagement and assessment management.',
      highlights: [
        'Employee engagement tracking',
        'Assessment management system',
        'Analytics dashboard',
        'Role-based access control',
      ],
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Material UI', icon: <SiMui /> },
        { name: 'React Query', icon: <SiReactquery /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
      ],
      image: sagaticaImage,
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="featured-projects">
          {projects.map((project, index) => (
            <div key={index} className={`featured-project ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="project-visual">
                <div className="project-mockup">
                  <div className="mockup-content has-image">
                    <img src={project.image} alt={`${project.title} Screenshot`} className="project-image" />
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description-box">
                  <p className="project-description">{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag" title={tech.name}>
                      {tech.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
