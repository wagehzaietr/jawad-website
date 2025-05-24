import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function FloatingWhatsApp() {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+971551358558', '_blank');
  };

  return (
    <div 
      className="fixed bottom-24 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex items-center"
      >
        {/* Tooltip */}
        <span 
          className={`absolute right-full mr-4 whitespace-nowrap rounded bg-white px-3 py-1.5 text-sm text-black shadow-lg transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t('contact.messageBtn')}
          {/* Arrow */}
          <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-white"></span>
        </span>

        {/* Button */}
        <div className="bg-green-600 p-3.5 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 group-hover:shadow-green-600/50">
          <FaWhatsapp className="w-6 h-6 text-white" />
        </div>

        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full animate-ping bg-green-600/40 duration-1000"></div>
      </button>
    </div>
  );
} 