import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-[#FFD700]/20 rounded-full animate-spin">
          {/* Inner gradient ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-[#FFD700] rounded-full animate-spin-reverse"></div>
        </div>
        
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 