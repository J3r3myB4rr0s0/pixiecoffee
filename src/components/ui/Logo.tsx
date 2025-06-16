import React from 'react';
import { Coffee, CircleUser } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'small' | 'default' | 'large';
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  size = 'default' 
}) => {
  // Size classes
  const sizeClasses = {
    small: 'text-xl',
    default: 'text-2xl',
    large: 'text-3xl'
  };
  
  // Color classes
  const colorClasses = {
    light: 'text-white',
    dark: 'text-dark'
  };
  
  // Icon size based on logo size
  const iconSize = {
    small: 18,
    default: 24,
    large: 30
  };
  
  return (
    <div className={`flex items-center font-heading font-bold ${sizeClasses[size]} ${colorClasses[variant]}`}>
      <span className="flex items-center">
        <span className="text-primary">
          <Coffee size={iconSize[size]} />
        </span>
        <span className="text-secondary ml-1">
          <CircleUser size={iconSize[size]} />
        </span>
      </span>
      <span className="ml-2">
        <span className="text-primary">Pixie</span>
        <span className="text-secondary">Coffee</span>
        <span className={variant === 'light' ? 'text-white' : 'text-dark'}>Place</span>
      </span>
    </div>
  );
};

export default Logo;