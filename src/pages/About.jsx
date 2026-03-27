import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
          console.log('Video started playing');
        } catch (error) {
          console.error('Video autoplay failed:', error);
          // Fallback: try to play on user interaction
          const playOnInteraction = () => {
            video.play();
            document.removeEventListener('click', playOnInteraction);
          };
          document.addEventListener('click', playOnInteraction);
        }
      };
      playVideo();
    }
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="about-page">
      <div className="page-header" style={{ backgroundColor: 'var(--secondary-blue)' }}>
        <div className="container text-center">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>About Us</motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            Crafting excellence in signage and printing for over two decades.
          </motion.p>
        </div>
      </div>

      <section className="section container">
        <div className="about-content">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="about-text">
            <h2>Our Story</h2>
            <p>With over two decades of proven mastery and 1,000+ successful projects delivered, our company stands as a ready force in signage, printing, branding and design solutions.</p>
            <p>From high impact standees and advanced signage systems to precision printing and graphic design, every solution is built with uncompromising quality and performance in mind.</p>
            <p>Our long standing client relationships speak louder than promises. When brands aim to grow stronger, look bolder, and stand taller in competitive markets, we deliver results that don't just get noticed—they get remembered, respected, and trusted.</p>
          </motion.div>
          
          <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="about-image-placeholder glass">
            <video 
              ref={videoRef}
              muted 
              loop 
              className="about-video"
              playsInline
            >
              <source src="/logo.mp4" type="video/mp4" />
              <source src="/logo.mp4" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>

      <section className="team-section bg-gray section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Meet Our Team</h2>
            <p className="section-subtitle"> The visionary minds behind GK Signs.</p>
          </div>
          
          <div className="team-grid">
            {[{ name: 'VijayaKumar', role: 'Proprietor & Founder' }, { name: 'Gajendran', role: 'Supervisor' }, { name: 'Ellappan', role: 'Designer' }, { name: 'Siva Kumar', role: 'Craftsman' }].map((member, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} className="team-member glass">
                <div className="member-avatar flex-center">
                  <span className="text-green h1">{member.name.charAt(0)}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="text-blue">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
