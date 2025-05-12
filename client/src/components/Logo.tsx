import React from 'react';

export default function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="web4logo" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2c2c2c" />
          <stop offset="1" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>
      {/* Main circle background */}
      <circle cx="20" cy="20" r="18" fill="url(#web4logo)" />
      
      {/* Download arrow */}
      <path
        d="M20 10v12M16 18l4 4 4-4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Circular arrow */}
      <path
        d="M12 24a8 8 0 1 0 16 0"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
} 