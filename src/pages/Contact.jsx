import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/samzshyam21@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="contact-page">
      <div className="page-header" style={{ backgroundColor: 'var(--secondary-blue)' }}>
        <div className="container text-center">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>Get In Touch</motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            Ready to start your next project? We'd love to hear from you.
          </motion.p>
        </div>
      </div>

      <section className="section container">
        <div className="contact-grid">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="contact-info">
            <h2>Let's Connect</h2>
            <p className="mb-4">Reach out to us through any of the channels below, and let's create something amazing together.</p>
            
            <div className="info-item">
              <div className="info-icon"><Mail className="text-blue"/></div>
              <div>
                <h3>Email Us</h3>
                <p>gkvijay1976@gmail.com<br/>gkadvertisers76@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Phone className="text-green"/></div>
              <div>
                <h3>Call Us</h3>
                <p>+91 9283235690</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><MapPin className="text-blue"/></div>
              <div>
                <h3>Visit Us</h3>
                <p>No : 04, Brindavan Street <br/>West Mambalam, Ch-600033</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Clock className="text-green"/></div>
              <div>
                <h3>Business Hours</h3>
                <p>Mon - Fri: 9:00 AM - 9:00 PM<br/>Saturday: 10:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="social-media-section mt-5">
              <h3 className="mb-3">Find Us On</h3>
              <div className="social-buttons-container">
                <a href="https://www.facebook.com/share/18Bma3mQnv/" target="_blank" rel="noreferrer" className="social-btn" title="Facebook">
                  <img src="/images/fb-removebg-preview.png" alt="Facebook" />
                </a>
                <a href="https://www.justdial.com/Chennai/GK-Signs-Near-Dhuraisamy-Subway-West-Mambalam/044PXX44-XX44-131018160625-N8Z1_BZDET" target="_blank" rel="noreferrer" className="social-btn" title="JustDial">
                  <img src="/images/insta.png" alt="JustDial" />
                </a>
                <a href="https://wa.me//+919283235690" target="_blank" rel="noreferrer" className="social-btn" title="WhatsApp">
                  <img src="/images/wahtsapp-removebg-preview.png" alt="WhatsApp" />
                </a>
                <a href="https://www.linkedin.com/in/gk-signs-00452b391/" target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn">
                  <img src="/images/linkedin-removebg-preview.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="contact-form-container glass">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="hidden" name="_subject" value="New Contact Form Submission - GK Signs" />
              
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="How can we help?" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={status === "Sending..."}>
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </button>
              {status && status !== "Sending..." && (
                <p style={{ marginTop: '1rem', color: status.includes("success") ? 'var(--primary-green)' : 'red', fontWeight: 'bold' }}>
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Map Section placed nicely below the grid */}
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="map-section" style={{ marginTop: '60px' }}>
          <h2 className="text-center" style={{ marginBottom: '2rem' }}>Our Location</h2>
          <div className="map-container glass" style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', padding: '10px' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.93198105849163!2d80.22778432262803!3d13.04129246725829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ac05472037%3A0x3eff85abb227f377!2sGK%20Rubber%20Stamp%20%26%20Signs!5e0!3m2!1sen!2sin!4v1767789321074!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0, borderRadius: '8px' }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Contact;
