'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: 'What is MY LOVING DAY App?',
    answer:
      'My Loving Day App is a secure digital platform that allows you to store and share cherished memories, heartfelt messages, and final wishes with your loved ones. It’s designed to help you create a lasting legacy that brings comfort and connection.',
  },
  {
    question: 'How do I ensure my memories remain private?',
    answer:
      'You have full control over your privacy settings. You can choose which memories remain completely private, which can be shared only with trusted friends or family, and which are visible more broadly.',
  },
  {
    question: 'Can I schedule when my memories are shared?',
    answer:
      'Yes, the app allows you to schedule memories in advance. You can decide the exact time and date for sharing, or set them to be released on meaningful occasions.',
  },
  {
    question: 'Can I involve my family and friends in creating memories?',
    answer:
      'Absolutely. You can invite trusted family members and friends to contribute photos, videos, and notes, making your memory collections collaborative and more meaningful.',
  },
  {
    question: 'What types of memories can I store?',
    answer:
      'You can store a wide range of memories, including photos, videos, voice recordings, written notes, and even special messages. The app is designed to capture every kind of moment that matters to you.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '90px',
        paddingBottom: '100px',
      }}
    >
      <div className="container-custom" style={{ maxWidth: '980px' }}>
        {/* Header with ScrollReveal */}
        <ScrollReveal delay={100}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
                letterSpacing: '0.8px',
                marginBottom: '16px',
              }}
            >
              <HelpCircle size={15} color="#024BA4" />
              Frequently Asked Questions
            </div>

            <h2
              className="faq-title"
              style={{
                fontSize: '52px',
                fontWeight: 900,
                color: '#000000',
                marginBottom: '16px',
              }}
            >
              Have Questions? Look Here
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#334155',
                lineHeight: 1.75,
                maxWidth: '820px',
                margin: '0 auto',
              }}
            >
              Discover how My Loving Day App helps you preserve cherished
              memories, share heartfelt messages, and create a meaningful legacy.
              From privacy features to collaborative tools, our FAQ section covers
              everything you need to know to get started on this heartfelt journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion list with ScrollReveal */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} delay={150 + idx * 80}>
                <div
                  style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: isOpen ? '1.5px solid #0254B8' : '1px solid #e2e8f0',
                    backgroundColor: isOpen ? '#ffffff' : '#F6F9FE',
                    boxShadow: isOpen
                      ? '0 10px 24px rgba(2, 75, 164, 0.1)'
                      : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Header */}
                  <button
                    onClick={() => toggle(idx)}
                    style={{
                      width: '100%',
                      padding: '22px 28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      gap: '20px',
                      backgroundColor: isOpen ? '#F6F9FE' : '#F6F9FE',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease',
                    }}
                    className="faq-header-btn"
                  >
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        color: isOpen ? '#024BA4' : '#000000',
                        letterSpacing: '0.3px',
                      }}
                    >
                      {faq.question}
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0254B8',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      {isOpen ? (
                        <Minus size={20} strokeWidth={2.5} />
                      ) : (
                        <Plus size={20} strokeWidth={2.5} />
                      )}
                    </span>
                  </button>

                  {/* Content */}
                  {isOpen && (
                    <div
                      style={{
                        padding: '18px 28px 24px 28px',
                        backgroundColor: '#ffffff',
                        animation: 'slideUpFade 0.35s ease-out',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '15.5px',
                          color: '#334155',
                          lineHeight: 1.7,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq-header-btn:hover {
          background-color: #edf3fd !important;
        }
        @media (max-width: 640px) {
          .faq-title {
            font-size: 34px !important;
          }
        }
      `}</style>
    </section>
  );
}
