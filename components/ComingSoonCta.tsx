'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function ComingSoonCta() {
  return (
    <section
      style={{
        backgroundColor: '#F6F9FE',
        paddingTop: '90px',
        paddingBottom: '90px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom" style={{ maxWidth: '980px' }}>
        <ScrollReveal delay={100}>
          <h2
            className="cta-title"
            style={{
              fontSize: '56px',
              fontWeight: 900,
              color: '#000000',
              marginBottom: '20px',
            }}
          >
            Coming Soon My Loving Day !
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p
            style={{
              fontSize: '16px',
              color: '#000000',
              lineHeight: 1.75,
              marginBottom: '40px',
              padding: '0 20px',
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
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mylovingday.com/wp-content/uploads/2025/01/coming-soon.png"
              alt="Coming Soon"
              className="cta-badge"
              style={{
                width: '380px',
                maxWidth: '85%',
                height: 'auto',
                filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.18))',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}
            />
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .cta-badge:hover {
          transform: translateY(-4px) scale(1.02);
        }
        @media (max-width: 640px) {
          .cta-title {
            font-size: 34px !important;
          }
        }
      `}</style>
    </section>
  );
}
