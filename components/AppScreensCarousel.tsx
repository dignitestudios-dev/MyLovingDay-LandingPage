'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const screens = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
  '/images/4.png',
  '/images/5.png',
  '/images/6.png',
  '/images/7.png',
  '/images/8.png',
  '/images/9.png',
  '/images/10.png',
];

export default function AppScreensCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = screens.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  return (
    <section
      id="screens"
      style={{
        backgroundColor: '#F6F9FE',
        paddingTop: '90px',
        paddingBottom: '100px',
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        {/* Title & Subtitle with ScrollReveal */}
        <ScrollReveal delay={100}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2
              className="screens-title"
              style={{
                fontSize: '56px',
                fontWeight: 900,
                color: '#000000',
                marginBottom: '10px',
              }}
            >
              Simple &amp; Beautiful Interface
            </h2>
            <h5
              className="screens-sub"
              style={{
                fontSize: '32px',
                fontWeight: 600,
                color: '#000000',
                fontStyle: 'italic',
              }}
            >
              “ Carry Your Love Across Time “
            </h5>
          </div>
        </ScrollReveal>

        {/* Carousel Container */}
        <ScrollReveal delay={200}>
          <div style={{ position: 'relative', width: '100%', padding: '0 10px' }}>
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Screens"
              style={{
                position: 'absolute',
                left: '-16px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              className="nav-btn"
            >
              <ChevronLeft size={26} color="#000000" />
            </button>

            {/* Slider Track */}
            <div
              style={{
                overflow: 'hidden',
                padding: '24px 0',
                margin: '0 16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: `translateX(-${currentIndex * 20.8}%)`,
                }}
                className="carousel-track"
              >
                {[...screens, ...screens].map((src, i) => (
                  <div
                    key={i}
                    style={{
                      flex: '0 0 calc(20% - 13px)',
                      minWidth: '170px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                    className="screen-slide"
                  >
                    <div
                      style={{
                        background: 'transparent',
                        transition: 'transform 0.35s ease',
                      }}
                      className="screen-frame"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`App Screen ${i + 1}`}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.12))',
                        }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next Screens"
              style={{
                position: 'absolute',
                right: '-16px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 20,
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              className="nav-btn"
            >
              <ChevronRight size={26} color="#000000" />
            </button>
          </div>
        </ScrollReveal>

        {/* Carousel Progress Dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '20px',
          }}
        >
          {screens.slice(0, 5).map((_, dotIdx) => {
            const isActive = currentIndex % 5 === dotIdx;
            return (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide group ${dotIdx + 1}`}
                style={{
                  width: isActive ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: isActive ? '#024BA4' : '#cbd5e1',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .nav-btn:hover {
          background-color: #0254b8 !important;
          color: #ffffff !important;
          transform: translateY(-50%) scale(1.06) !important;
        }
        .nav-btn:hover :global(svg) {
          stroke: #ffffff !important;
        }
        .screen-frame:hover {
          transform: translateY(-8px) scale(1.03);
        }
        @media (max-width: 1024px) {
          .carousel-track {
            transform: translateX(-${currentIndex * 34}%);
          }
          .screen-slide {
            flex: 0 0 calc(33.333% - 12px) !important;
          }
          .screens-title {
            font-size: 42px !important;
          }
          .screens-sub {
            font-size: 24px !important;
          }
        }
        @media (max-width: 640px) {
          .carousel-track {
            transform: translateX(-${currentIndex * 62}%);
          }
          .screen-slide {
            flex: 0 0 calc(60% - 10px) !important;
          }
          .screens-title {
            font-size: 32px !important;
          }
          .screens-sub {
            font-size: 20px !important;
          }
          .nav-btn {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
