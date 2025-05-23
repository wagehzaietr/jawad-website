// src/components/QuickViewModal.jsx
import React from 'react';

export default function QuickViewModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-[#1A1A1A] rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">{product.name}</h2>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400 mr-1">{'★'.repeat(Math.floor(product.rating))}</span>
                <span className="text-gray-400 ml-1">{product.rating.toFixed(1)}</span>
              </div>
              <p className="text-[#D4AF37] text-xl mt-2 font-medium">{product.price}</p>
              <p className="text-gray-300 mt-4">
                {`Luxurious ${product.category} fragrance with deep notes of oud, amber, and musk.`}
              </p>
            </div>
            <a
              href={`https://wa.me/97312345678?text=I%20want%20to%20buy%20 ${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-[#D4AF37] text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition inline-block text-center"
            >
              Shop on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}