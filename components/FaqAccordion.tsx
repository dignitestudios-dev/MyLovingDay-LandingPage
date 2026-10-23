'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';

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
        backgroundColor: '#FFFFFF',
        paddingTop: '110px',
        paddingBottom: '120px',
        position: 'relative',
      }}
    >
      <div className="container-custom" style={{ maxWidth: '940px' }}>
        {/* Header (Finix Style) */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '56px' }}
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
              marginBottom: '16px',
            }}
          >
            <Sparkles size={14} color="#024BA4" />
            Frequently Asked Questions
          </div>

          <h2
            className="faq-title"
            style={{
              fontSize: '52px',
              fontWeight: 900,
              color: '#000000',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Have Questions? <br />
            <span className="serif-accent" style={{ color: '#0254B8' }}>
              look here
            </span>
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: '#475569',
              lineHeight: 1.75,
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            Discover how My Loving Day App helps you preserve cherished
            memories, share heartfelt messages, and create a meaningful legacy.
            From privacy features to collaborative tools, our FAQ section covers
            everything you need to know to get started on this heartfelt journey.
          </p>
        </motion.div>

        {/* Accordion list with Framer Motion Layout Animations */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                className="faq-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: isOpen
                    ? '1.5px solid #0254B8'
                    : '1px solid rgba(226, 232, 240, 0.9)',
                  backgroundColor: isOpen ? '#F6F9FE' : '#FFFFFF',
                  boxShadow: isOpen
                    ? '0 14px 32px rgba(2, 75, 164, 0.08)'
                    : '0 2px 8px rgba(0, 0, 0, 0.02)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggle(idx)}
                  className="faq-header-btn"
                  style={{
                    width: '100%',
                    padding: '24px 30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    gap: '20px',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    className="faq-question-text"
                    style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: isOpen ? '#024BA4' : '#0F172A',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="faq-toggle-icon"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? '#024BA4' : '#F1F5F9',
                      color: isOpen ? '#FFFFFF' : '#024BA4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'background-color 0.3s ease, color 0.3s ease',
                    }}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </motion.div>
                </button>

                {/* Animated Drawer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div
                        className="faq-answer-body"
                        style={{
                          padding: '0 30px 26px 30px',
                          color: '#475569',
                          fontSize: '15.5px',
                          lineHeight: 1.75,
                          borderTop: '1px solid rgba(2, 75, 164, 0.08)',
                          paddingTop: '18px',
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq-header-btn:hover {
          opacity: 0.92;
        }
        @media (max-width: 768px) {
          section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
          .faq-title {
            font-size: clamp(28px, 7.5vw, 38px) !important;
            line-height: 1.15 !important;
          }
          :global(.faq-card) {
            border-radius: 14px !important;
          }
          .faq-header-btn {
            padding: 16px 16px !important;
            gap: 12px !important;
          }
          .faq-question-text {
            font-size: 15px !important;
            line-height: 1.45 !important;
          }
          .faq-answer-body {
            padding: 0 16px 16px 16px !important;
            padding-top: 14px !important;
            font-size: 13.5px !important;
            line-height: 1.6 !important;
          }
          :global(.faq-toggle-icon) {
            width: 30px !important;
            height: 30px !important;
          }
        }
        @media (max-width: 430px) {
          .faq-title {
            font-size: clamp(26px, 7vw, 30px) !important;
          }
        }
      `}</style>
    </section>
  );
}
