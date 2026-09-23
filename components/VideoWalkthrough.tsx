'use client';

import React, { useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import { ShieldCheck, PlayCircle } from 'lucide-react';

export default function VideoWalkthrough() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="feature"
      style={{
        position: 'relative',
        backgroundColor: '#ffffff',
        paddingTop: '100px',
        paddingBottom: '100px',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom">
        <div className="walkthrough-layout">
          {/* Left Text Column */}
          <ScrollReveal delay={100} className="walkthrough-content">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 14px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(2, 75, 164, 0.08)',
                color: '#024BA4',
                fontSize: '13px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                marginBottom: '16px',
              }}
            >
              <PlayCircle size={15} color="#024BA4" />
              Interactive Preview
            </div>

            <h2
              className="walkthrough-title"
              style={{
                fontSize: '52px',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#000000',
                marginBottom: '24px',
                textTransform: 'uppercase',
              }}
            >
              Explore the <span style={{ color: '#024BA4' }}>App:</span>
              <br />A Seamless Walkthrough
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#1e293b',
                lineHeight: 1.8,
                marginBottom: '28px',
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
                gap: '10px',
                fontSize: '14.5px',
                fontWeight: 700,
                color: '#024BA4',
              }}
            >
              <ShieldCheck size={20} color="#024BA4" />
              <span>End-to-End Encrypted Memory Preservation</span>
            </div>
          </ScrollReveal>

          {/* Right Video Container - Ambient Glow & Smooth Float */}
          <ScrollReveal delay={250} className="walkthrough-video-col">
            <div
              style={{
                width: '100%',
                maxWidth: '440px',
                margin: '0 auto',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                className="video-phone-wrapper animate-float-gentle"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
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
                    display: 'block',
                    background: 'transparent',
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .walkthrough-layout {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .walkthrough-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .walkthrough-title {
            font-size: 38px !important;
          }
        }
        @media (max-width: 640px) {
          .walkthrough-title {
            font-size: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
