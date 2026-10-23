'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Sparkles, ShieldCheck, Heart, Bell, ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // 1. Scroll-linked continuous physics (Finix signature motion)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll transforms for phones
  const phoneRotateY = useTransform(smoothProgress, [0, 1], [-12, 4]);
  const phoneRotateX = useTransform(smoothProgress, [0, 1], [8, -4]);
  const phoneScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.04, 0.96]);
  const phoneY = useTransform(smoothProgress, [0, 1], [0, 90]);

  // Scroll transforms for floating cards
  const badgeHeartY = useTransform(smoothProgress, [0, 1], [0, -110]);
  const badgeCardY = useTransform(smoothProgress, [0, 1], [0, 60]);

  // 2. Mouse-follow Parallax Physics (Multi-layered 3D depth)
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothMouseX = useSpring(rawMouseX, springConfig);
  const smoothMouseY = useSpring(rawMouseY, springConfig);

  // Background Ambient Glow Orbs (Deep layer, moves counter to cursor)
  const orbX1 = useTransform(smoothMouseX, [-1, 1], [40, -40]);
  const orbY1 = useTransform(smoothMouseY, [-1, 1], [40, -40]);
  const orbX2 = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const orbY2 = useTransform(smoothMouseY, [-1, 1], [-30, 30]);

  // Left Content Parallax (Subtle front movement)
  const contentParallaxX = useTransform(smoothMouseX, [-1, 1], [-14, 14]);
  const contentParallaxY = useTransform(smoothMouseY, [-1, 1], [-10, 10]);

  // Phone Mockup 3D Tilt & Translation (Focal depth plane)
  const phoneMouseRotateY = useTransform(smoothMouseX, [-1, 1], [-9, 9]);
  const phoneMouseRotateX = useTransform(smoothMouseY, [-1, 1], [7, -7]);
  const phoneMouseX = useTransform(smoothMouseX, [-1, 1], [-18, 18]);
  const phoneMouseY = useTransform(smoothMouseY, [-1, 1], [-14, 14]);

  // Floating Heart Pill (Forefront layer: high movement strength for real 3D pop)
  const heartMouseX = useTransform(smoothMouseX, [-1, 1], [-36, 36]);
  const heartMouseY = useTransform(smoothMouseY, [-1, 1], [-30, 30]);
  const heartMouseRotate = useTransform(smoothMouseX, [-1, 1], [-12, 12]);

  // Floating Status Card (Forefront layer: complementary movement strength)
  const cardMouseX = useTransform(smoothMouseX, [-1, 1], [30, -30]);
  const cardMouseY = useTransform(smoothMouseY, [-1, 1], [24, -24]);
  const cardMouseRotate = useTransform(smoothMouseY, [-1, 1], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // Normalize to -1 ... 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // Normalize to -1 ... 1
    rawMouseX.set(x);
    rawMouseY.set(y);
  };

  const handleMouseLeave = () => {
    rawMouseX.set(0);
    rawMouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #02235B 0%, #024BA4 50%, #0360CE 100%)',
        paddingTop: '160px',
        paddingBottom: '100px',
        color: '#FFFFFF',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Soft Mesh Ambient Glows with Subtle Reverse Mouse Parallax */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '720px',
          height: '720px',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.28) 0%, rgba(2, 75, 164, 0.1) 60%, transparent 80%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(90px)',
          zIndex: 1,
          x: orbX1,
          y: orbY1,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-8%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(2, 84, 184, 0.35) 0%, rgba(0, 210, 255, 0.08) 60%, transparent 80%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(100px)',
          zIndex: 1,
          x: orbX2,
          y: orbY2,
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="hero-grid">
          {/* LEFT COLUMN: Heading & Content with Subtle Responsive Parallax */}
          <motion.div
            className="hero-left-col"
            style={{
              x: contentParallaxX,
              y: contentParallaxY,
            }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.14)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.28)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '26px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Sparkles size={15} color="#00D2FF" />
              <span>Next-Gen Digital Legacy Vault</span>
            </motion.div>

            {/* Finix Signature Heading: Bold Grotesque Sans + Italic Serif Accent */}
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                marginBottom: '24px',
              }}
            >
              Where Every Memory <br />
              <span className="serif-accent" style={{ color: '#00D2FF', textShadow: '0 0 40px rgba(0, 210, 255, 0.45)' }}>
                Finds a Safe Home
              </span>
            </motion.h1>

            {/* Preserved Full Subtitle / Paragraph */}
            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.8 }}
              style={{
                fontSize: '16.5px',
                fontWeight: 400,
                lineHeight: 1.75,
                color: 'rgba(255, 255, 255, 0.92)',
                marginBottom: '36px',
                maxWidth: '620px',
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
            </motion.p>

            {/* Action Bar: Preserved Coming Soon Badge & Quick Links */}
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="#screens"
                style={{ display: 'inline-block' }}
                className="badge-link"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/coming-soon.png"
                  alt="Coming Soon to App Store and Google Play"
                  className="badge-btn"
                  style={{
                    width: '290px',
                    maxWidth: '100%',
                    height: 'auto',
                    filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.3))',
                    transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease',
                    display: 'block',
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://mylovingday.com/wp-content/uploads/2025/01/coming-soon.png';
                  }}
                />
              </a>

              <a
                href="#over"
                className="hero-explore-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 26px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '15px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                }}
              >
                <span>Explore Features</span>
                <ArrowDown size={16} />
              </a>
            </motion.div>

            {/* Trust pill footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '32px',
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '13.5px',
                fontWeight: 600,
              }}
            >
              <ShieldCheck size={18} color="#00D2FF" />
              <span>256-Bit Encrypted • Inactivity Care System • Multi-Device Sync</span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive 3D Phone Mockups with Combined Scroll & Mouse Parallax */}
          <div className="hero-right-col" style={{ perspective: '1400px' }}>
            {/* Outer Stage: Handles Scroll-Linked Physics */}
            <motion.div
              className="hero-scroll-stage"
              style={{
                position: 'relative',
                transformStyle: 'preserve-3d',
                rotateY: phoneRotateY,
                rotateX: phoneRotateX,
                scale: phoneScale,
                y: phoneY,
              }}
            >
              {/* Inner Stage: Handles Responsive Mouse 3D Parallax */}
              <motion.div
                className="hero-mouse-stage"
                style={{
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  rotateX: phoneMouseRotateX,
                  rotateY: phoneMouseRotateY,
                  x: phoneMouseX,
                  y: phoneMouseY,
                }}
              >
                {/* Backlight Ambient Glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '110%',
                    height: '110%',
                    background: 'radial-gradient(circle, rgba(0, 210, 255, 0.45) 0%, rgba(2, 75, 164, 0.25) 50%, transparent 75%)',
                    filter: 'blur(60px)',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />

                {/* Main Phone Showcase Mockup with Gentle Breathing Float */}
                <motion.div
                  className="main-mockup-wrapper"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/mn-img.png"
                    alt="My Loving Day App Mockups"
                    className="hero-mockup-img"
                    style={{
                      width: '100%',
                      maxWidth: '680px',
                      height: 'auto',
                      display: 'block',
                      filter: 'drop-shadow(0 35px 60px rgba(0,0,0,0.45)) drop-shadow(0 10px 20px rgba(0, 210, 255, 0.2))',
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://mylovingday.com/wp-content/uploads/2025/01/mn-img-1024x877.png';
                    }}
                  />
                </motion.div>

                {/* Floating Element 1: 3D Heart Reaction with High-Depth Mouse Parallax */}
                <motion.div
                  className="floating-heart-pill"
                  style={{
                    position: 'absolute',
                    top: '12%',
                    right: '-10px',
                    zIndex: 6,
                    y: badgeHeartY,
                    x: heartMouseX,
                    rotate: heartMouseRotate,
                    translateZ: '60px',
                  }}
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <motion.div
                    style={{
                      y: heartMouseY,
                    }}
                  >
                    <div
                      style={{
                        background: 'linear-gradient(135deg, #FF4565 0%, #E6002A 100%)',
                        borderRadius: '24px 24px 24px 8px',
                        padding: '12px 18px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 16px 36px rgba(230, 0, 42, 0.45)',
                        border: '2px solid rgba(255, 255, 255, 0.35)',
                        color: '#ffffff',
                        fontWeight: 800,
                        fontSize: '14px',
                      }}
                    >
                      <Heart size={20} fill="#ffffff" color="#ffffff" />
                      <span>Memory Loved</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Element 2: Inactivity Guardian Card with High-Depth Mouse Parallax */}
                <motion.div
                  className="floating-status-card"
                  style={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '-30px',
                    zIndex: 6,
                    y: badgeCardY,
                    x: cardMouseX,
                    rotate: cardMouseRotate,
                    translateZ: '50px',
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                >
                  <motion.div
                    style={{
                      y: cardMouseY,
                    }}
                  >
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '18px',
                        padding: '16px 20px',
                        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
                        border: '1px solid rgba(255, 255, 255, 0.8)',
                        color: '#0F172A',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        minWidth: '240px',
                      }}
                    >
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #024BA4 0%, #00D2FF 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Bell size={20} color="#ffffff" />
                      </div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 800, color: '#024BA4' }}>
                          Inactivity Check-Up
                        </div>
                        <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500 }}>
                          Friends Protected • Active
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .hero-title {
          font-size: 68px;
        }
        .badge-btn:hover {
          transform: translateY(-3px) scale(1.03);
          filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4)) !important;
        }
        .hero-explore-btn:hover {
          background-color: rgba(255, 255, 255, 0.25) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 1200px) {
          .hero-title {
            font-size: 56px;
          }
        }
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            text-align: center;
          }
          .hero-left-col {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-title {
            font-size: 44px;
          }
          .hero-desc {
            max-width: 100% !important;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-scroll-stage {
            max-width: 480px;
            margin: 0 auto;
          }
          :global(.floating-heart-pill) {
            transform: scale(0.85) !important;
            right: 0px !important;
          }
          :global(.floating-status-card) {
            transform: scale(0.85) !important;
            left: 0px !important;
          }
        }
        @media (max-width: 768px) {
          section {
            padding-top: 105px !important;
            padding-bottom: 48px !important;
          }
          .hero-grid {
            gap: 28px !important;
          }
          .hero-title {
            font-size: clamp(30px, 8.5vw, 40px) !important;
            line-height: 1.15 !important;
            margin-bottom: 16px !important;
          }
          .hero-desc {
            font-size: 14.5px !important;
            line-height: 1.65 !important;
            margin-bottom: 24px !important;
          }
          .hero-scroll-stage {
            max-width: 100% !important;
            width: 100% !important;
            margin: 16px auto 0 !important;
          }
          .hero-mockup-img {
            max-width: 340px !important;
            width: 92% !important;
            margin: 0 auto !important;
          }
          /* Remove overlapping floating badges on mobile as requested */
          :global(.floating-heart-pill),
          :global(.floating-status-card) {
            display: none !important;
          }
        }
        @media (max-width: 430px) {
          .hero-title {
            font-size: clamp(28px, 8.2vw, 34px) !important;
          }
          .hero-mockup-img {
            max-width: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
