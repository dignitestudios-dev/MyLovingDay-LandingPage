'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        backgroundImage:
          'url("https://mylovingday.com/wp-content/uploads/2025/01/bg-main-lite.png")',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: '200px',
        paddingBottom: '80px',
        color: '#FFFFFF',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Glow Orbs for Modern AI Feel */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(0, 210, 255, 0.22) 0%, rgba(2, 75, 164, 0.05) 60%, transparent 80%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(60px)',
          zIndex: 1,
        }}
      />

      <div
        className="container-custom"
        style={{ position: 'relative', zIndex: 10 }}
      >
        {/* Floating Mini AI Tag */}
        <ScrollReveal delay={0}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '20px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            Next-Gen Digital Legacy Vault
          </div>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal delay={100}>
          <h1
            className="hero-title"
            style={{
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '1px',
              color: '#FFFFFF',
              marginBottom: '24px',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
            }}
          >
            Where Every Memory <br />
            Finds a Safe Home
          </h1>
        </ScrollReveal>

        {/* Subtitle / Paragraph */}
        <ScrollReveal delay={200}>
          <p
            className="hero-text"
            style={{
              maxWidth: '920px',
              margin: '0 auto 32px auto',
              fontSize: '16.5px',
              fontWeight: 400,
              lineHeight: 1.75,
              color: '#FFFFFF',
              opacity: 0.95,
            }}
          >
            My Loving Day App is a secure and compassionate platform designed to
            preserve your most treasured memories, heartfelt messages, and final
            wishes. With innovative features and a focus on privacy, it empowers you
            to create a meaningful legacy that comforts and connects your loved
            ones, now and always. Plus, with our optional check up system if a friend
            hasn’t been active for a period of time, a gentle notification is sent
            to check in. If there’s no response, an alert is sent to their listed
            friends, ensuring care and attention when it’s needed most.
          </p>
        </ScrollReveal>

        {/* Coming Soon Badge with Hover Effect */}
        <ScrollReveal delay={300}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '48px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mylovingday.com/wp-content/uploads/2025/01/coming-soon.png"
              alt="Coming Soon to App Store and Google Play"
              className="badge-btn"
              style={{
                width: '320px',
                maxWidth: '85%',
                height: 'auto',
                filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.25))',
                transition: 'transform 0.3s ease, filter 0.3s ease',
                cursor: 'pointer',
              }}
            />
          </div>
        </ScrollReveal>

        {/* Floating Mockup Showcase with Ambient Glow & Gentle Float Animation */}
        <ScrollReveal delay={400}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 20,
            }}
          >
            {/* Ambient Backlight Behind Phones */}
            <div
              style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '70%',
                height: '60%',
                background:
                  'radial-gradient(ellipse, rgba(0, 210, 255, 0.3) 0%, rgba(2, 75, 164, 0.15) 50%, transparent 75%)',
                filter: 'blur(50px)',
                zIndex: -1,
                pointerEvents: 'none',
              }}
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mylovingday.com/wp-content/uploads/2025/01/mn-img-1024x877.png"
              alt="My Loving Day App Mockups"
              className="hero-mockup animate-float"
              style={{
                width: '68%',
                maxWidth: '880px',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 25px 40px rgba(0,0,0,0.35))',
              }}
            />
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .hero-title {
          font-size: 80px;
        }
        .badge-btn:hover {
          transform: translateY(-3px) scale(1.02);
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.35)) !important;
        }
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 58px;
          }
          .hero-mockup {
            width: 82% !important;
          }
        }
        @media (max-width: 768px) {
          section {
            padding-top: 150px !important;
            padding-bottom: 40px !important;
          }
          .hero-title {
            font-size: 40px !important;
            text-align: left !important;
          }
          .hero-text {
            text-align: left !important;
            font-size: 15px !important;
          }
          .hero-mockup {
            width: 95% !important;
          }
        }
      `}</style>
    </section>
  );
}
