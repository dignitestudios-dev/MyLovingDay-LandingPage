'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    quote:
      'Did you hear? This app can notify your friends if you go off the grid for months !',
    name: 'Noah Liam',
    avatar:
      'https://mylovingday.com/wp-content/uploads/elementor/thumbs/account-1-r028d1z5nsxcw36pvs7jofox1fer0tcb9qxuz4cqbg.png',
  },
  {
    quote:
      'I heard the app sends a loving nudge to your friends if they haven’t been active – like a digital guardian angel !',
    name: 'Olivia Oliver',
    avatar:
      'https://mylovingday.com/wp-content/uploads/elementor/thumbs/account-1-r028d1z5nsxcw36pvs7jofox1fer0tcb9qxuz4cqbg.png',
  },
  {
    quote:
      'Word is, you can choose exactly who gets your memories and when – it’s like creating your own legacy timeline!',
    name: 'Flyn',
    avatar:
      'https://mylovingday.com/wp-content/uploads/elementor/thumbs/account-1-r028d1z5nsxcw36pvs7jofox1fer0tcb9qxuz4cqbg.png',
  },
  {
    quote:
      'I have listened that you can record your voice with a photo OMG !! That’s great',
    name: 'Charle',
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
        backgroundColor: '#ffffff',
        paddingTop: '90px',
        paddingBottom: '100px',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom">
        <div className="testimonials-row-layout">
          {/* Left Column: Heading & Text */}
          <ScrollReveal delay={100} className="test-left-col">
            <span
              style={{
                color: '#024BA4',
                fontSize: '18px',
                fontWeight: 900,
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '10px',
                letterSpacing: '1px',
              }}
            >
              WHO BELIEVED IN US
            </span>
            <h2
              className="test-title"
              style={{
                fontSize: '52px',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#000000',
                lineHeight: 1.15,
                marginBottom: '18px',
              }}
            >
              Whispers of Innovation
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#334155',
                lineHeight: 1.75,
              }}
            >
              The app’s unique features, like check-up notifications and memories
              sharing, have everyone talking. It’s redefining how we create and share
              lasting legacies.
            </p>

            {/* Arrows below description */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '32px',
              }}
            >
              <button
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #0254B8',
                  borderRadius: '50%',
                  width: '46px',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(2, 75, 164, 0.1)',
                }}
                className="arrow-btn"
              >
                <ChevronLeft size={22} color="#0254B8" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Testimonial"
                style={{
                  backgroundColor: '#0254B8',
                  border: '2px solid #0254B8',
                  borderRadius: '50%',
                  width: '46px',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(2, 75, 164, 0.25)',
                }}
                className="arrow-btn"
              >
                <ChevronRight size={22} color="#ffffff" />
              </button>
            </div>
          </ScrollReveal>

          {/* Right Area: 3 Cards Row */}
          <div className="test-cards-col">
            <div className="test-grid">
              {[0, 1, 2].map((offset) => {
                const item =
                  testimonials[(startIndex + offset) % testimonials.length];
                return (
                  <ScrollReveal key={offset} delay={150 + offset * 120}>
                    <div className="test-card">
                      {/* Card box */}
                      <div
                        style={{
                          border: '2px solid #0254B8',
                          borderRadius: '12px',
                          backgroundColor: '#F6F9FE',
                          padding: '24px 20px',
                          marginBottom: '16px',
                          minHeight: '185px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          position: 'relative',
                          overflow: 'hidden',
                          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        }}
                        className="quote-box"
                      >
                        <Quote
                          size={40}
                          color="rgba(2, 75, 164, 0.08)"
                          style={{
                            position: 'absolute',
                            right: '12px',
                            top: '12px',
                            pointerEvents: 'none',
                          }}
                        />

                        <p
                          style={{
                            fontSize: '16px',
                            color: '#000000',
                            lineHeight: 1.55,
                            fontWeight: 500,
                            position: 'relative',
                            zIndex: 1,
                          }}
                        >
                          {item.quote}
                        </p>
                        <div style={{ marginTop: '16px', position: 'relative', zIndex: 1 }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="https://mylovingday.com/wp-content/uploads/2025/01/stars.png"
                            alt="5 Stars"
                            style={{
                              width: '115px',
                              height: 'auto',
                              display: 'block',
                            }}
                          />
                        </div>
                      </div>

                      {/* Author Info */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          paddingLeft: '6px',
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.avatar}
                          alt={item.name}
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid #0254B8',
                          }}
                        />
                        <h4
                          style={{
                            fontSize: '20px',
                            fontWeight: 800,
                            color: '#000000',
                          }}
                        >
                          {item.name}
                        </h4>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-row-layout {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 50px;
          align-items: center;
        }
        .test-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .quote-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 28px rgba(2, 75, 164, 0.16) !important;
        }
        .arrow-btn:hover {
          transform: scale(1.08);
        }
        @media (max-width: 1100px) {
          .testimonials-row-layout {
            grid-template-columns: 1fr;
          }
          .test-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .test-grid > :nth-child(3) {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .test-grid {
            grid-template-columns: 1fr;
          }
          .test-grid > :nth-child(2) {
            display: none;
          }
          .test-title {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
