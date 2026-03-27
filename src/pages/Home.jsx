import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Printer } from 'lucide-react';
import './Home.css';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit={{ opacity: 0 }}
      className="home-page"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-content">
          <motion.h1 variants={fadeIn} className="hero-title">
            <span className="text-blue">Transforming Spaces</span> <br /> 
            <span className="text-green">Elevating Brands</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="hero-subtitle">
            A Signage & Printing Solutions Company blending top-tier craftsmanship with a visionary team. Over 20 years of mastery and 1,000+ impactful projects delivered.
          </motion.p>
          <motion.div variants={fadeIn} className="hero-actions">
            <Link to="/contact" className="btn btn-primary flex-btn">
              Get Started <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="btn btn-secondary flex-btn">
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container stats-grid">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="stat-card glass">
            <h3>20+</h3>
            <p>Years Experience</p>
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} delay={0.2} className="stat-card glass">
            <h3>1,000+</h3>
            <p>Projects Delivered</p>
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} delay={0.4} className="stat-card glass">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights section">
        <div className="container text-center">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            What We Offer
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Premium quality, flawless execution, and striking designs.
          </motion.p>
          
          <div className="highlights-grid">
            <motion.div whileHover={{ y: -10 }} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="service-highlight">
              <div className="icon-wrapper bg-green">
                <Star size={32} />
              </div>
              <h3>Signage</h3>
              <p>Signage that speaks for your brand with unmatched quality standard and premium finishes.</p>
              <img src="/images/Signage.png" alt="Signage" className="highlight-img" />
            </motion.div>
            
            <motion.div whileHover={{ y: -10 }} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="service-highlight">
              <div className="icon-wrapper bg-blue">
                <ShieldCheck size={32} />
              </div>
              <h3>Interior Design</h3>
              <p>Blending craftsmanship with user-friendly arrangements for stunning residential and commercial experiences.</p>
              <img src="/images/Interior Design.png" alt="Interior Design" className="highlight-img" />
            </motion.div>

            <motion.div whileHover={{ y: -10 }} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="service-highlight">
              <div className="icon-wrapper bg-green">
                <Printer size={32} />
              </div>
              <h3>Printing Solutions</h3>
              <p>Powered by expert hands and high-tech equipment, producing clarity, consistency, and brilliant colors.</p>
              <img src="/images/Printing Solutions.png" alt="Printing Solutions" className="highlight-img" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section text-center">
        <div className="container">
          <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>Ready to Build Your Brand Presence?</motion.h2>
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>Contact us for free consultation and quote.</motion.p>
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Link to="/contact" className="btn btn-primary mt-4">Contact Us Today</Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
