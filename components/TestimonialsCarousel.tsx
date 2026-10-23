'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Did you hear? This app can notify your friends if you go off the grid for months !',
    name: 'Noah Liam',
    handle: '@noah_liam',
    avatar:
      'https://mylovingday.com/wp-content/uploads/elementor/thumbs/account-1-r028d1z5nsxcw36pvs7jofox1fer0tcb9qxuz4cqbg.png',
  },
  {
    quote:
      'I heard the app sends a loving nudge to your friends if they haven’t been active – like a digital guardian angel !',
    name: 'Olivia Oliver',
    handle: '@olivia_o',
    avatar:
      'https://mylovingday.com/wp-content/uploads/elementor/thumbs/account-1-r028d1z5nsxcw36pvs7jofox1fer0tcb9qxuz4cqbg.png',
  },
  {
    quote:
      'Word is, you can choose exactly who gets your memories and when – it’s like creating your own legacy timeline!',
    name: 'Flyn',
    handle: '@flyn_legacy',
    avatar:
      'https://mylovingday.com/wp-content/uploads/elementor/thumbs/account-1-r028d1z5nsxcw36pvs7jofox1fer0tcb9qxuz4cqbg.png',
  },
  {
    quote:
      'I have listened that you can record your voice with a photo OMG !! That’s great',
    name: 'Charle',
    handle: '@charle_voice',
    avatar:
      'https://mylovingday.com/wp-content/uploads/elementor/thumbs/account-1-r028d1z5nsxcw36pvs7jofox1fer0tcb9qxuz4cqbg.png',
  },
];

export default function TestimonialsCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '110px',
        paddingBottom: '120px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        <div className="testimonials-row-layout">
          {/* Left Column: Heading & Text */}
          <motion.div
            className="test-left-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              Who Believed In Us
            </span>

            <h2
              className="test-title"
              style={{
                fontSize: '52px',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#000000',
                lineHeight: 1.1,
                marginBottom: '18px',
                letterSpacing: '-0.02em',
              }}
            >
              Whispers of <br />
              <span className="serif-accent" style={{ color: '#0254B8' }}>
                innovation
              </span>
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: '#475569',
                lineHeight: 1.75,
                maxWidth: '420px',
              }}
            >
              The app’s unique features, like check-up notifications and memories
              sharing, have everyone talking. It’s redefining how we create and share
              lasting legacies.
            </p>

            {/* Navigation Arrows */}
            <div
              style={{
                display: 'flex',
                gap: '14px',
                marginTop: '36px',
              }}
            >
              <button
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                className="test-arrow-btn"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid rgba(2, 75, 164, 0.25)',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(2, 75, 164, 0.08)',
                }}
              >
                <ChevronLeft size={22} color="#0254B8" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next Testimonial"
                className="test-arrow-btn primary"
                style={{
                  backgroundColor: '#024BA4',
                  border: '1.5px solid #024BA4',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(2, 75, 164, 0.3)',
                }}
              >
                <ChevronRight size={22} color="#FFFFFF" />
              </button>
            </div>
          </motion.div>

          {/* Right Area: 3 Cards Row (Finix 00:24 - 00:26 style) */}
          <div className="test-cards-col">
            <div className="test-grid">
              {[0, 1, 2].map((offset) => {
                const item =
                  testimonials[(startIndex + offset) % testimonials.length];
                return (
                  <motion.div
                    key={`${item.name}-${offset}`}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: offset * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="test-card-box"
                    style={{
                      borderRadius: '24px',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      padding: '30px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      minHeight: '290px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div>
                      {/* Top User Info */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          marginBottom: '20px',
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.avatar}
                          alt={item.name}
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid #0254B8',
                          }}
                        />
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <h4
                              style={{
                                fontSize: '18px',
                                fontWeight: 800,
                                color: '#0F172A',
                              }}
                            >
                              {item.name}
                            </h4>
                            <CheckCircle2 size={15} color="#0254B8" fill="#E0F2FE" />
                          </div>
                          <span style={{ fontSize: '13px', color: '#94A3B8' }}>{item.handle}</span>
                        </div>
                      </div>

                      {/* Quote Text */}
                      <p
                        style={{
                          fontSize: '15.5px',
                          color: '#334155',
                          lineHeight: 1.65,
                          fontWeight: 500,
                          marginBottom: '24px',
                        }}
                      >
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Bottom 5 Stars Image */}
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/stars.png"
                        alt="5 Stars"
                        style={{
                          width: '100px',
                          height: 'auto',
                          display: 'block',
                        }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://mylovingday.com/wp-content/uploads/2025/01/stars.png';
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-row-layout {
          display: grid;
          grid-template-columns: 1fr 2.2fr;
          gap: 60px;
          align-items: center;
        }
        .test-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .test-card-box:hover {
          border-color: rgba(2, 75, 164, 0.3) !important;
          box-shadow: 0 18px 40px rgba(2, 75, 164, 0.1) !important;
          background-color: #FFFFFF !important;
        }
        .test-arrow-btn:hover {
          transform: scale(1.08);
        }
        @media (max-width: 1150px) {
          .testimonials-row-layout {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .test-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .test-grid > :nth-child(3) {
            display: none;
          }
        }
        @media (max-width: 768px) {
          section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
          .test-title {
            font-size: clamp(28px, 7.5vw, 38px) !important;
            line-height: 1.15 !important;
          }
          .test-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .test-grid > :nth-child(2) {
            display: none;
          }
          :global(.test-card-box) {
            min-height: auto !important;
            padding: 22px 18px !important;
            border-radius: 18px !important;
          }
        }
        @media (max-width: 430px) {
          .test-title {
            font-size: clamp(26px, 7vw, 30px) !important;
          }
        }
      `}</style>
    </section>
  );
}
