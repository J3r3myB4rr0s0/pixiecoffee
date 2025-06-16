import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="card p-6 text-center h-full flex flex-col"
    >
      <div className="mx-auto mb-4 text-primary w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-dark">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;