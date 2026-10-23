
'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 700, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 700, damping: 40 });

  const ringX = useSpring(mouseX, { stiffness: 240, damping: 28 });
  const ringY = useSpring(mouseY, { stiffness: 240, damping: 28 });

  useEffect(() => {
    const desktop = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!desktop || reducedMotion) return;

    const root = document.documentElement;
    root.classList.add('custom-cursor-active');

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      setHovered(
        !!target?.closest(
          'a, button, input, select, textarea, [role="button"]'
        )
      );
    };

    const hide = () => setVisible(false);
    const show = () => setVisible(true);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseleave', hide);
    window.addEventListener('mouseenter', show);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', hide);
      window.removeEventListener('mouseenter', show);
      root.classList.remove('custom-cursor-active');
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 34,
          height: 34,
          borderRadius: '50%',
          border: '1px solid rgba(45, 130, 255, 0.8)',
          background: hovered
            ? 'rgba(45, 130, 255, 0.08)'
            : 'transparent',
          pointerEvents: 'none',
          zIndex: 999998,
        }}
      />

      {/* Small center dot */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 0.7 : 1,
        }}
        transition={{ duration: 0.15 }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#2878FF',
          boxShadow: '0 0 8px rgba(40, 120, 255, 0.35)',
          pointerEvents: 'none',
          zIndex: 999999,
        }}
      />

      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          html.custom-cursor-active,
          html.custom-cursor-active body,
          html.custom-cursor-active body * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
