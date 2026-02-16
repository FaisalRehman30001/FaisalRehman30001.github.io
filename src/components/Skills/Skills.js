import React from 'react';
import { 
  FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaStripe, FaHtml5, FaCss3Alt, FaJs, FaBootstrap
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiMui, SiTypescript, SiPostgresql, SiPrisma, SiSass
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React JS', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'SCSS', icon: <SiSass />, color: '#CC6699' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
        { name: 'Material UI', icon: <SiMui />, color: '#007FFF' },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
        { name: 'RESTful APIs', icon: <FaDatabase />, color: '#00d4ff' },
        { name: 'Prisma', icon: <SiPrisma />, color: '#2D3748' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      ],
    },
    {
      title: 'State Management & Tools',
      skills: [
        { name: 'Redux Toolkit', icon: <SiRedux />, color: '#764ABC' },
        { name: 'GitHub', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Stripe', icon: <FaStripe />, color: '#008CDD' },
      ],
    },
  ];

  const softSkills = [
    { name: 'Problem Solving', emoji: '🧩' },
    { name: 'Communication', emoji: '💬' },
    { name: 'Teamwork', emoji: '🤝' },
    { name: 'Time Management', emoji: '⏰' },
    { name: 'Critical Thinking', emoji: '🎯' },
    { name: 'Adaptability', emoji: '🔄' },
    { name: 'Leadership', emoji: '👨‍💼' },
    { name: 'Project Management', emoji: '📊' },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item" style={{ '--skill-color': skill.color }}>
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="soft-skills">
          <h3 className="subsection-title">Professional Strengths</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                <span className="soft-skill-emoji">{skill.emoji}</span>
                <span className="soft-skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
