'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ShieldCheck, PlayCircle } from 'lucide-react';

const floatingPills = [
  { text: 'Heartfelt Messages 💌', x: -160, y: -130, delay: 0.1, depth: 1.2 },
  { text: 'Inactivity Guardian 🛡️', x: 170, y: -120, delay: 0.2, depth: 0.9 },
  { text: 'Voice Vault 🎙️', x: -190, y: 30, delay: 0.3, depth: 1.1 },
  { text: 'Generational Roots 🌳', x: 180, y: 40, delay: 0.4, depth: 0.8 },
  { text: '256-Bit Vault 🔐', x: -140, y: 170, delay: 0.5, depth: 1.3 },
  { text: 'Scheduled Timers ⏳', x: 150, y: 180, delay: 0.6, depth: 1.0 },
];

export default function VideoWalkthrough() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  // 1. Scroll-linked continuous physics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
  });

  const videoScale = useTransform(smoothProgress, [0, 0.5, 1], [0.92, 1, 0.95]);

  // 2. Mouse-follow Parallax Physics
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothMouseX = useSpring(rawMouseX, springConfig);
  const smoothMouseY = useSpring(rawMouseY, springConfig);

  const videoMouseRotateY = useTransform(smoothMouseX, [-1, 1], [-6, 6]);
  const videoMouseRotateX = useTransform(smoothMouseY, [-1, 1], [5, -5]);
  const videoMouseX = useTransform(smoothMouseX, [-1, 1], [-12, 12]);
  const videoMouseY = useTransform(smoothMouseY, [-1, 1], [-10, 10]);

  const pillsParallaxX = useTransform(smoothMouseX, [-1, 1], [-26, 26]);
  const pillsParallaxY = useTransform(smoothMouseY, [-1, 1], [-22, 22]);

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
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="feature"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        paddingTop: '110px',
        paddingBottom: '120px',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.08) 0%, rgba(2, 75, 164, 0.04) 60%, transparent 80%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(90px)',
        }}
      />

      <div className="container-custom">
        <div className="walkthrough-layout">
          {/* LEFT: Text Column */}
          <motion.div
            className="walkthrough-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(2, 75, 164, 0.08)',
                color: '#024BA4',
                fontSize: '13px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '18px',
              }}
            >
              <PlayCircle size={15} color="#024BA4" />
              <span>Interactive Preview</span>
            </div>

            <h2
              className="walkthrough-title"
              style={{
                fontSize: '52px',
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#000000',
                marginBottom: '22px',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}
            >
              Explore the App: <br />
              <span className="serif-accent" style={{ color: '#0254B8' }}>
                a seamless walkthrough
              </span>
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: '#334155',
                lineHeight: 1.8,
                marginBottom: '32px',
                maxWidth: '560px',
              }}
            >
              Discover how My Loving Day App empowers you to preserve and share
              your most cherished moments effortlessly. From creating personalized
              memory albums to scheduling heartfelt messages for future milestones,
              our intuitive interface makes every step simple and meaningful.
              Collaborate with loved ones to build shared stories, ensure connection
              with our unique inactivity check-up feature, and rest assured knowing
              your memories are safeguarded with top-tier encryption. Watch our
              walkthrough video to see how easy it is to create a legacy that
              comforts, connects, and lasts forever.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 20px',
                borderRadius: '12px',
                backgroundColor: '#F6F9FE',
                border: '1px solid rgba(2, 75, 164, 0.12)',
                fontSize: '14.5px',
                fontWeight: 700,
                color: '#024BA4',
              }}
            >
              <ShieldCheck size={20} color="#024BA4" />
              <span>End-to-End Encrypted Memory Preservation</span>
            </div>
          </motion.div>

          {/* RIGHT: Video Mockup with Radial Connection Pills and Mouse Parallax */}
          <div className="walkthrough-video-col" style={{ position: 'relative', perspective: '1200px' }}>
            {/* Center Phone Device Wrapper */}
            <motion.div
              style={{
                scale: videoScale,
                x: videoMouseX,
                y: videoMouseY,
                rotateX: videoMouseRotateX,
                rotateY: videoMouseRotateY,
                transformStyle: 'preserve-3d',
                position: 'relative',
                zIndex: 5,
                width: '100%',
                maxWidth: '380px',
                margin: '0 auto',
              }}
            >
              {/* Backlight Ambient Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: '120%',
                  background: 'radial-gradient(circle, rgba(0, 210, 255, 0.25) 0%, rgba(2, 75, 164, 0.12) 60%, transparent 80%)',
                  filter: 'blur(60px)',
                  zIndex: -1,
                  pointerEvents: 'none',
                }}
              />

              <div
                className="video-phone-frame"
                style={{
                  borderRadius: '40px',
                  padding: '12px',
                
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <video
                  ref={videoRef}
                  src="https://mylovingday.com/wp-content/uploads/2025/01/walkthrough-11-1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '30px',
                    display: 'block',
                    background: '#0F172A',
                  }}
                />
              </div>
            </motion.div>

            {/* Outward-Blooming Radial Feature Badges with Dynamic Mouse Parallax */}
            <motion.div
              className="radial-pills-container"
              style={{
                x: pillsParallaxX,
                y: pillsParallaxY,
                pointerEvents: 'none',
              }}
            >
              {floatingPills.map((pill, i) => (
                <motion.div
                  key={i}
                  className="radial-pill"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: pill.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(calc(-50% + ${pill.x}px), calc(-50% + ${pill.y}px))`,
                    zIndex: 6,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(16px)',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(2, 75, 164, 0.12)',
                    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.12)',
                    fontSize: '13px',
                    fontWeight: 800,
                    color: '#0F172A',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                  }}
                >
                  {pill.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .walkthrough-layout {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 1100px) {
          :global(.radial-pill),
          :global(.radial-pills-container) {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .walkthrough-layout {
            grid-template-columns: 1fr;
            gap: 36px;
            text-align: center;
          }
          .walkthrough-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .walkthrough-title {
            font-size: 40px !important;
          }
          .walkthrough-video-col {
            display: flex;
            justifyContent: center;
          }
        }
        @media (max-width: 768px) {
          section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
          .walkthrough-title {
            font-size: clamp(28px, 7.5vw, 36px) !important;
            line-height: 1.15 !important;
            margin-bottom: 16px !important;
          }
          :global(.video-phone-frame) {
            max-width: 270px !important;
            border-radius: 32px !important;
            padding: 8px !important;
          }
        }
        @media (max-width: 430px) {
          .walkthrough-title {
            font-size: clamp(26px, 7vw, 30px) !important;
          }
          :global(.video-phone-frame) {
            max-width: 240px !important;
          }
        }
      `}</style>
    </section>
  );
}
