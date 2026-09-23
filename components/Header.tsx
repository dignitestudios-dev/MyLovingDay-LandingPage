'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        width: '100%',
        backgroundColor: isHome ? 'transparent' : '#024BA4',
        boxShadow: isHome ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Navigation (Desktop) */}
        <nav
          className="desktop-nav"
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '40px',
            alignItems: 'center',
            paddingTop: '30px',
            paddingBottom: '20px',
            paddingRight: '48px',
          }}
        >
          <a
            href="/#over"
            className="nav-link"
            style={{
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '18px',
              transition: 'all 0.2s ease',
            }}
          >
            Overview
          </a>
          <a
            href="/#feature"
            className="nav-link"
            style={{
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '18px',
              transition: 'all 0.2s ease',
            }}
          >
            Features
          </a>
          <Link
            href="/terms-condition"
            className="nav-link"
            style={{
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '18px',
              transition: 'all 0.2s ease',
            }}
          >
            Terms & Conditions
          </Link>
        </nav>

        {/* Center Logo Emblem - Hanging Badge Card */}
        <div
          style={{
            zIndex: 60,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Link href="/" style={{ display: 'inline-block' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '0 0 16px 16px',
                padding: '12px 28px 14px 28px',
                boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.28)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="logo-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://mylovingday.com/wp-content/uploads/2025/01/Logo-mn-300x260.png"
                alt="My Loving Day"
                style={{
                  width: '140px',
                  height: 'auto',
                  display: 'block',
                  transition: 'all 0.3s ease',
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
            justifyContent: 'flex-start',
            gap: '40px',
            alignItems: 'center',
            paddingTop: '30px',
            paddingBottom: '20px',
            paddingLeft: '48px',
          }}
        >
          <a
            href="/#faq"
            className="nav-link"
            style={{
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '18px',
              transition: 'all 0.2s ease',
            }}
          >
            FAQ
          </a>
          <a
            href="/#screens"
            className="nav-link"
            style={{
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '18px',
              transition: 'all 0.2s ease',
            }}
          >
            App Screens
          </a>
          <Link
            href="/privacy-policy"
            className="nav-link"
            style={{
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '18px',
              transition: 'all 0.2s ease',
            }}
          >
            Privacy & Policy
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div
          className="mobile-toggle"
          style={{
            display: 'none',
            paddingTop: '20px',
          }}
        >
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              color: '#ffffff',
              padding: '10px',
              backgroundColor: 'rgba(2, 75, 164, 0.95)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
            marginTop: '8px',
          }}
        >
          <a
            href="/#over"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '18px',
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
              fontSize: '18px',
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
              fontSize: '18px',
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
              fontSize: '18px',
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
              fontSize: '18px',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy-policy"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '18px',
              padding: '8px 0',
            }}
          >
            Privacy & Policy
          </Link>
        </div>
      )}

      <style jsx>{`
        .nav-link:hover {
          color: #00d2ff !important;
          transform: translateY(-2px);
        }
        .logo-card:hover {
          transform: translateY(2px) scale(1.02);
        }
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
