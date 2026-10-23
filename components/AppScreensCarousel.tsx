'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const screens = [
  { src: '/images/1.png', label: 'Home Vault' },
  { src: '/images/2.png', label: 'Inactivity Check' },
  { src: '/images/3.png', label: 'Journeys & Places' },
  { src: '/images/4.png', label: 'Memory Albums' },
  { src: '/images/5.png', label: 'Message Deliveries' },
  { src: '/images/6.png', label: 'Family Tree' },
  { src: '/images/7.png', label: 'Voice Recordings' },
  { src: '/images/8.png', label: 'Photo Moments' },
  { src: '/images/9.png', label: 'Trusted Circles' },
  { src: '/images/10.png', label: 'Security & Keys' },
];

export default function AppScreensCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = screens.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Touch Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 45) {
      handlePrev();
    } else if (deltaX < -45) {
      handleNext();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4200);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  return (
    <section
      id="screens"
      style={{
        backgroundColor: '#F8FAFC',
        paddingTop: '110px',
        paddingBottom: '120px',
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0, 210, 255, 0.1) 0%, rgba(2, 75, 164, 0.05) 60%, transparent 80%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom">
        {/* Title Header (Finix Style 00:12) */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '48px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            style={{
              color: '#024BA4',
              fontSize: '13.5px',
              fontWeight: 800,
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '14px',
              letterSpacing: '1.5px',
              background: 'rgba(2, 75, 164, 0.08)',
              padding: '6px 18px',
              borderRadius: '9999px',
            }}
          >
            <Sparkles size={14} color="#024BA4" />
            Visual Experience
          </span>

          <h2
            className="screens-title"
            style={{
              fontSize: '52px',
              fontWeight: 900,
              color: '#000000',
              marginBottom: '10px',
              letterSpacing: '-0.02em',
            }}
          >
            Simple &amp; Beautiful Interface
          </h2>

          <h5
            className="serif-accent screens-sub"
            style={{
              fontSize: '28px',
              fontWeight: 500,
              color: '#0254B8',
            }}
          >
            “ Carry Your Love Across Time “
          </h5>
        </motion.div>

        {/* 3D Depth Perspective Carousel Stage with Touch Swipe */}
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            position: 'relative',
            width: '100%',
            perspective: '1200px',
            overflow: 'hidden',
          }}
        >
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Screens"
            className="carousel-nav-btn prev"
            style={{
              position: 'absolute',
              left: isMobile ? '4px' : '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 35,
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(2, 75, 164, 0.15)',
              borderRadius: '50%',
              width: isMobile ? '42px' : '52px',
              height: isMobile ? '42px' : '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <ChevronLeft size={isMobile ? 20 : 24} color="#024BA4" />
          </button>

          {/* Cards Track */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: isMobile ? '420px' : '560px',
              position: 'relative',
              width: '100%',
            }}
          >
            {screens.map((screen, idx) => {
              // Calculate relative distance from currentIndex (-2, -1, 0, 1, 2)
              let offset = (idx - currentIndex + total) % total;
              if (offset > total / 2) offset -= total;

              // On mobile show center + 1 peek on each side; on desktop show 2
              const maxOffset = isMobile ? 1 : 2;
              const isVisible = Math.abs(offset) <= maxOffset;
              if (!isVisible) return null;

              const isCenter = offset === 0;
              const xStep = isMobile ? 130 : 240;
              const xTranslate = offset * xStep;
              const rotateY = offset * (isMobile ? -14 : -18);
              const scale = isCenter ? (isMobile ? 1.02 : 1.05) : isMobile ? 0.8 : 0.85;
              const opacity = isCenter ? 1 : Math.abs(offset) === 1 ? (isMobile ? 0.6 : 0.7) : 0.35;
              const zIndex = 20 - Math.abs(offset) * 5;

              return (
                <motion.div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  animate={{
                    x: xTranslate,
                    scale: scale,
                    rotateY: rotateY,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    cursor: isCenter ? 'default' : 'pointer',
                    transformStyle: 'preserve-3d',
                  }}
                  className="carousel-3d-card"
                >
                  <div
                    style={{
                      width: isMobile ? '195px' : '260px',
                      borderRadius: isMobile ? '26px' : '34px',
                      padding: isMobile ? '6px' : '10px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div
                      style={{
                        borderRadius: isMobile ? '20px' : '26px',
                        overflow: 'hidden',
                        position: 'relative',
                        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.18))',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={screen.src}
                        alt={`Screen ${idx + 1}`}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next Screens"
            className="carousel-nav-btn next"
            style={{
              position: 'absolute',
              right: isMobile ? '4px' : '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 35,
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(2, 75, 164, 0.15)',
              borderRadius: '50%',
              width: isMobile ? '42px' : '52px',
              height: isMobile ? '42px' : '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <ChevronRight size={isMobile ? 20 : 24} color="#024BA4" />
          </button>
        </div>

        {/* Carousel Pagination Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '28px',
          }}
        >
          {screens.map((_, dotIdx) => {
            const isActive = currentIndex === dotIdx;
            return (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                style={{
                  width: isActive ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: isActive ? '#024BA4' : '#CBD5E1',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .carousel-nav-btn:hover {
          background-color: #024BA4 !important;
          transform: translateY(-50%) scale(1.08) !important;
        }
        .carousel-nav-btn:hover :global(svg) {
          stroke: #FFFFFF !important;
        }
        @media (max-width: 768px) {
          section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
          .screens-title {
            font-size: clamp(28px, 7.5vw, 38px) !important;
            line-height: 1.15 !important;
          }
          .screens-sub {
            font-size: clamp(17px, 4.5vw, 22px) !important;
          }
          .carousel-nav-btn {
            background-color: rgba(255, 255, 255, 0.95) !important;
          }
        }
        @media (max-width: 430px) {
          .screens-title {
            font-size: clamp(26px, 7vw, 30px) !important;
          }
        }
      `}</style>
    </section>
  );
}
