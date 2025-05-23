// src/components/About.jsx
import { useTranslation } from 'react-i18next';
import React from 'react';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-b from-black to-[#111]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#FFD700] mb-6">{t('about.title')}</h2>
          <div className="space-y-6 text-gray-300">
            <p>{t('about.description1')}</p>
            <p>{t('about.description2')}</p>
            <p>{t('about.description3')}</p>
            <p className="text-[#FFD700] font-serif italic mt-8">
              {t('about.quote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}