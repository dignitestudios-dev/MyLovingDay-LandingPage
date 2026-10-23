'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Shield, Heart, Bell, Users, BookOpen, Lock } from 'lucide-react';

interface ChooseItem {
  icon: string;
  title: string;
  description: string;
  badge: string;
  visualType: 'cards' | 'status' | 'tags' | 'recipe' | 'trusted' | 'crypto';
}

const chooseFeatures: ChooseItem[] = [
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/logos-1-150x150.png',
    title: 'Compassionate Design',
    description: 'Crafted to provide comfort and joy during life’s most personal moments.',
    badge: 'Heartfelt UI',
    visualType: 'tags',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/logo-3-150x150.png',
    title: 'Inactivity Check-Up Feature',
    description:
      'Get notified if a friend hasn’t been active for a period of time, with an alert sent to their friends if no response is received.',
    badge: 'Guardian System',
    visualType: 'status',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/logo-2-150x150.png',
    title: 'Memories Meet Innovation',
    description:
      'From collaborative storytelling to customized sharing, we redefine memory-keeping.',
    badge: 'Interactive Vault',
    visualType: 'cards',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/logo-4-150x150.png',
    title: 'Personalized Recipe Sharing',
    description:
      'Preserve and share family recipes, cooking tips,ensuring your food legacy lives on.',
    badge: 'Heirloom Culinary',
    visualType: 'recipe',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/logo-5-150x150.png',
    title: 'Trusted Connections',
    description:
      'Easily manage who can access your memories, ensuring only trusted individuals are part of your legacy.',
    badge: 'Access Control',
    visualType: 'trusted',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/logo-5-2-150x150.png',
    title: 'Consistent Privacy',
    description: 'Built with cutting-edge encryption to protect your memories.',
    badge: 'AES-256 Vault',
    visualType: 'crypto',
  },
];

