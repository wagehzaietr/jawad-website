// src/components/Contact.jsx
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import React from 'react';

export default function Contact() {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+97333445566', '_blank');
  };

  return (
    <section id="contact" className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#FFD700] mb-6">{t('contact.title')}</h2>
          <p className="text-gray-300 mb-12">
            {t('contact.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-b from-[#111] to-black rounded-lg border border-[#FFD700]/10">
              <FaWhatsapp className="w-8 h-8 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-lg font-serif text-[#FFD700] mb-2">{t('contact.whatsapp')}</h3>
              <button
                onClick={handleWhatsAppClick}
                className="text-gray-300 hover:text-[#FFD700] transition-colors"
              >
                +973 3344 5566
              </button>
            </div>

            <div className="p-6 bg-gradient-to-b from-[#111] to-black rounded-lg border border-[#FFD700]/10">
              <FaEnvelope className="w-8 h-8 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-lg font-serif text-[#FFD700] mb-2">{t('contact.email')}</h3>
              <a
                href="mailto:contact@jawadperfumes.com"
                className="text-gray-300 hover:text-[#FFD700] transition-colors"
              >
                contact@jawadperfumes.com
              </a>
            </div>

            <div className="p-6 bg-gradient-to-b from-[#111] to-black rounded-lg border border-[#FFD700]/10">
              <FaMapMarkerAlt className="w-8 h-8 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-lg font-serif text-[#FFD700] mb-2">{t('contact.location')}</h3>
              <p className="text-gray-300">
                Manama, Bahrain
              </p>
            </div>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg inline-flex items-center space-x-2 hover:from-green-700 hover:to-green-800 transition-colors"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>{t('contact.messageBtn')}</span>
          </button>
        </div>
      </div>
    </section>
  );
}