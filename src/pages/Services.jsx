import React from 'react';
import { motion } from 'framer-motion';
import { Star, Home, PenTool, LayoutTemplate, Printer, Stamp } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Home size={40} />,
    title: 'Standee Specialist',
    desc: 'All kinds of standees done at the lowest rate in the entire city on premium quality.',
    features: ['Roll up standees', 'Wedding standees', 'Eco-solvent prints', 'Lightweight frames']
  },
  {
    icon: <Star size={40} />,
    title: 'Signage Solutions',
    desc: 'We handle all kinds of signage work including ACP boards, acrylic letters, and flex banners.',
    features: ['ACP Panels & LED boards', 'Acrylic & Metal Letters', 'Flex banners', '3D Signage']
  },
  {
    icon: <PenTool size={40} />,
    title: 'Graphic Design',
    desc: 'Our designs are clean, clear, and thoughtfully structured to communicate your message.',
    features: ['Brand logos', 'Motion graphics', 'Clean layouts', 'Color balanced visuals']
  },
  {
    icon: <LayoutTemplate size={40} />,
    title: 'Interior Design',
    desc: 'We create interiors with practical detailing, balanced aesthetics, and friendly arrangements.',
    features: ['Material selection', 'Functional layouts', 'Lighting planning', 'Space optimization']
  },
  {
    icon: <Printer size={40} />,
    title: 'Printing Solutions',
    desc: 'Accurate color output, clean finishes, and reliable material quality.',
    features: ['Flex & PVC prints', 'Business cards', 'Digital printing', 'Consistent color']
  },
  {
    icon: <Stamp size={40} />,
    title: 'Rubber Stamp',
    desc: 'We handle standard, pre-ink, self-ink, and custom requirement stamps.',
    features: ['Standard rubber stamps', 'Pre-ink stamps', 'Clear impressions', 'Custom sizing']
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} className="services-page">
      <div className="page-header bg-green">
        <div className="container text-center">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>Our Services</motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            With 20+ years of mastery and 1,000+ impactful projects, we stand as a powerhouse in signage, printing, and branding.
          </motion.p>
        </div>
      </div>

      <div className="container section">
        <motion.div variants={containerVariants} className="services-grid">
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ translateY: -10 }} className="service-card">
              <div className="service-icon text-blue">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
