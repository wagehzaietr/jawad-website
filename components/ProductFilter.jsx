// src/components/ProductFilter.jsx
import { useTranslation } from 'react-i18next';
import React from 'react';

export default function ProductFilter({ selectedCategory, setSelectedCategory }) {
  const { t } = useTranslation();

  const categories = [
    { id: 'all', label: t('products.categories.all') },
    { id: 'men', label: t('products.categories.men') },
    { id: 'women', label: t('products.categories.women') }
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex p-1 rounded-full bg-gradient-to-r from-black to-[#FFD700] shadow-lg">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-[#FFD700] text-black font-semibold shadow-md'
                : 'text-[#FFD700] hover:bg-black/50'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}