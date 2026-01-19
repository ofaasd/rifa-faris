import React from 'react';

export const Ornament: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex justify-center items-center my-6 opacity-60 ${className}`}>
    <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 0C60 0 40 10 0 10C40 10 60 20 60 20C60 20 80 10 120 10C80 10 60 0 60 0Z" fill="#0F2854" />
    </svg>
  </div>
);