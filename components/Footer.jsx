// src/components/Footer.jsximport React from 'react';
import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-[#FFD700]/20">
      <div className="container mx-auto px-4 text-center">
        <div className="text-[#FFD700] font-serif text-xl mb-4">Almahairi Perfumes</div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Almahairi Perfumes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}