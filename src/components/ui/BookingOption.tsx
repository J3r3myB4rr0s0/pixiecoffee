import React from 'react';
import { motion } from 'framer-motion';

interface BookingOptionProps {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  onSelect: () => void;
  index: number;
}

const BookingOption: React.FC<BookingOptionProps> = ({
  title,
  description,
  image,
  ctaText,
  onSelect,
  index
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="card overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        
        <button 
          onClick={onSelect}
          className="btn-primary w-full"
        >
          {ctaText}
        </button>
      </div>
    </motion.div>
  );
};

export default BookingOption;