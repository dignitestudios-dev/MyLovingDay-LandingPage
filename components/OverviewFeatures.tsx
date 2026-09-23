'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';

const col1Features = [
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/upload.png',
    title: 'Capture Your Legacy',
    description: 'Upload photos, videos, messages, and voice notes effortlessly.',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/link.png',
    title: 'Stay Connected with Care',
    description:
      'Our inactivity check-up system ensures loved ones are notified if a friend is unresponsive.',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/Payment-method.png',
    title: 'Stay Connected with Care',
    description:
      'Create a journal of destinations that you have visited or plan to',
  },
];

const col2Features = [
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/organize.png',
    title: 'Organize Your Memories',
    description:
      'Create unique memory albums for special people and milestones.',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/collaboration.png',
    title: 'Share the Love',
    description:
      'Deliver your cherished moments in meaningful and heartfelt ways.',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/09/family-tree-150x150.png',
    title: 'Celebrate Your Roots',
    description:
      'Create and share family trees that connect generations.',
  },
];

export default function OverviewFeatures() {
  return (
    <section
      id="over"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '90px',
        paddingBottom: '110px',
      }}
    >
      <div className="container-custom">
        <div className="overview-layout">
          {/* Left Column: Heading & Description */}
          <ScrollReveal delay={100} className="overview-left">
            <span
              style={{
                color: '#024BA4',
                fontSize: '18px',
                fontWeight: 900,
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '10px',
                letterSpacing: '1px',
              }}
            >
              Premium Features
            </span>
            <h2
              className="overview-title"
              style={{
                fontSize: '56px',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#000000',
                lineHeight: 1.1,
                marginBottom: '20px',
              }}
            >
              my Loving day
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#1e293b',
                lineHeight: 1.75,
                marginBottom: '32px',
              }}
            >
              My Loving Day, is a platform where shared memories are preserved to
              live on in continued connection. We&apos;re here to elevate the
              everyday, to be reminded that for each ending there is a new
              beginning.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mylovingday.com/wp-content/uploads/2025/01/coming-soon.png"
              alt="Coming Soon"
              className="coming-soon-img"
              style={{
                width: '320px',
                maxWidth: '100%',
                height: 'auto',
                transition: 'transform 0.3s ease',
              }}
            />
          </ScrollReveal>

          {/* Right Area: Staggered 2 Columns of Cards */}
          <div className="overview-cards-container">
            {/* Column 1 */}
            <div className="cards-col">
              {col1Features.map((item, idx) => (
                <ScrollReveal key={idx} delay={150 + idx * 120}>
                  <div className="overview-card">
                    <div className="icon-wrapper">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="card-icon"
                        style={{
                          maxHeight: '52px',
                          maxWidth: '52px',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <h3 className="card-heading">{item.title}</h3>
                    <p className="card-paragraph">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Column 2 (Staggered Downwards) */}
            <div className="cards-col staggered-col">
              {col2Features.map((item, idx) => (
                <ScrollReveal key={idx} delay={250 + idx * 120}>
                  <div className="overview-card">
                    <div className="icon-wrapper">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="card-icon"
                        style={{
                          maxHeight: '52px',
                          maxWidth: '52px',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    <h3 className="card-heading">{item.title}</h3>
                    <p className="card-paragraph">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overview-layout {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 60px;
          align-items: flex-start;
        }
        .overview-cards-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        .cards-col {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .staggered-col {
          padding-top: 80px;
        }
        .overview-card {
          background: #ffffff;
          padding: 28px 24px;
          border-bottom: 3px solid #0254b8;
          box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.14);
          border-radius: 8px;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-top: 1px solid rgba(2, 75, 164, 0.06);
          border-left: 1px solid rgba(2, 75, 164, 0.06);
          border-right: 1px solid rgba(2, 75, 164, 0.06);
        }
        .overview-card:hover {
          box-shadow: 0px 16px 32px 0px rgba(2, 75, 164, 0.18);
          transform: translateY(-6px);
        }
        .overview-card:hover .card-icon {
          transform: scale(1.1);
        }
        .card-icon {
          transition: transform 0.3s ease;
        }
        .icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
          height: 60px;
        }
        .card-heading {
          font-size: 18px;
          font-weight: 800;
          color: #000000;
          margin-bottom: 10px;
        }
        .card-paragraph {
          font-size: 14px;
          color: #334155;
          line-height: 1.55;
        }
        .coming-soon-img:hover {
          transform: scale(1.02);
        }
        @media (max-width: 1024px) {
          .overview-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .staggered-col {
            padding-top: 0px;
          }
        }
        @media (max-width: 640px) {
          .overview-cards-container {
            grid-template-columns: 1fr;
          }
          .overview-title {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
