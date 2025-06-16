import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };
  
  return (
    <div className="language-selector">
      <button 
        className="language-selector-button"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe size={18} />
        <span className="ml-1 uppercase">{i18n.language.substring(0, 2)}</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          <button
            className="language-option"
            onClick={() => changeLanguage('es')}
          >
            Español
          </button>
          <button
            className="language-option"
            onClick={() => changeLanguage('en')}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;