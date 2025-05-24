// Hero.jsx
import { useTranslation } from 'react-i18next';
import React from 'react';
import heroImage from '../assets/hero.jpg';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#FFD700] mb-6 leading-tight">
          {t('hero.title')},
          <br />
          <span className="text-white">{t('hero.subtitle')}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        <button
          onClick={scrollToProducts}
          className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-semibold rounded-full hover:from-[#B8860B] hover:to-[#FFD700] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FFD700]/20"
        >
          {t('hero.cta')}
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
}
