import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage
}) => {
  const { t } = useTranslation();
  
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/20"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
            {title}
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link to={ctaLink} className="btn-primary text-lg py-4 px-8">
              {ctaText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;