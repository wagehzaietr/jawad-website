// src/components/Footer.jsximport React from 'react';
import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-[#FFD700]/20">
      <div className="container mx-auto px-4 text-center">
        <div className="text-[#FFD700] font-serif text-xl mb-4">Almahairi Perfumes</div>
        <p className="text-gray-400 text-sm mb-2">
          © {new Date().getFullYear()} Almahairi Perfumes. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 text-xs text-gray-500">
          <a href="/privacy-policy" className="hover:text-[#FFD700] underline">Privacy Policy</a>
          <span>|</span>
          <a href="/terms-of-service" className="hover:text-[#FFD700] underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}