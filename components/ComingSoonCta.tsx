'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function ComingSoonCta() {
  return (
    <section
      style={{
        backgroundColor: '#F8FAFC',
        paddingTop: '110px',
        paddingBottom: '120px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          height: '450px',
          background: 'radial-gradient(ellipse, rgba(0, 210, 255, 0.12) 0%, rgba(2, 75, 164, 0.06) 60%, transparent 80%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ maxWidth: '960px', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(2, 75, 164, 0.08)',
              color: '#024BA4',
              fontSize: '13.5px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              marginBottom: '18px',
            }}
          >
            <Sparkles size={14} color="#024BA4" />
            Coming Soon to App Store & Google Play
          </div>

          <h2
            className="cta-title"
            style={{
              fontSize: '56px',
              fontWeight: 900,
              color: '#000000',
              marginBottom: '22px',
              letterSpacing: '-0.02em',
            }}
          >
            Coming Soon <br />
            <span className="serif-accent" style={{ color: '#0254B8' }}>
              My Loving Day !
            </span>
          </h2>
        </motion.div>

        <motion.p
          className="cta-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          style={{
            fontSize: '16.5px',
            color: '#475569',
            lineHeight: 1.8,
            marginBottom: '44px',
            padding: '0 20px',
            maxWidth: '860px',
            margin: '0 auto 44px auto',
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/coming-soon.png"
            alt="Coming Soon"
            className="cta-badge"
            style={{
              width: '360px',
              maxWidth: '85%',
              height: 'auto',
              filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.18))',
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease',
              cursor: 'pointer',
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://mylovingday.com/wp-content/uploads/2025/01/coming-soon.png';
            }}
          />
        </motion.div>
      </div>

      <style jsx>{`
        .cta-badge:hover {
          transform: translateY(-4px) scale(1.03);
          filter: drop-shadow(0 18px 40px rgba(2, 75, 164, 0.25)) !important;
        }
        @media (max-width: 768px) {
          section {
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
          .cta-title {
            font-size: clamp(28px, 7.5vw, 40px) !important;
            line-height: 1.15 !important;
            margin-bottom: 16px !important;
          }
          :global(.cta-desc) {
            font-size: 14.5px !important;
            line-height: 1.65 !important;
            margin-bottom: 28px !important;
            padding: 0 4px !important;
          }
        }
        @media (max-width: 430px) {
          .cta-title {
            font-size: clamp(25px, 6.8vw, 32px) !important;
          }
        }
      `}</style>
    </section>
  );
}
