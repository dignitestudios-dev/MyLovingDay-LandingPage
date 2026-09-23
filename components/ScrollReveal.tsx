'use client';

import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  style = {},
}: ScrollRevealProps) {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('reveal-active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`reveal-init ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
