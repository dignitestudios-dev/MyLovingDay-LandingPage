'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        width: '100%',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isScrolled
          ? 'rgba(255, 255, 255, 0.92)'
          : isHome
          ? 'transparent'
          : '#024BA4',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        boxShadow: isScrolled
          ? '0 10px 30px rgba(0, 0, 0, 0.08)'
          : isHome
          ? 'none'
          : '0 4px 20px rgba(0, 0, 0, 0.1)',
        borderBottom: isScrolled
          ? '1px solid rgba(226, 232, 240, 0.8)'
          : '1px solid transparent',
      }}
    >
      <div
        className="header-container"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: isScrolled ? '12px 40px' : '',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'padding 0.35s ease',
        }}
      >
        {/* Left Navigation (Desktop) */}
        <nav
          className="desktop-nav"
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <a
            href="/#over"
            className={`nav-link ${isScrolled ? 'dark' : ''}`}
            style={{
              color: isScrolled ? '#0F172A' : '#FFFFFF',
              fontWeight: 800,
              fontSize: '15px',
              transition: 'all 0.2s ease',
            }}
          >
            Overview
          </a>
          <a
            href="/#feature"
            className={`nav-link ${isScrolled ? 'dark' : ''}`}
            style={{
              color: isScrolled ? '#0F172A' : '#FFFFFF',
              fontWeight: 800,
              fontSize: '15px',
              transition: 'all 0.2s ease',
            }}
          >
            Features
          </a>
          <Link
            href="/terms-condition"
            className={`nav-link ${isScrolled ? 'dark' : ''}`}
            style={{
              color: isScrolled ? '#0F172A' : '#FFFFFF',
              fontWeight: 800,
              fontSize: '15px',
              transition: 'all 0.2s ease',
            }}
          >
            Terms &amp; Conditions
          </Link>
        </nav>

        {/* Center Logo Emblem */}
        <div
          className="header-logo-wrapper"
          style={{
            zIndex: 60,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Link href="/" style={{ display: 'inline-block' }}>
            <div
              className={`logo-card ${isScrolled ? 'scrolled' : ''}`}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: isScrolled ? '12px' : '0 0 16px 16px',
                padding: isScrolled ? '6px 18px' : '8px 24px 10px 24px',
                boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.18)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-mn.png"
                alt="My Loving Day"
                className="header-logo-img"
                style={{
                  width: isScrolled ? '75px' : '95px',
                  height: 'auto',
                  display: 'block',
                  transition: 'all 0.3s ease',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://mylovingday.com/wp-content/uploads/2025/01/Logo-mn-300x260.png';
                }}
              />
            </div>
          </Link>
        </div>

        {/* Right Navigation (Desktop) */}
        <nav
          className="desktop-nav"
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '28px',
            alignItems: 'center',
          }}
        >
          <a
            href="/#screens"
            className={`nav-link ${isScrolled ? 'dark' : ''}`}
            style={{
              color: isScrolled ? '#0F172A' : '#FFFFFF',
              fontWeight: 800,
              fontSize: '15px',
              transition: 'all 0.2s ease',
            }}
          >
            App Screens
          </a>
          <a
            href="/#faq"
            className={`nav-link ${isScrolled ? 'dark' : ''}`}
            style={{
              color: isScrolled ? '#0F172A' : '#FFFFFF',
              fontWeight: 800,
              fontSize: '15px',
              transition: 'all 0.2s ease',
            }}
          >
            FAQ
          </a>
          <Link
            href="/privacy-policy"
            className={`nav-link ${isScrolled ? 'dark' : ''}`}
            style={{
              color: isScrolled ? '#0F172A' : '#FFFFFF',
              fontWeight: 800,
              fontSize: '15px',
              transition: 'all 0.2s ease',
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/child-safety"
            className={`nav-link ${isScrolled ? 'dark' : ''}`}
            style={{
              color: isScrolled ? '#0F172A' : '#FFFFFF',
              fontWeight: 800,
              fontSize: '15px',
              transition: 'all 0.2s ease',
            }}
          >
            Child Safety
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div
          className="mobile-toggle"
          style={{
            display: 'none',
          }}
        >
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              color: isScrolled ? '#024BA4' : '#FFFFFF',
              padding: '8px',
              backgroundColor: isScrolled
                ? 'rgba(2, 75, 164, 0.08)'
                : 'rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#024BA4',
            padding: '24px 30px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <a
            href="/#over"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '16px',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            Overview
          </a>
          <a
            href="/#feature"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '16px',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            Features
          </a>
          <a
            href="/#screens"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '16px',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            App Screens
          </a>
          <a
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '16px',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            FAQ
          </a>
          <Link
            href="/terms-condition"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '16px',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            Terms &amp; Conditions
          </Link>
          <Link
            href="/privacy-policy"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '16px',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/child-safety"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '16px',
              padding: '8px 0',
            }}
          >
            Child Safety
          </Link>
        </div>
      )}

      <style jsx>{`
        .nav-link:hover {
          color: #00d2ff !important;
          transform: translateY(-2px);
        }
        .nav-link.dark:hover {
          color: #0254b8 !important;
        }
        .logo-card:hover {
          transform: translateY(2px) scale(1.02);
        }
        @media (max-width: 991px) {
          .header-container {
            padding: 12px 20px !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
          .header-logo-img {
            width: 70px !important;
          }
        }
      `}</style>
    </header>
  );
}
