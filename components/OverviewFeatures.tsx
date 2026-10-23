'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronRight, Sparkles, Heart, Bell, Shield, CheckCircle2 } from 'lucide-react';

interface FeatureItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  screenImage: string;
  tag: string;
}

const allFeatures: FeatureItem[] = [
  {
    id: 1,
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/upload.png',
    title: 'Capture Your Legacy',
    description: 'Upload photos, videos, messages, and voice notes effortlessly.',
    screenImage: '/images/1.png',
    tag: 'Voice & Media Vault',
  },
  {
    id: 2,
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/link.png',
    title: 'Stay Connected with Care',
    description: 'Our inactivity check-up system ensures loved ones are notified if a friend is unresponsive.',
    screenImage: '/images/2.png',
    tag: 'Guardian Check-In',
  },
  {
    id: 3,
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/Payment-method.png',
    title: 'Milestone & Journey Journal',
    description: 'Create a journal of destinations that you have visited or plan to',
    screenImage: '/images/3.png',
    tag: 'Places & Memories',
  },
  {
    id: 4,
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/organize.png',
    title: 'Organize Your Memories',
    description: 'Create unique memory albums for special people and milestones.',
    screenImage: '/images/4.png',
    tag: 'Custom Albums',
  },
  {
    id: 5,
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/collaboration.png',
    title: 'Share the Love',
    description: 'Deliver your cherished moments in meaningful and heartfelt ways.',
    screenImage: '/images/5.png',
    tag: 'Scheduled Delivery',
  },
  {
    id: 6,
    icon: 'https://mylovingday.com/wp-content/uploads/2025/09/family-tree-150x150.png',
    title: 'Celebrate Your Roots',
    description: 'Create and share family trees that connect generations.',
    screenImage: '/images/6.png',
    tag: 'Family Tree Legacy',
  },
];

