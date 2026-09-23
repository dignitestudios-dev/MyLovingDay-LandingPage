'use client';

import React from 'react';
import Link from 'next/link';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  const playStoreLink =
    'https://play.google.com/store/apps/details?id=com.cts.lovingday';
  const appStoreLink = 'https://apps.apple.com';

  return (
    <div
      style={{
        backgroundColor: '#F8FAFC',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 20px 60px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Glows */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(0, 210, 255, 0.12) 0%, rgba(2, 75, 164, 0.05) 50%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '560px',
          width: '100%',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          padding: '48px 36px',
          boxShadow: '0 20px 50px rgba(2, 75, 164, 0.08)',
          border: '1px solid #E2E8F0',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'inline-block', marginBottom: '24px' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: '20px',
              boxShadow: '0 8px 24px rgba(2, 75, 164, 0.08)',
              border: '1px solid #E2E8F0',
              display: 'inline-flex',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mylovingday.com/wp-content/uploads/2025/01/Logo-mn-300x260.png"
              alt="My Loving Day"
              style={{ width: '90px', height: 'auto', display: 'block' }}
            />
          </div>
        </Link>

        {/* 404 Badge */}
        <div style={{ marginBottom: '14px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: '#FEF2F2',
              border: '1px solid #FEE2E2',
              color: '#DC2626',
              fontSize: '13px',
              fontWeight: 800,
            }}
          >
            <AlertCircle size={15} color="#DC2626" />
            <span>Page Not Found</span>
          </div>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: '36px',
            fontWeight: 800,
            color: '#0F172A',
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
            margin: '0 0 12px 0',
          }}
        >
          Lost Your Way? <br />
          <span style={{ color: '#024BA4', fontWeight: 800 }}>
            This Page Doesn’t Exist.
          </span>
        </h1>

        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: '#64748B',
            margin: '0 auto 28px auto',
            maxWidth: '440px',
          }}
        >
          The page or post URL you are looking for might have been moved, deleted,
          or does not exist. Return home or download the My Loving Day app below.
        </p>

        {/* Back to Home Button */}
        <div style={{ marginBottom: '32px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#024BA4',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '14px',
              padding: '13px 28px',
              borderRadius: '13px',
              textDecoration: 'none',
              boxShadow: '0 6px 18px rgba(2, 75, 164, 0.25)',
              transition: 'all 0.2s ease',
            }}
          >
            <Home size={17} />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            margin: '0 0 24px 0',
          }}
        >
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }} />
          <span
            style={{
              fontSize: '11px',
              fontWeight: 800,
              color: '#94A3B8',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
            }}
          >
            Get My Loving Day App
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }} />
        </div>

        {/* App Store and Google Play Download Badges */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Apple App Store */}
          <a
            href={appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#0a0a0a',
              color: '#FFFFFF',
              padding: '9px 18px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.16)',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.65-.79 1.1-1.9 0.97-3.01-1 .04-2.16.66-2.85 1.46-.61.69-1.14 1.81-1 2.9 1.11.09 2.23-.56 2.88-1.35z" />
            </svg>
            <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  color: '#D1D5DB',
                  fontWeight: 600,
                }}
              >
                DOWNLOAD ON THE
              </div>
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '-0.3px',
                }}
              >
                App Store
              </div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href={playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#0a0a0a',
              color: '#FFFFFF',
              padding: '9px 18px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.16)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1 9.3-9.3v-.2L3.6 2.3z"
                fill="#2196F3"
              />
              <path
                d="M16.1 15.3l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.5 0 2.1l-3.8 2.1z"
                fill="#FFC107"
              />
              <path
                d="M13 12.1L3.6 21.6c.4.4 1 .4 1.7 0l10.8-6.2-3.1-3.3z"
                fill="#4CAF50"
              />
              <path
                d="M13 11.9l3.1-3.1L5.3 2.6c-.7-.4-1.3-.4-1.7 0L13 11.9z"
                fill="#F44336"
              />
            </svg>
            <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  color: '#D1D5DB',
                  fontWeight: 600,
                }}
              >
                GET IT ON
              </div>
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '-0.3px',
                }}
              >
                Google Play
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
