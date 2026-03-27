import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Nagaraja',
    company: 'Founder, Mambalam VBS',
    text: 'Working with this team has been transformative for our business. Their attention to detail and innovative approach exceeded all expectations. The website they delivered has increased our conversions by 300%.'
  },
  {
    name: 'Ganeshan',
    company: 'GM, T Nagar Co-operative bank',
    text: 'Absolutely phenomenal work! The team brought our vision to life in ways we couldn\'t have imagined. Their creativity and technical expertise are unmatched. Highly recommend to anyone looking for excellence.'
  },
  {
    name: 'Lakshman',
    company: 'Admin HR, United techno',
    text: 'Professional, efficient, and incredibly talented. They delivered our project ahead of schedule and the quality was outstanding. The precision they offer is flawless.'
  }
];

const Testimonials = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="testimonials-page">
      <div className="page-header bg-green">
        <div className="container text-center">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>Client Success Stories</motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </motion.p>
        </div>
      </div>

      <section className="section container">
        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="testimonial-card glass"
            >
              <Quote size={40} className="quote-icon text-green" />
              <p className="testimonial-text">"{test.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{test.name.charAt(0)}</div>
                <div>
                  <h4>{test.name}</h4>
                  <p className="text-blue">{test.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;