export default function OverviewFeatures() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
  });

  const phoneY = useTransform(smoothProgress, [0, 1], [-40, 40]);
  const phoneRotateY = useTransform(smoothProgress, [0, 0.5, 1], [6, 0, -6]);
  const floatingBadgeY = useTransform(smoothProgress, [0, 1], [30, -50]);

  // Mouse Parallax Physics
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const smoothMouseX = useSpring(rawMouseX, { damping: 25, stiffness: 120, mass: 0.5 });
  const smoothMouseY = useSpring(rawMouseY, { damping: 25, stiffness: 120, mass: 0.5 });

  const phoneMouseRotateY = useTransform(smoothMouseX, [-1, 1], [-8, 8]);
  const phoneMouseRotateX = useTransform(smoothMouseY, [-1, 1], [6, -6]);
  const phoneMouseX = useTransform(smoothMouseX, [-1, 1], [-14, 14]);
  const phoneMouseY = useTransform(smoothMouseY, [-1, 1], [-10, 10]);

  const pill1MouseX = useTransform(smoothMouseX, [-1, 1], [-26, 26]);
  const pill1MouseY = useTransform(smoothMouseY, [-1, 1], [-20, 20]);
  const pill2MouseX = useTransform(smoothMouseX, [-1, 1], [22, -22]);
  const pill2MouseY = useTransform(smoothMouseY, [-1, 1], [18, -18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawMouseX.set(x);
    rawMouseY.set(y);
  };

  const handleMouseLeave = () => {
    rawMouseX.set(0);
    rawMouseY.set(0);
    setIsAutoPlay(true);
  };

  // Auto-cycle through features smoothly unless user hovers
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % allFeatures.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <section
      id="over"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '110px',
        paddingBottom: '120px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(2, 75, 164, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(80px)',
        }}
      />

      <div className="container-custom">
        <div className="overview-layout">
          {/* LEFT SIDE: Heading & Finix-style Accordion Selector */}
          <div className="overview-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <span
                style={{
                  color: '#024BA4',
                  fontSize: '14px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px',
                  letterSpacing: '1.5px',
                  background: 'rgba(2, 75, 164, 0.06)',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                }}
              >
                <Sparkles size={14} color="#024BA4" />
                Premium Features
              </span>

              <h2
                className="overview-title"
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
                My Loving Day <br />
                <span className="serif-accent" style={{ color: '#0254B8' }}>
                  capture life with ease
                </span>
              </h2>

              <p
                style={{
                  fontSize: '16px',
                  color: '#334155',
                  lineHeight: 1.75,
                  marginBottom: '36px',
                  maxWidth: '560px',
                }}
              >
                My Loving Day, is a platform where shared memories are preserved to
                live on in continued connection. We&apos;re here to elevate the
                everyday, to be reminded that for each ending there is a new
                beginning.
              </p>
            </motion.div>

            {/* Finix-Style Interactive Feature Pills (00:01 - 00:04) */}
            <div className="features-accordion">
              {allFeatures.map((feat, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <motion.div
                    key={feat.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`accordion-item ${isActive ? 'active' : ''}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    style={{
                      borderRadius: '16px',
                      marginBottom: '10px',
                      cursor: 'pointer',
                      border: isActive
                        ? '1.5px solid #0254B8'
                        : '1px solid rgba(226, 232, 240, 0.8)',
                      backgroundColor: isActive ? '#F6F9FE' : '#FFFFFF',
                      boxShadow: isActive
                        ? '0 12px 28px rgba(2, 75, 164, 0.08)'
                        : '0 2px 8px rgba(0, 0, 0, 0.02)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            backgroundColor: isActive ? '#024BA4' : '#F1F5F9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={feat.icon}
                            alt={feat.title}
                            style={{
                              width: '22px',
                              height: '22px',
                              objectFit: 'contain',
                              filter: isActive ? 'brightness(0) invert(1)' : 'none',
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: '17px',
                            fontWeight: 800,
                            color: isActive ? '#024BA4' : '#0F172A',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {feat.title}
                        </span>
                      </div>

                      <motion.div
                        animate={{ rotate: isActive ? 90 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ color: isActive ? '#0254B8' : '#94A3B8' }}
                      >
                        <ChevronRight size={18} />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div
                            style={{
                              padding: '0 20px 18px 74px',
                              fontSize: '14.5px',
                              color: '#475569',
                              lineHeight: 1.6,
                            }}
                          >
                            {feat.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Preserved Coming Soon Badge */}
            <motion.div
              style={{ marginTop: '28px' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/coming-soon.png"
                alt="Coming Soon"
                className="coming-soon-img"
                style={{
                  width: '280px',
                  maxWidth: '100%',
                  height: 'auto',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.12))',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://mylovingday.com/wp-content/uploads/2025/01/coming-soon.png';
                }}
              />
            </motion.div>
          </div>

          {/* RIGHT SIDE: Dynamic Phone Display Connected to Active Feature (Finix Frame 00:02 - 00:04) */}
          <div className="overview-right">
            <motion.div
              className="phone-container"
              style={{
                y: phoneY,
                rotateY: phoneRotateY,
                perspective: '1200px',
                position: 'relative',
              }}
            >
              {/* Soft Ambient Radial Backlight */}
              <div
                style={{
                  position: 'absolute',
                  top: '40%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '420px',
                  height: '520px',
                  background: 'radial-gradient(ellipse, rgba(0, 210, 255, 0.22) 0%, rgba(2, 75, 164, 0.12) 50%, transparent 75%)',
                  filter: 'blur(50px)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />

              {/* Floating Reaction Badge 1: Heart reaction with Mouse Parallax */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '-20px',
                  zIndex: 10,
                  y: floatingBadgeY,
                  x: pill1MouseX,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="floating-overview-pill"
              >
                <motion.div style={{ y: pill1MouseY }}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '9999px',
                      padding: '10px 18px',
                      boxShadow: '0 16px 36px rgba(0, 0, 0, 0.14)',
                      border: '1px solid rgba(2, 75, 164, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #FF4B6B 0%, #E6002A 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Heart size={15} fill="#FFFFFF" color="#FFFFFF" />
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>
                      100% End-to-End Secure
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Reaction Badge 2: Inactivity Notification with Mouse Parallax */}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '22%',
                  right: '-16px',
                  zIndex: 10,
                  x: pill2MouseX,
                }}
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
                className="floating-overview-pill"
              >
                <motion.div style={{ y: pill2MouseY }}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '12px 18px',
                      boxShadow: '0 16px 36px rgba(0, 0, 0, 0.15)',
                      border: '1px solid rgba(2, 75, 164, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #024BA4 0%, #00D2FF 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Bell size={16} color="#FFFFFF" />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 800, color: '#024BA4' }}>
                        {allFeatures[activeIdx].tag}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>
                        Live Synchronized
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Device Frame with Mouse 3D Tilt */}
              <motion.div
                style={{
                  x: phoneMouseX,
                  y: phoneMouseY,
                  rotateX: phoneMouseRotateX,
                  rotateY: phoneMouseRotateY,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Device Frame with Changing Screen Content */}
                <div
                  className="phone-bezel"
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '310px',
                    margin: '0 auto',
                    borderRadius: '44px',
                    padding: '12px',

                  }}
                >
                  {/* Dynamic Island Pill */}


                  {/* Inner Screen Display */}
                  <div
                    style={{
                      borderRadius: '34px',
                      overflow: 'hidden',
                      position: 'relative',
                      aspectRatio: '9 / 19.5',
                      backgroundColor: '#FFFFFF',
                    }}
                  >

                    <AnimatePresence mode="sync" initial={false}>
                      <motion.div
                        key={activeIdx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        <img
                          src={allFeatures[activeIdx].screenImage}
                          alt={allFeatures[activeIdx].title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                      </motion.div>
                    </AnimatePresence>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overview-layout {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .coming-soon-img:hover {
          transform: translateY(-3px) scale(1.02);
        }
        @media (max-width: 1024px) {
          .overview-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .overview-right {
            display: flex;
            justifyContent: center;
            width: 100%;
          }
        }
        @media (max-width: 768px) {
          section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
          .overview-title {
            font-size: clamp(28px, 7.5vw, 38px) !important;
            line-height: 1.15 !important;
            margin-bottom: 14px !important;
          }
          /* Remove overlapping floating badges on mobile as requested */
          :global(.floating-overview-pill) {
            display: none !important;
          }
          :global(.phone-bezel) {
            max-width: 260px !important;
            width: 100% !important;
            border-radius: 36px !important;
            padding: 8px !important;
            margin: 0 auto !important;
          }
          :global(.accordion-item) {
            border-radius: 12px !important;
            margin-bottom: 8px !important;
          }
          .coming-soon-img {
            max-width: 250px !important;
            margin: 0 auto;
            display: block;
          }
        }
        @media (max-width: 430px) {
          :global(.phone-bezel) {
            max-width: 230px !important;
          }
          .overview-title {
            font-size: clamp(26px, 7.2vw, 32px) !important;
          }
        }
      `}</style>
    </section>
  );
}
