// src/App.jsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductFilter from '../components/ProductFilter';
import ProductCard from '../components/ProductCard';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import React from 'react';
import './i18n/config';
import { sampleProducts } from './data/products';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { i18n, t } = useTranslation();

  // Handle RTL/LTR layout
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Filter by category
  const filteredProducts = sampleProducts.filter((product) => {
    return selectedCategory === 'all' || product.category === selectedCategory;
  });

  return (
    <div className={`min-h-screen bg-black text-white font-sans ${i18n.language === 'ar' ? 'font-arabic' : ''}`}>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="products" className="py-16 px-4 bg-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif text-center mb-4 text-[#FFD700]">{t('products.title')}</h2>
            <p className="text-center text-gray-400 mb-8 max-w-xl mx-auto">
              {t('products.description')}
            </p>
            <ProductFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {filteredProducts.map((product) => (
                <div key={product.id} className="transform hover:-translate-y-1 transition-transform duration-300">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about">
          <About />
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}