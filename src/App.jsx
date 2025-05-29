// src/App.jsx
import { useState, useEffect, Suspense, lazy, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductFilter from '../components/ProductFilter';
import ProductCard from '../components/ProductCard';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import React from 'react';
import './i18n/config';
import { sampleProducts } from './data/products';

// Lazy load components that are not immediately visible
const About = lazy(() => import('../components/About'));
const FAQ = lazy(() => import('../components/FAQ'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-[200px] flex items-center justify-center">
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 border-4 border-[#FFD700]/20 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-[#FFD700] rounded-full border-t-transparent animate-spin"></div>
    </div>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState(sampleProducts);
  const [visibleCount, setVisibleCount] = useState(2);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { i18n, t } = useTranslation();
  const containerRef = useRef(null);

  // Handle RTL/LTR layout
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Load saved ratings from localStorage
  useEffect(() => {
    const savedRatings = localStorage.getItem('productRatings');
    if (savedRatings) {
      const parsedRatings = JSON.parse(savedRatings);
      setProducts(products.map(product => ({
        ...product,
        rating: parsedRatings[product.id] || product.rating
      })));
    }
  }, []);

  // Handle rating changes
  const handleRatingChange = (productId, newRating) => {
    // Update products state
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, rating: newRating } : product
    );
    setProducts(updatedProducts);

    // Save to localStorage
    const savedRatings = JSON.parse(localStorage.getItem('productRatings') || '{}');
    savedRatings[productId] = newRating;
    localStorage.setItem('productRatings', JSON.stringify(savedRatings));
  };

  // Filter by category
  const filteredProducts = products.filter((product) => {
    return selectedCategory === 'all' || product.category === selectedCategory;
  });

  // Reset visibleCount when category changes
  useEffect(() => {
    setVisibleCount(2);
  }, [selectedCategory]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (isLoadingMore) return;
      const grid = containerRef.current;
      if (!grid) return;
      const rect = grid.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight + 100) {
        if (visibleCount < filteredProducts.length) {
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + 2, filteredProducts.length));
            setIsLoadingMore(false);
          }, 600); // Simulate loading
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, filteredProducts.length, isLoadingMore]);

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
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {filteredProducts.slice(0, visibleCount).map((product) => (
                <div key={product.id} className="transform hover:-translate-y-1 transition-transform duration-300">
                  <ProductCard 
                    product={product}
                    onRatingChange={handleRatingChange}
                  />
                </div>
              ))}
            </div>
            {isLoadingMore && <LoadingFallback />}
            {visibleCount < filteredProducts.length && !isLoadingMore && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => {
                    setIsLoadingMore(true);
                    setTimeout(() => {
                      setVisibleCount((prev) => Math.min(prev + 2, filteredProducts.length));
                      setIsLoadingMore(false);
                    }, 600);
                  }}
                  className="px-6 py-2 bg-[#FFD700] text-black rounded-full font-semibold hover:bg-[#B8860B] transition-all"
                >
                  {t('hero.cta', 'Show More')}
                </button>
              </div>
            )}
          </div>
        </section>
        <Suspense fallback={<LoadingFallback />}>
          <section id="about">
            <About />
            <FAQ />
          </section>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}