'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999,
        backgroundColor: '#024BA4',
        color: '#ffffff',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
      }}
      className="scroll-top-btn"
    >
      <ArrowUp size={22} strokeWidth={2.5} />
      <style jsx>{`
        .scroll-top-btn:hover {
          background-color: #0254b8 !important;
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35) !important;
        }
      `}</style>
    </button>
  );
}
