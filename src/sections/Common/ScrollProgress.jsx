'use client'

import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollWidth(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px', // Thickness of the line
        background: 'rgba(227, 30, 36, 0.15)', // Faint red background track
        zIndex: 10000, // Above everything including Header
      }}
    >
      <div 
        style={{
          width: `${scrollWidth}%`,
          height: '100%',
          background: '#E31E24', // Your Theme Yellow
          boxShadow: '0 0 10px #E31E24', // Subtle glow effect
          transition: 'width 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default ScrollProgress;