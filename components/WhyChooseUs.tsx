'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';

const chooseFeatures = [
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/logos-1-150x150.png',
    title: 'Compassionate Design',
    description:
      'Crafted to provide comfort and joy during life’s most personal moments.',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/logo-3-150x150.png',
    title: 'Inactivity Check-Up Feature',
    description:
      'Get notified if a friend hasn’t been active for a period of time, with an alert sent to their friends if no response is received.',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/logo-2-150x150.png',
    title: 'Memories Meet Innovation',
    description:
      'From collaborative storytelling to customized sharing, we redefine memory-keeping.',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/logo-4-150x150.png',
    title: 'Personalized Recipe Sharing',
    description:
      'Preserve and share family recipes, cooking tips,ensuring your food legacy lives on.',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/logo-5-150x150.png',
    title: 'Trusted Connections',
    description:
      'Easily manage who can access your memories, ensuring only trusted individuals are part of your legacy.',
  },
  {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/logo-5-2-150x150.png',
    title: 'Consistent Privacy',
    description:
      'Built with cutting-edge encryption to protect your memories.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '90px',
        paddingBottom: '100px',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal delay={100}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span
              style={{
                color: '#024BA4',
                fontSize: '18px',
                fontWeight: 900,
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px',
                letterSpacing: '1px',
              }}
            >
              Why Choose Us
            </span>
            <h2
              className="choose-title"
              style={{
                fontSize: '56px',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#000000',
                marginBottom: '16px',
              }}
            >
              App Features
            </h2>
            <h4
              style={{
                fontSize: '20px',
                fontWeight: 800,
                color: '#000000',
                fontStyle: 'italic',
                marginBottom: '16px',
              }}
            >
              “ All ages, its never to soon to begin capturing your memories “
            </h4>
            <p
              style={{
                maxWidth: '850px',
                margin: '0 auto',
                fontSize: '16px',
                color: '#334155',
                lineHeight: 1.75,
              }}
            >
              With innovative features and a focus on privacy, it empowers you to
              create a meaningful legacy that comforts and connects your loved
              ones, now and always.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Cards Grid (3x2) with Staggered Scroll Animation */}
        <div className="choose-grid">
          {chooseFeatures.map((item, idx) => (
            <ScrollReveal key={idx} delay={150 + (idx % 3) * 120}>
              <div className="choose-card">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    height: '60px',
                    alignItems: 'center',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{
                      maxHeight: '52px',
                      maxWidth: '52px',
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease',
                    }}
                    className="card-icon"
                  />
                </div>
                <h3
                  className="card-title"
                  style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    marginBottom: '12px',
                    textAlign: 'center',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="card-desc"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.6,
                    textAlign: 'center',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .choose-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .choose-card {
          min-height: 275px;
          background-color: #ffffff;
          border-top: 3px solid #0254b8;
          box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
          border-bottom: 1px solid rgba(2, 75, 164, 0.06);
          border-left: 1px solid rgba(2, 75, 164, 0.06);
          border-right: 1px solid rgba(2, 75, 164, 0.06);
        }
        .choose-card .card-title {
          color: #000000;
        }
        .choose-card .card-desc {
          color: #334155;
        }
        /* Hover Effect: linear-gradient(180deg, #B2EBF2 0%, #024BA4C9 100%) */
        .choose-card:hover {
          background-image: linear-gradient(180deg, #b2ebf2 0%, #024ba4c9 100%);
          box-shadow: 0px 16px 36px 0px rgba(2, 75, 164, 0.25);
          transform: translateY(-6px);
        }
        .choose-card:hover .card-title {
          color: #ffffff !important;
        }
        .choose-card:hover .card-desc {
          color: #ffffff !important;
        }
        .choose-card:hover .card-icon {
          transform: scale(1.15);
          filter: drop-shadow(0 4px 10px rgba(255, 255, 255, 0.4));
        }
        @media (max-width: 1024px) {
          .choose-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .choose-grid {
            grid-template-columns: 1fr;
          }
          .choose-title {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
