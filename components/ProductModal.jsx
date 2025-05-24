import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useCallback } from 'react';
import { FaWhatsapp, FaShippingFast } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function ProductModal({ isOpen, onClose, product }) {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!product) {
    return null;
  }

  const handleWhatsAppClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const message = encodeURIComponent(`Hi Jawad, I'm interested in ${product.name}`);
    window.open(`https://wa.me/+97333445566?text=${message}`, '_blank');
  }, [product.name]);

  const handleImageClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  }, [onClose]);

  const notes = product.notes || {};

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg md:max-w-2xl transform overflow-hidden rounded-2xl bg-black p-4 md:p-6 text-left align-middle shadow-xl transition-all border border-[#FFD700]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="relative aspect-square">
                    <div className="w-full h-full">
                      {/* Blur placeholder */}
                      <div 
                        className={`absolute inset-0 bg-gray-900 transition-opacity duration-200 ${
                          imageLoaded ? 'opacity-0' : 'opacity-100'
                        }`}
                        style={{
                          backgroundImage: `url(${product.image}?w=10)`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          filter: 'blur(10px)'
                        }}
                      />
                      <div 
                        onClick={handleImageClick}
                        className="relative w-full h-full cursor-pointer"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`w-full h-full object-cover rounded-lg transition-opacity duration-200 ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                          }`}
                          loading="lazy"
                          onLoad={() => setImageLoaded(true)}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center py-1.5 px-3 bg-black/80 backdrop-blur-sm rounded-lg">
                      <FaShippingFast className="w-4 h-4 text-[#FFD700] mr-2" />
                      <span className="text-xs md:text-sm text-white">{t('products.freeShipping')} - {t('products.freeShippingAr')}</span>
                    </div>
                  </div>

                  <div className="overflow-y-auto max-h-[300px] md:max-h-[600px] pr-2 overscroll-contain custom-scrollbar">
                    <h3 className="text-xl md:text-2xl font-serif text-[#FFD700] mb-2">{product.name}</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-4">{product.description}</p>

                    <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                      <div className="space-y-2 md:space-y-3">
                        <h4 className="text-base md:text-lg font-semibold text-[#FFD700] border-b border-gray-800 pb-2">
                          {t('products.notes.title')}
                        </h4>
                        {notes.top && (
                          <div>
                            <h5 className="text-sm font-semibold text-[#FFD700]">{t('products.notes.top')}</h5>
                            <p className="text-xs md:text-sm text-gray-400">{notes.top}</p>
                          </div>
                        )}
                        {notes.heart && (
                          <div>
                            <h5 className="text-sm font-semibold text-[#FFD700]">{t('products.notes.heart')}</h5>
                            <p className="text-xs md:text-sm text-gray-400">{notes.heart}</p>
                          </div>
                        )}
                        {notes.base && (
                          <div>
                            <h5 className="text-sm font-semibold text-[#FFD700]">{t('products.notes.base')}</h5>
                            <p className="text-xs md:text-sm text-gray-400">{notes.base}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-gray-800 pt-3 md:pt-4 mt-3 md:mt-4">
                      <div className="flex justify-between items-center mb-3 md:mb-4">
                        <div>
                          <p className="text-xs md:text-sm text-gray-400">{t('products.price')}</p>
                          <p className="text-lg md:text-xl font-semibold text-white">
                            {product.price} <span className="text-[#FFD700]">AED</span>
                            <span className="mx-2 text-xs md:text-sm text-gray-400">|</span>
                            <span className="text-[#FFD700] text-xs md:text-sm">درهم اماراتي</span>
                          </p>
                        </div>
                        <div>
                          <p className="text-xs md:text-sm text-gray-400">{t('products.size')}</p>
                          <p className="text-lg md:text-xl font-semibold text-white">{product.size}</p>
                        </div>
                      </div>

                      <button
                        onClick={handleWhatsAppClick}
                        className="w-full py-2.5 px-4 bg-green-600/90 text-white/90 rounded-lg flex items-center justify-center gap-2.5 hover:bg-green-700 transition-all duration-200 transform active:scale-[0.98] outline-none ring-0 focus:ring-0"
                      >
                        <FaWhatsapp className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span className="text-sm font-medium tracking-wide">{t('products.contact')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 