function BentoTiltCard({ item, idx }: { item: ChooseItem; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.5 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -8,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1200px',
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      className="bento-card"
    >
      {/* Top Row: Icon + Badge */}
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: '#F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(2, 75, 164, 0.08)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.icon}
              alt={item.title}
              style={{
                maxHeight: '34px',
                maxWidth: '34px',
                objectFit: 'contain',
              }}
            />
          </div>

          <span
            style={{
              fontSize: '12px',
              fontWeight: 800,
              color: '#024BA4',
              backgroundColor: 'rgba(2, 75, 164, 0.06)',
              padding: '4px 12px',
              borderRadius: '9999px',
              letterSpacing: '0.4px',
            }}
          >
            {item.badge}
          </span>
        </div>

        <h3
          style={{
            fontSize: '21px',
            fontWeight: 800,
            color: '#0F172A',
            marginBottom: '10px',
            letterSpacing: '-0.01em',
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            fontSize: '14.5px',
            color: '#64748B',
            lineHeight: 1.65,
            marginBottom: '28px',
          }}
        >
          {item.description}
        </p>
      </div>

      {/* Bottom Visual Widget with 3D Depth Elevation */}
      <div
        style={{
          transform: 'translateZ(30px)',
          backgroundColor: '#F8FAFC',
          borderRadius: '16px',
          padding: '18px 20px',
          border: '1px solid #EDF2F7',
          minHeight: '84px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {item.visualType === 'tags' && (
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: '#FFFFFF', color: '#024BA4', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
              📸 Photo Vault
            </span>
            <span style={{ fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: '#FFFFFF', color: '#024BA4', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
              🎙️ Voice Notes
            </span>
          </div>
        )}

        {item.visualType === 'status' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 10px #10B981' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>
              Guardian Inactivity Alert: <span style={{ color: '#10B981' }}>Active</span>
            </span>
          </div>
        )}

        {item.visualType === 'cards' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ padding: '6px 12px', borderRadius: '8px', background: '#FFFFFF', border: '1px solid #E2E8F0', fontSize: '12px', fontWeight: 700, color: '#024BA4', transform: 'rotate(-4deg)' }}>
              Album #1
            </div>
            <div style={{ padding: '6px 12px', borderRadius: '8px', background: 'linear-gradient(135deg, #024BA4, #00D2FF)', fontSize: '12px', fontWeight: 700, color: '#FFFFFF', transform: 'rotate(2deg)', boxShadow: '0 4px 12px rgba(2,75,164,0.2)' }}>
              Heartfelt Timeline ✨
            </div>
          </div>
        )}

        {item.visualType === 'recipe' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpen size={18} color="#024BA4" />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>
              Grandma&apos;s Secret Apple Pie 🥧
            </span>
          </div>
        )}

        {item.visualType === 'trusted' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={18} color="#024BA4" />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>
              4 Family Guardians Approved
            </span>
          </div>
        )}

        {item.visualType === 'crypto' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Lock size={18} color="#024BA4" />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>
              Zero-Knowledge 256-Bit Key
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      style={{
        backgroundColor: '#F8FAFC',
        paddingTop: '110px',
        paddingBottom: '120px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Glows */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0, 210, 255, 0.08) 0%, rgba(2, 75, 164, 0.04) 60%, transparent 80%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom">
        {/* Section Header (Finix Style 00:05) */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '64px' }}
          initial={{ opacity: 0, y: 24 }}
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
            Why Choose Us
          </span>

          <h2
            className="choose-title"
            style={{
              fontSize: '52px',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#000000',
              marginBottom: '14px',
              letterSpacing: '-0.02em',
            }}
          >
            App Features <br />
            <span className="serif-accent" style={{ color: '#0254B8' }}>
              your legacy companion
            </span>
          </h2>

          <h4
            className="serif-accent"
            style={{
              fontSize: '22px',
              fontWeight: 500,
              color: '#0254B8',
              marginBottom: '18px',
            }}
          >
            “ All ages, its never to soon to begin capturing your memories “
          </h4>

          <p
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              fontSize: '16px',
              color: '#475569',
              lineHeight: 1.75,
            }}
          >
            With innovative features and a focus on privacy, it empowers you to
            create a meaningful legacy that comforts and connects your loved
            ones, now and always.
          </p>
        </motion.div>

        {/* 6 Bento Cards Grid with Interactive 3D Cursor Tilt */}
        <div className="bento-grid">
          {chooseFeatures.map((item, idx) => (
            <BentoTiltCard key={idx} item={item} idx={idx} />
          ))}
        </div>

        {/* Finix 00:07 Signature Download Banner */}
        <motion.div
          className="download-banner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginTop: '60px',
            background: 'linear-gradient(135deg, #0A192F 0%, #0F2A4A 100%)',
            borderRadius: '24px',
            padding: '36px 44px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 25px 50px rgba(10, 25, 47, 0.25)',
          }}
        >
          <div>
            <h3 style={{ fontSize: '26px', fontWeight: 900, marginBottom: '6px', color: '#FFFFFF' }}>
              Download the My Loving Day App
            </h3>
            <p style={{ fontSize: '15px', color: '#94A3B8' }}>
              Get started with My Loving Day today! Preserve your heartfelt legacy and stay connected.
            </p>
          </div>

          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/coming-soon.png"
              alt="Coming Soon"
              style={{
                width: '260px',
                maxWidth: '100%',
                height: 'auto',
                filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.35))',
                cursor: 'pointer',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://mylovingday.com/wp-content/uploads/2025/01/coming-soon.png';
              }}
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        :global(.bento-card:hover) {
          border-color: rgba(2, 84, 184, 0.3) !important;
          box-shadow: 0 20px 45px rgba(2, 75, 164, 0.12) !important;
        }
        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 768px) {
          section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
          .choose-title {
            font-size: clamp(28px, 7.5vw, 38px) !important;
            line-height: 1.15 !important;
          }
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          :global(.bento-card) {
            padding: 20px 14px !important;
            border-radius: 18px !important;
          }
          :global(.bento-card h3) {
            font-size: 16px !important;
            margin-bottom: 6px !important;
          }
          :global(.bento-card p) {
            font-size: 12.5px !important;
            line-height: 1.5 !important;
            margin-bottom: 16px !important;
          }
          :global(.download-banner) {
            padding: 24px 18px !important;
            margin-top: 36px !important;
            border-radius: 20px !important;
            text-align: center !important;
            justify-content: center !important;
            flex-direction: column !important;
            gap: 18px !important;
          }
        }
        @media (max-width: 400px) {
          .bento-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          :global(.bento-card) {
            padding: 24px 18px !important;
          }
          :global(.bento-card h3) {
            font-size: 18px !important;
          }
          :global(.bento-card p) {
            font-size: 13.5px !important;
          }
        }
      `}</style>
    </section>
  );
}
