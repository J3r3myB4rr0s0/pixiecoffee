import React from 'react';

interface LogoProps {
  size?: 'small' | 'default' | 'large' | 'extraLarge';
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'default' 
}) => {
  // Tamaños posibles para el logo
  const sizeClasses = {
    small: 'h-16',
    default: 'h-24',
    large: 'h-32',
    extraLarge: 'h-40'
  };

  return (
    <img
      src="/logo_pixieplay.png"
      alt="Pixie Play Logo"
      className={sizeClasses[size] + ' object-contain'}
      style={{ display: 'block', maxWidth: '100%' }}
    />
  );
};

export default Logo;