import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, Users, Calendar } from 'lucide-react';
import { Class } from '../../types';

interface ClassCardProps {
  classItem: Class;
  index: number;
}

const ClassCard: React.FC<ClassCardProps> = ({ classItem, index }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={classItem.image} 
          alt={classItem.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          {t(`classes.age.${classItem.ageGroup}`)}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-4">
          <div className="flex space-x-2">
            {classItem.tags.map(tag => (
              <span 
                key={tag} 
                className="text-xs bg-secondary/90 text-white px-2 py-1 rounded-full"
              >
                {t(`classes.type.${tag}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{classItem.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{classItem.description}</p>
        
        <div className="border-t border-gray-200 pt-4 space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-2 text-primary" />
            <span>{classItem.duration} min</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2 text-primary" />
            <span>{classItem.capacity} {classItem.capacity === 1 ? 'niño' : 'niños'}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2 text-primary" />
            <span>{classItem.schedule}</span>
          </div>
        </div>
        
        <button className="btn-primary w-full">
          {t('classes.button')}
        </button>
      </div>
    </motion.div>
  );
};

export default ClassCard;