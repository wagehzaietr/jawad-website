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
      className="fixed bottom-24 right-4 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* WhatsApp Button */}
      <div className="relative">
        {/* Tooltip */}
        <span 
          className={`absolute right-full mr-3 whitespace-nowrap rounded bg-white px-2 py-1 text-xs text-black shadow-lg transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t('contact.messageBtn')}
          {/* Arrow */}
          <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-white"></span>
        </span>

        {/* Button */}
        <button
          onClick={handleWhatsAppClick}
          className="group relative flex items-center"
        >
          <div className="bg-green-600 p-2.5 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 group-hover:shadow-green-600/50">
            <FaWhatsapp className="w-4 h-4 text-white" />
          </div>
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full animate-ping bg-green-600/40 duration-1000"></div>
        </button>
      </div>
    </div>
  );
} 