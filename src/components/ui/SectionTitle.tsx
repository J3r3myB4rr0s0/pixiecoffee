import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  rainbow?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
  rainbow = false
}) => {
  const titleClasses = `text-3xl md:text-4xl font-bold mb-4 ${
    light ? 'text-white' : 'text-dark'
  } ${center ? 'text-center' : ''}`;

  const rainbowTitle = rainbow ? (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={titleClasses}
    >
      {title.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            color: `hsl(${(index * 360) / title.length}, 100%, 50%)`,
            transition: 'color 0.3s ease'
          }}
        >
          {char}
        </span>
      ))}
    </motion.h2>
  ) : (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={titleClasses}
    >
      {title}
    </motion.h2>
  );

  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {rainbowTitle}
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`text-lg ${
            light ? 'text-gray-200' : 'text-gray-600'
          } max-w-2xl ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: center ? '120px' : '80px' }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className={`h-1 bg-secondary rounded-full mt-6 ${
          center ? 'mx-auto' : ''
        }`}
      ></motion.div>
    </div>
  );
};

export default SectionTitle;