import React from 'react';
import { FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiMui, SiRedux, SiBootstrap, SiSass, SiSocketdotio, SiStripe, SiNextdotjs, SiPostgresql, SiPrisma, SiTypescript } from 'react-icons/si';
import './Projects.css';

// Import project logos
import inkedFlowLogo from '../../assets/images/projectsLogoes/inkedFlowLogo.png';
import mediDiscountsLogo from '../../assets/images/projectsLogoes/mediDiscountsLogo.png';
import piddoPortalLogo from '../../assets/images/projectsLogoes/piddoPortalLogo.png';
import sagaticaLogo from '../../assets/images/projectsLogoes/sagaticaLogo.png';

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
      featured: true,
      logo: inkedFlowLogo,
    },
    {
      title: 'Piddo Portal',
      category: 'Food Ordering & Restaurant Management',
      description: 'A complete food ordering solution with Admin, Vendor, and Customer portals. Features menu management, order processing, real-time notifications, and multi-vendor support.',
      highlights: [
        'Multi-vendor restaurant management',
        'Real-time order tracking',
        'Payment integration',
        'Admin dashboard analytics',
      ],
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Prisma', icon: <SiPrisma /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
      ],
      featured: true,
      logo: piddoPortalLogo,
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
      featured: true,
      logo: mediDiscountsLogo,
    },
    {
      title: 'Sagatica',
      category: 'Enterprise Solution',
      description: 'An enterprise application with Admin, Employee, and Client portals for comprehensive business management.',
      highlights: [
        'Three separate portals',
        'Role-based navigation',
        'Form validation with Formik',
      ],
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'SCSS', icon: <SiSass /> },
      ],
      featured: false,
      logo: sagaticaLogo,
    },
    {
      title: 'Doc Manager',
      category: 'Document Management System',
      description: 'A complete Document Management System with vault-based file management, version control, approval workflows, and comprehensive audit activity logs.',
      highlights: [
        'Vault-based file management',
        'Version control system',
        'Approval workflows',
        'Role-based access control',
        'Notifications & audit logs',
      ],
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Socket.IO', icon: <SiSocketdotio /> },
      ],
      featured: false,
    },
    {
      title: 'VE-Toolkit',
      category: 'Multi-Portal Application',
      description: 'A versatile toolkit application with Admin and User portals featuring offline data storage capabilities.',
      highlights: [
        'Admin and User portals',
        'IndexedDB for offline storage',
        'Responsive design',
      ],
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Material UI', icon: <SiMui /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'SCSS', icon: <SiSass /> },
      ],
      featured: false,
    },
    {
      title: 'Just A Tutor',
      category: 'Education Platform',
      description: 'An educational platform connecting students with teachers, featuring Admin, Teacher, and Student portals.',
      highlights: [
        'Multi-user portal system',
        'Redux state management',
        'Modern UI with Material Design',
      ],
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'Material UI', icon: <SiMui /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
      ],
      featured: false,
    },
    {
      title: 'Valet Xpress',
      category: 'Service Application',
      description: 'A valet parking service application with separate interfaces for vehicle owners and attendants.',
      highlights: [
        'Owner & attendant dashboards',
        'Real-time updates',
        'Mobile-responsive design',
      ],
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'SCSS', icon: <SiSass /> },
      ],
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`featured-project ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="project-visual">
                <div className="project-mockup">
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="mockup-content">
                    {project.logo ? (
                      <img src={project.logo} alt={`${project.title} Logo`} className="project-logo" />
                    ) : (
                      <>
                        <div className="mockup-icon">🚀</div>
                        <p className="mockup-title">{project.title}</p>
                      </>
                    )}
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
        
        <h3 className="subsection-title">Other Projects</h3>
        <div className="other-projects-grid">
          {otherProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-header">
                {project.logo ? (
                  <img src={project.logo} alt={`${project.title} Logo`} className="card-logo" />
                ) : (
                  <span className="card-icon">📁</span>
                )}
                <FaExternalLinkAlt className="card-link-icon" />
              </div>
              <h4 className="card-title">{project.title}</h4>
              <span className="card-category">{project.category}</span>
              <p className="card-description">{project.description}</p>
              <div className="card-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag-small" title={tech.name}>
                    {tech.icon}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
