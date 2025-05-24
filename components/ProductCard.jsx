// src/components/ProductCard.jsx
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaEye, FaShippingFast } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ProductModal from './ProductModal';
import React from 'react';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTouchActive, setIsTouchActive] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation();

  const openModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const message = encodeURIComponent(`Hi Jawad, I'm interested in ${product.name}`);
    window.open(`https://wa.me/+97333445566?text=${message}`, '_blank');
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsTouchActive(true);
  };

  const handleTouchEnd = () => {
    // Keep the touch state active for a short duration to allow button clicks
    setTimeout(() => {
      setIsTouchActive(false);
    }, 300);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div 
        className="group relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Card Container */}
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-black to-[#FFD700] p-[1px] cursor-pointer transition-all duration-300 hover:from-[#FFD700] hover:to-black">
          <div className="relative h-full bg-black rounded-lg overflow-hidden">
            {/* Image Container with Zoom Effect */}
            <div 
              className="aspect-square overflow-hidden cursor-pointer"
              onClick={openModal}
            >
              <div className="relative w-full h-full transform transition-transform duration-700 group-hover:scale-110">
                {/* Blur placeholder */}
                <div 
                  className={`absolute inset-0 bg-gray-900 transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{
                    backgroundImage: `url(${product.image}?w=10)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(10px)'
                  }}
                />
                <img
                  src={product.image}
                  alt={product.name}
                  className={`h-full w-full object-cover object-center transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={handleImageLoad}
                />
                {/* Floating Action Buttons */}
                <div 
                  className={`absolute inset-0 transition-all duration-300 flex items-center justify-center gap-2
                    ${isTouchActive || window.matchMedia('(hover: hover)').matches ? 
                      'group-hover:bg-black/60' : 'bg-transparent'}`}
                >
                  <button
                    onClick={openModal}
                    className={`p-2 bg-white text-black rounded-full transition-all duration-300 hover:bg-[#FFD700]
                      transform opacity-0
                      ${isTouchActive || window.matchMedia('(hover: hover)').matches ? 
                        'group-hover:opacity-100 group-hover:translate-y-0' : ''}`}
                    title={t('products.quickView')}
                  >
                    <FaEye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className={`p-2 bg-green-600 text-white rounded-full transition-all duration-300 hover:bg-green-700
                      transform opacity-0 translate-y-4 hidden md:block
                      ${isTouchActive || window.matchMedia('(hover: hover)').matches ? 
                        'group-hover:opacity-100 group-hover:translate-y-0' : ''}`}
                    title={t('products.contact')}
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-3 space-y-1 bg-black">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-serif text-[#FFD700] group-hover:text-white transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400">{product.tagline}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-[#FFD700] text-sm mr-1">{product.rating}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFD700]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              
              {/* Price with gradient background */}
              <div className="inline-block px-2 py-0.5 rounded-full bg-gradient-to-r from-[#FFD700]/20 to-transparent">
                <span className="text-white text-sm font-semibold">
                  {product.price} <span className="text-[#FFD700]">AED</span>
                  <span className="mr-1 text-xs text-gray-400"> | </span>
                  <span className="text-[#FFD700] text-xs">درهم اماراتي</span>
                </span>
              </div>

              {/* Notes Preview */}
              <div className="pt-1 border-t border-gray-800">
                <p className="text-xs text-gray-400 line-clamp-1">
                  {t('products.notes.top')}: {product.notes?.top}
                </p>
              </div>

              {/* Free Shipping Badge */}
              <div className="flex items-center justify-center mt-2 py-1.5 bg-gradient-to-r from-[#FFD700]/10 to-transparent rounded-lg">
                <FaShippingFast className="w-4 h-4 text-[#FFD700] mr-2" />
                <span className="text-xs text-gray-300">{t('products.freeShipping', 'Free Shipping')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Size Badge */}
        <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/80 rounded-full text-xs text-[#FFD700] backdrop-blur-sm">
          {product.size}
        </div>
      </div>

      {/* Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={product}
      />
    </>
  );
}