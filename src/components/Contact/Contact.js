import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Faisal Ur Rehman',
    };

    try {
      // Send contact form email to you (the owner)
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      // Send auto-reply email to the user (non-blocking)
      // If this fails, the main message was still delivered
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        templateParams
      ).catch(() => {
        // Auto-reply failed silently - main message was still sent
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'faisalrehman30003@gmail.com',
      link: 'mailto:faisalrehman30003@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+92 321 5052842',
      link: 'tel:+923215052842',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Rawalpindi, Pakistan',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/FaisalRehman30001',
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/faisalurrehman30003/',
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-intro">
          <p>
            I'm currently looking to join a cross-functional team that values improving 
            people's lives through accessible design, or have a project in mind? Let's connect.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="info-title">Contact Information</h3>
            
            <div className="info-items">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-details">
                    <span className="info-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="info-value">{info.value}</a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="social-section">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-item"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send Me a Message</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <p className="submit-message success">Message sent successfully! Check your email for confirmation.</p>
            )}
            {submitStatus === 'error' && (
              <p className="submit-message error">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
