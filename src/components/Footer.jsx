import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2><span className="text-green">GK</span> <span className="text-blue">Signs</span></h2>
          <p>A leading Signage & Printing Solutions Company blending top-tier craftsmanship with a visionary team. Over 20+ years of mastery.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <ul>
            <li><MapPin size={18} className="text-green"/> No : 04, Brindavan Street West Mambalam, Ch-600033</li>
            <li><Mail size={18} className="text-blue"/> gkvijay1976@gmail.com</li>
            <li><Phone size={18} className="text-green"/> +91 9283235690</li>
          </ul>
        </div>
        
        <div className="footer-hours">
          <h3>Business Hours</h3>
          <p>Monday - Friday:<br /> 9:00 AM - 9:00 PM</p>
          <p>Saturday:<br /> 10:00 AM - 9:00 PM</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container text-center">
          <p> {new Date().getFullYear()} GK Signs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
