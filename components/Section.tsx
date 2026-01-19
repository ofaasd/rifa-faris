import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`w-full max-w-md mx-auto px-6 py-10 ${className}`}
    >
      {children}
    </motion.div>
  );
};