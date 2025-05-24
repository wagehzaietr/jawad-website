import { useTranslation } from 'react-i18next';
import React from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-black/20 hover:bg-black/40 transition-colors duration-300"
      aria-label={`Switch to ${i18n.language === 'en' ? 'Arabic' : 'English'}`}
    >
      {i18n.language === 'en' ? (
        <>
          <svg className="w-6 h-6" viewBox="0 0 640 480">
            {/* Saudi Arabia Flag */}
            <path fill="#006c35" d="M0 0h640v480H0z"/>
            <g fill="#fff" transform="translate(160 165) scale(1.5)">
              <text
                x="0"
                y="40"
                style={{
                  font: 'bold 50px Arial',
                  fill: '#fff',
                }}
              >
                ع
              </text>
            </g>
          </svg>
          <span className="text-[#FFD700] text-xs">AR</span>
        </>
      ) : (
        <>
          <svg className="w-6 h-6" viewBox="0 0 640 480">
            {/* UK Flag */}
            <path fill="#012169" d="M0 0h640v480H0z"/>
            <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
            <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
            <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
            <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
          </svg>
          <span className="text-[#FFD700] text-xs">ENG</span>
        </>
      )}
    </button>
  );
} 