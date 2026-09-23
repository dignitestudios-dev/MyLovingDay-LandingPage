'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import {
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  ExternalLink,
  X,
  Wifi,
  Battery,
  ChevronLeft,
  ShieldCheck,
  Star,
  AlertCircle,
  Home,
  Users,
  User,
  Play,
  Image as ImageIcon,
} from 'lucide-react';

// 4 official post types from mobile app:
// static const typePost = 'post';
// static const typeFamilyTree = 'family';
// static const typeAlbum = 'album';
// static const typeAngelVideo = 'angel_video';
export const POST_TYPES = {
  POST: 'post',
  FAMILY: 'family',
  ALBUM: 'album',
  ANGEL_VIDEO: 'angel_video',
} as const;

export default function PostDetailView() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const id = (params?.id as string) || '';
  const dParam = searchParams.get('d');
  const isDemo =
    searchParams.get('demo') === '1' ||
    searchParams.get('demo') === 'true' ||
    id === 'demo';

  // Decode the `d` Base64 JSON parameter: { t: title, c: caption, i: image, ty: type }
  const { decodedData, isCorrupted } = useMemo(() => {
    if (!dParam) return { decodedData: null, isCorrupted: false };
    try {
      const base64 = dParam.replace(/-/g, '+').replace(/_/g, '/');
      const jsonStr = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const parsed = JSON.parse(jsonStr);
      if (!parsed || typeof parsed !== 'object') {
        return { decodedData: null, isCorrupted: true };
      }
      return {
        decodedData: parsed as { t?: string; c?: string; i?: string; ty?: string },
        isCorrupted: false,
      };
    } catch {
      try {
        const jsonStr = atob(dParam);
        const parsed = JSON.parse(jsonStr);
        if (!parsed || typeof parsed !== 'object') {
          return { decodedData: null, isCorrupted: true };
        }
        return {
          decodedData: parsed as { t?: string; c?: string; i?: string; ty?: string },
          isCorrupted: false,
        };
      } catch (err) {
        console.error('Error decoding post payload:', err);
        return { decodedData: null, isCorrupted: true };
      }
    }
  }, [dParam]);

  // Determine post type (post, family, album, angel_video)
  const rawType = (
    decodedData?.ty ||
    searchParams.get('type') ||
    searchParams.get('ty') ||
    'post'
  ).toLowerCase();

  const isFamily = rawType === POST_TYPES.FAMILY;
  const isAlbum = rawType === POST_TYPES.ALBUM;
  const isAngelVideo = rawType === POST_TYPES.ANGEL_VIDEO;
  const isPost = !isFamily && !isAlbum && !isAngelVideo;

  // Extract raw fields
  const rawTitle =
    decodedData?.t || searchParams.get('t') || searchParams.get('title');
  const rawCaption =
    decodedData?.c ||
    searchParams.get('c') ||
    searchParams.get('caption') ||
    searchParams.get('desc');
  const rawImage =
    decodedData?.i || searchParams.get('i') || searchParams.get('image');

  // Check if valid payload
  const hasValidPayload =
    Boolean(rawTitle) ||
    Boolean(rawCaption) ||
    Boolean(rawImage) ||
    Boolean(
      decodedData?.ty &&
        ['family', 'album', 'angel_video', 'post'].includes(
          decodedData.ty.toLowerCase()
        )
    );

  // Check if post is not found (corrupted d payload, or empty data on invalid url)
  const isNotFound =
    id === '404' ||
    id === 'not-found' ||
    isCorrupted ||
    (!isDemo && !hasValidPayload);

  // Fallbacks & Branding metadata depending on type
  const typeMeta = useMemo(() => {
    if (isFamily) {
      return {
        badge: 'Family Tree',
        titleFallback: 'Family Tree',
        captionFallback:
          'Explore your family tree lineage, generational connections, and loved ones on My Loving Day.',
        headline: (
          <>
            Explore The Family Tree <br />
            <span style={{ color: '#024BA4', fontWeight: 800 }}>
              Preserved With Love.
            </span>
          </>
        ),
        subtitle:
          'View interconnected generations, family tree members, and cherished relationships preserved for future generations.',
        actionLabel: 'Open Family Tree in App',
      };
    }
    if (isAlbum) {
      return {
        badge: 'Photo Album',
        titleFallback: 'Family Photo Album',
        captionFallback:
          'A curated collection of cherished family memories and photographs preserved with love on My Loving Day.',
        headline: (
          <>
            Cherished Photo Album <br />
            <span style={{ color: '#024BA4', fontWeight: 800 }}>
              Preserved With Love.
            </span>
          </>
        ),
        subtitle:
          'Browse high-resolution photo memories, special milestones, and preserved legacy albums inside the My Loving Day app.',
        actionLabel: 'Open Photo Album in App',
      };
    }
    if (isAngelVideo) {
      return {
        badge: 'Angel Video',
        titleFallback: 'Angel Video Memory',
        captionFallback:
          'A heartfelt angel video message preserved forever with love on My Loving Day.',
        headline: (
          <>
            Heartfelt Angel Video <br />
            <span style={{ color: '#024BA4', fontWeight: 800 }}>
              Preserved With Love.
            </span>
          </>
        ),
        subtitle:
          'Watch meaningful video messages, heartfelt voices, and timeless recordings kept safe for your family.',
        actionLabel: 'Watch Video in App',
      };
    }
    return {
      badge: 'Memory',
      titleFallback: 'Cherished Family Memory',
      captionFallback:
        'A special memory preserved with love on My Loving Day. Kept secure for future generations.',
      headline: (
        <>
          Where Every Memory <br />
          <span style={{ color: '#024BA4', fontWeight: 800 }}>
            Finds a Safe Home.
          </span>
        </>
      ),
      subtitle:
        'View full photo albums, listen to heartfelt voice notes, and keep your family connections alive forever with our encrypted legacy platform.',
      actionLabel: 'Open in My Loving Day',
    };
  }, [isFamily, isAlbum, isAngelVideo]);

  // Fallback values
  const title =
    rawTitle ||
    (isDemo
      ? typeMeta.titleFallback
      : isNotFound
      ? 'Post Not Found'
      : typeMeta.titleFallback);

  const caption =
    rawCaption ||
    (isDemo
      ? typeMeta.captionFallback
      : '');

  const image =
    rawImage ||
    (isDemo
      ? 'https://mylovingday.com/wp-content/uploads/2025/01/screens-3-1-466x1024.png'
      : '');

  // Deep link to open inside the app
  const queryStr = dParam ? `?d=${encodeURIComponent(dParam)}` : '';
  const appDeepLink = `lovingday://posts/${id || '1'}${queryStr}`;
  const playStoreLink =
    'https://play.google.com/';
  const appStoreLink = 'https://apps.apple.com';

  const handleOpenApp = () => {
    setIsModalOpen(true);
  };

  return (
    <div
      className="post-detail-page-wrapper"
      style={{
        backgroundColor: '#F8FAFC',
        minHeight: '100vh',
        paddingTop: '240px',
        paddingBottom: '90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '20%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(0, 210, 255, 0.12) 0%, rgba(2, 75, 164, 0.05) 50%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(2, 75, 164, 0.08) 0%, rgba(0, 210, 255, 0.03) 50%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="container-custom"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1180px',
        }}
      >
        <div className="post-rich-layout">
          {/* ============================================================ */}
          {/* LEFT COLUMN: iPhone 17 Mockup with Live Post Preview */}
          {/* ============================================================ */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Ambient Halo behind phone */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                height: '85%',
                background:
                  'radial-gradient(ellipse, rgba(0, 210, 255, 0.22) 0%, rgba(2, 75, 164, 0.12) 50%, transparent 75%)',
                filter: 'blur(45px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            <div
              className="iphone-mockup-wrapper"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '350px',
                aspectRatio: '388 / 800',
                filter:
                  'drop-shadow(0 25px 50px rgba(2, 75, 164, 0.25)) drop-shadow(0 15px 30px rgba(0, 0, 0, 0.18))',
                zIndex: 1,
              }}
            >
              {/* Screen Content Container (Inside frame bezels) */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.8%',
                  bottom: '1.8%',
                  left: '3.6%',
                  right: '3.6%',
                  borderRadius: '42px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  zIndex: 1,
                }}
              >
                {/* iOS Status Bar */}
                <div
                  style={{
                    paddingTop: '12px',
                    paddingLeft: '22px',
                    paddingRight: '22px',
                    paddingBottom: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#FFFFFF',
                    zIndex: 5,
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#000000',
                      letterSpacing: '-0.3px',
                    }}
                  >
                    9:41
                  </span>

                  {/* Spacer for Dynamic Island */}
                  <div style={{ width: '80px', height: '22px' }} />

                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Wifi size={13} color="#000000" />
                    <Battery size={15} color="#000000" />
                  </div>
                </div>

                {/* App Nav Header */}
                <div
                  style={{
                    padding: '6px 14px 8px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #F1F5F9',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <Link
                    href="/"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      textDecoration: 'none',
                    }}
                  >
                    <ChevronLeft size={18} color="#024BA4" />
                    <span
                      style={{
                        fontSize: '14px',
                        fontWeight: 800,
                        color: '#024BA4',
                      }}
                    >
                      My Loving Day
                    </span>
                  </Link>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: isNotFound ? '#DC2626' : '#024BA4',
                      backgroundColor: isNotFound
                        ? 'rgba(239, 68, 68, 0.08)'
                        : 'rgba(2, 75, 164, 0.08)',
                      padding: '3px 8px',
                      borderRadius: '9999px',
                    }}
                  >
                    <span>
                      {isNotFound ? 'Not Found' : typeMeta.badge}
                    </span>
                  </div>
                </div>

                {/* Post Screen Content */}
                {isNotFound ? (
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '24px 18px',
                      textAlign: 'center',
                      backgroundColor: '#FAFAFA',
                    }}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        backgroundColor: '#FEF2F2',
                        border: '2px solid #FEE2E2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '14px',
                        boxShadow: '0 8px 20px rgba(239, 68, 68, 0.15)',
                      }}
                    >
                      <AlertCircle size={32} color="#EF4444" />
                    </div>

                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        color: '#EF4444',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        marginBottom: '4px',
                      }}
                    >
                      Error 404
                    </div>

                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 800,
                        color: '#0F172A',
                        margin: '0 0 6px 0',
                        lineHeight: 1.25,
                      }}
                    >
                      Post Not Found
                    </h3>

                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: 1.5,
                        color: '#64748B',
                        margin: '0 0 18px 0',
                        maxWidth: '220px',
                      }}
                    >
                      This memory link is invalid, expired, or has been removed.
                    </p>

                    <Link
                      href="/"
                      style={{
                        backgroundColor: '#024BA4',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        fontSize: '12px',
                        padding: '9px 18px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 12px rgba(2, 75, 164, 0.25)',
                      }}
                    >
                      <Home size={13} />
                      <span>Go to Home</span>
                    </Link>
                  </div>
                ) : (
                  /* Scrollable Post Content Inside Phone Screen */
                  <div
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Author Profile */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '10px',
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: '#024BA4',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          fontWeight: 800,
                          boxShadow: '0 3px 8px rgba(2, 75, 164, 0.2)',
                        }}
                      >
                        <Heart size={15} color="#ffffff" fill="#ffffff" />
                      </div>
                      <div>
                        <h4
                          style={{
                            margin: 0,
                            fontSize: '13px',
                            fontWeight: 800,
                            color: '#0F172A',
                          }}
                        >
                          My Loving Day
                        </h4>
                        <span
                          style={{
                            fontSize: '10.5px',
                            color: '#64748B',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <ShieldCheck size={11} color="#024BA4" /> Preserved {typeMeta.badge}
                        </span>
                      </div>
                    </div>

                    {/* Memory Visual / Image or Placeholder */}
                    {image ? (
                      <div
                        style={{
                          borderRadius: '14px',
                          overflow: 'hidden',
                          backgroundColor: '#F1F5F9',
                          marginBottom: '10px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
                          maxHeight: '230px',
                          position: 'relative',
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image}
                          alt={title}
                          style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '230px',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                        {isAngelVideo && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '48px',
                              height: '48px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(2, 75, 164, 0.9)',
                              backdropFilter: 'blur(4px)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.35)',
                            }}
                          >
                            <Play
                              size={20}
                              color="#FFFFFF"
                              fill="#FFFFFF"
                              style={{ marginLeft: '2px' }}
                            />
                          </div>
                        )}
                      </div>
                    ) : isFamily ? (
                      /* ============================================================ */
                      /* FAMILY TREE PLACEHOLDER (When image is not provided) */
                      /* ============================================================ */
                      <div
                        onClick={handleOpenApp}
                        style={{
                          borderRadius: '16px',
                          background:
                            'linear-gradient(145deg, #F0F7FF 0%, #E0F0FE 60%, #DBEAFE 100%)',
                          border: '1.5px solid #BFDBFE',
                          padding: '16px 14px 12px 14px',
                          marginBottom: '12px',
                          boxShadow: '0 6px 16px rgba(2, 75, 164, 0.08)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Ambient soft glow */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '-20%',
                            right: '-20%',
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background:
                              'radial-gradient(circle, rgba(0, 210, 255, 0.25) 0%, transparent 70%)',
                            pointerEvents: 'none',
                          }}
                        />

                        {/* Tree Nodes Graphic */}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            marginBottom: '10px',
                          }}
                        >
                          {/* Root Node: Parents / Head */}
                          <div
                            style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '50%',
                              backgroundColor: '#024BA4',
                              border: '2.5px solid #FFFFFF',
                              boxShadow: '0 4px 12px rgba(2, 75, 164, 0.3)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              zIndex: 2,
                            }}
                          >
                            <Users size={20} color="#FFFFFF" />
                          </div>

                          {/* Connecting Tree Branch SVG */}
                          <svg
                            width="150"
                            height="28"
                            viewBox="0 0 150 28"
                            fill="none"
                            style={{ margin: '-2px 0' }}
                          >
                            <line
                              x1="75"
                              y1="0"
                              x2="75"
                              y2="12"
                              stroke="#93C5FD"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M 30 26 C 30 14, 75 14, 75 14 C 75 14, 120 14, 120 26"
                              stroke="#93C5FD"
                              strokeWidth="2.5"
                              fill="none"
                              strokeLinecap="round"
                            />
                          </svg>

                          {/* Child Nodes */}
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              width: '140px',
                              zIndex: 2,
                            }}
                          >
                            <div
                              style={{
                                width: '34px',
                                height: '34px',
                                borderRadius: '50%',
                                backgroundColor: '#0284C7',
                                border: '2px solid #FFFFFF',
                                boxShadow: '0 3px 10px rgba(2, 132, 199, 0.25)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Heart size={15} color="#FFFFFF" fill="#FFFFFF" />
                            </div>
                            <div
                              style={{
                                width: '34px',
                                height: '34px',
                                borderRadius: '50%',
                                backgroundColor: '#F59E0B',
                                border: '2px solid #FFFFFF',
                                boxShadow: '0 3px 10px rgba(245, 158, 11, 0.25)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <User size={15} color="#FFFFFF" />
                            </div>
                          </div>
                        </div>

                        {/* Badge & Caption inside placeholder */}
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            backgroundColor: '#FFFFFF',
                            padding: '3px 10px',
                            borderRadius: '9999px',
                            border: '1px solid #BFDBFE',
                            boxShadow: '0 2px 6px rgba(2, 75, 164, 0.08)',
                            marginBottom: '3px',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 800,
                              color: '#024BA4',
                              letterSpacing: '0.2px',
                            }}
                          >
                            Interactive Family Tree
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '10px',
                            color: '#64748B',
                            fontWeight: 600,
                          }}
                        >
                          Tap to explore full lineage in app
                        </span>
                      </div>
                    ) : isAlbum ? (
                      /* ============================================================ */
                      /* PHOTO ALBUM PLACEHOLDER (When image is not provided) */
                      /* ============================================================ */
                      <div
                        onClick={handleOpenApp}
                        style={{
                          borderRadius: '16px',
                          background:
                            'linear-gradient(145deg, #F8FAFC 0%, #EFF6FF 50%, #E0F2FE 100%)',
                          border: '1.5px solid #E2E8F0',
                          padding: '18px 14px 12px 14px',
                          marginBottom: '12px',
                          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Stacked Polaroid Effect */}
                        <div
                          style={{
                            position: 'relative',
                            width: '110px',
                            height: '76px',
                            marginBottom: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {/* Back Left Card */}
                          <div
                            style={{
                              position: 'absolute',
                              width: '68px',
                              height: '62px',
                              borderRadius: '10px',
                              backgroundColor: '#FFFFFF',
                              border: '2px solid #E2E8F0',
                              transform: 'rotate(-9deg) translateX(-14px)',
                              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.07)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <div
                              style={{
                                width: '46px',
                                height: '38px',
                                borderRadius: '6px',
                                backgroundColor: '#F1F5F9',
                              }}
                            />
                          </div>

                          {/* Back Right Card */}
                          <div
                            style={{
                              position: 'absolute',
                              width: '68px',
                              height: '62px',
                              borderRadius: '10px',
                              backgroundColor: '#FFFFFF',
                              border: '2px solid #E2E8F0',
                              transform: 'rotate(8deg) translateX(14px)',
                              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.07)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <div
                              style={{
                                width: '46px',
                                height: '38px',
                                borderRadius: '6px',
                                backgroundColor: '#F8FAFC',
                              }}
                            />
                          </div>

                          {/* Center Front Card */}
                          <div
                            style={{
                              position: 'relative',
                              width: '74px',
                              height: '68px',
                              borderRadius: '12px',
                              background:
                                'linear-gradient(135deg, #024BA4 0%, #00D2FF 100%)',
                              border: '2.5px solid #FFFFFF',
                              boxShadow: '0 8px 20px rgba(2, 75, 164, 0.28)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              zIndex: 3,
                            }}
                          >
                            <ImageIcon size={26} color="#FFFFFF" />
                            <span
                              style={{
                                fontSize: '8.5px',
                                fontWeight: 800,
                                color: '#FFFFFF',
                                marginTop: '2px',
                                letterSpacing: '0.4px',
                              }}
                            >
                              ALBUM
                            </span>
                          </div>
                        </div>

                        {/* Badge & Subtitle */}
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            backgroundColor: '#FFFFFF',
                            padding: '3px 10px',
                            borderRadius: '9999px',
                            border: '1px solid #CBD5E1',
                            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                            marginBottom: '3px',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 800,
                              color: '#024BA4',
                              letterSpacing: '0.2px',
                            }}
                          >
                            Curated Photo Album
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '10px',
                            color: '#64748B',
                            fontWeight: 600,
                          }}
                        >
                          Tap to browse all photos in app
                        </span>
                      </div>
                    ) : isAngelVideo ? (
                      /* ============================================================ */
                      /* ANGEL VIDEO PLACEHOLDER (When image is not provided) */
                      /* ============================================================ */
                      <div
                        onClick={handleOpenApp}
                        style={{
                          borderRadius: '16px',
                          background:
                            'linear-gradient(145deg, #0F172A 0%, #1E293B 100%)',
                          border: '1.5px solid #334155',
                          padding: '24px 14px 16px 14px',
                          marginBottom: '12px',
                          boxShadow: '0 8px 22px rgba(15, 23, 42, 0.3)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            width: '54px',
                            height: '54px',
                            borderRadius: '50%',
                            backgroundColor: '#024BA4',
                            border: '2px solid rgba(255, 255, 255, 0.4)',
                            boxShadow: '0 6px 20px rgba(2, 75, 164, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '10px',
                          }}
                        >
                          <Play
                            size={22}
                            color="#FFFFFF"
                            fill="#FFFFFF"
                            style={{ marginLeft: '2px' }}
                          />
                        </div>

                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            padding: '3px 10px',
                            borderRadius: '9999px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            marginBottom: '4px',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 800,
                              color: '#38BDF8',
                              letterSpacing: '0.2px',
                            }}
                          >
                            Angel Video Memory
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '10px',
                            color: '#94A3B8',
                            fontWeight: 600,
                          }}
                        >
                          Tap to play video in app
                        </span>
                      </div>
                    ) : null}

                    {/* Post Action Icons */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '2px 4px 6px 4px',
                        color: '#475569',
                      }}
                    >
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Heart size={17} color="#EF4444" fill="#EF4444" />
                        <MessageCircle size={17} color="#475569" />
                        <Share2 size={17} color="#475569" />
                      </div>
                      <Bookmark size={17} color="#475569" />
                    </div>

                    {/* Title (t) */}
                    <h2
                      style={{
                        fontSize: '16px',
                        fontWeight: 900,
                        color: '#0F172A',
                        lineHeight: 1.3,
                        marginBottom: '6px',
                      }}
                    >
                      {title}
                    </h2>

                    {/* Caption (c) */}
                    {caption && (
                      <p
                        style={{
                          fontSize: '12.5px',
                          lineHeight: 1.5,
                          color: '#334155',
                          marginBottom: '12px',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {caption}
                      </p>
                    )}
                  </div>
                )}

                {/* Bottom Action Area inside Screen */}
                <div
                  style={{
                    padding: '10px 14px 18px 14px',
                    backgroundColor: '#FFFFFF',
                    borderTop: '1px solid #F1F5F9',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    zIndex: 15,
                  }}
                >
                  <button
                    onClick={handleOpenApp}
                    className="mockup-action-btn"
                    style={{
                      width: '100%',
                      backgroundColor: '#024BA4',
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '11px 16px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 14px rgba(2, 75, 164, 0.25)',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <span>
                      {isNotFound ? 'Open in My Loving Day' : typeMeta.actionLabel}
                    </span>
                    <ExternalLink size={14} />
                  </button>

                  {/* Home Indicator */}
                  <div
                    style={{
                      width: '100px',
                      height: '4px',
                      backgroundColor: '#0F172A',
                      borderRadius: '9999px',
                      opacity: 0.7,
                    }}
                  />
                </div>
              </div>

              {/* iPhone Frame PNG Overlaid on Top */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/iphone-frame.png"
                alt="iPhone Frame Mockup"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  pointerEvents: 'none',
                  zIndex: 20,
                }}
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Rich, Balanced Brand & Download Showcase */}
          {/* ============================================================ */}
          <div
            className="post-right-column"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '24px',
              paddingLeft: '10px',
            }}
          >
            {/* Top Brand Header Row */}
            <div
              className="brand-header-row"
              style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
            >
              <Link href="/">
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '12px 20px',
                    borderRadius: '20px',
                    boxShadow: '0 8px 24px rgba(2, 75, 164, 0.1)',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className="brand-logo-card"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://mylovingday.com/wp-content/uploads/2025/01/Logo-mn-300x260.png"
                    alt="My Loving Day"
                    style={{
                      width: '85px',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </div>
              </Link>

              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: '22px',
                    fontWeight: 900,
                    color: '#0F172A',
                    letterSpacing: '-0.3px',
                  }}
                >
                  My Loving Day
                </h3>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '2px',
                    fontSize: '13px',
                    color: '#64748B',
                    fontWeight: 600,
                  }}
                >
                  <div style={{ display: 'flex', color: '#F59E0B' }}>
                    <Star size={13} fill="#F59E0B" />
                    <Star size={13} fill="#F59E0B" />
                    <Star size={13} fill="#F59E0B" />
                    <Star size={13} fill="#F59E0B" />
                    <Star size={13} fill="#F59E0B" />
                  </div>
                  <span>4.9 (Trusted by Families)</span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            {isNotFound ? (
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '9999px',
                    backgroundColor: '#FEF2F2',
                    border: '1px solid #FEE2E2',
                    color: '#DC2626',
                    fontSize: '12px',
                    fontWeight: 800,
                    marginBottom: '14px',
                  }}
                >
                  <AlertCircle size={14} color="#DC2626" />
                  <span>Link Expired or Invalid</span>
                </div>

                <h1
                  className="post-main-title"
                  style={{
                    fontSize: '40px',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1.15,
                    letterSpacing: '-0.025em',
                    margin: '0 0 12px 0',
                  }}
                >
                  Post Not Found <br />
                  <span style={{ color: '#024BA4', fontWeight: 800 }}>
                    This Memory is Unavailable.
                  </span>
                </h1>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: '#475569',
                    margin: '0 0 20px 0',
                    maxWidth: '520px',
                  }}
                >
                  The URL you entered is incorrect, expired, or the shared memory
                  has been removed. You can return to our homepage or download the
                  official app to start preserving your family memories.
                </p>

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
                    padding: '12px 24px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 18px rgba(2, 75, 164, 0.22)',
                    transition: 'all 0.2s ease',
                  }}
                  className="back-home-btn"
                >
                  <Home size={16} />
                  <span>Return to Homepage</span>
                </Link>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(2, 75, 164, 0.08)',
                    color: '#024BA4',
                    fontSize: '12px',
                    fontWeight: 800,
                    marginBottom: '14px',
                  }}
                >
                  <span>{typeMeta.badge}</span>
                </div>

                <h1
                  className="post-main-title"
                  style={{
                    fontSize: '40px',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1.15,
                    letterSpacing: '-0.025em',
                    margin: '0 0 12px 0',
                  }}
                >
                  {typeMeta.headline}
                </h1>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: '#475569',
                    margin: 0,
                    maxWidth: '520px',
                  }}
                >
                  {typeMeta.subtitle}
                </p>
              </div>
            )}

            {/* Download Buttons Section */}
            <div
              className="download-card-wrapper"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                maxWidth: '520px',
              }}
            >
              <div
                style={{
                  fontSize: '12.5px',
                  fontWeight: 800,
                  color: '#024BA4',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  marginBottom: '14px',
                }}
              >
                Get The Official App
              </div>

              <div
                className="download-buttons-row"
                style={{
                  display: 'flex',
                  gap: '14px',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}
              >
                {/* Apple App Store Button */}
                <a
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-badge-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '14px',
                    backgroundColor: '#0a0a0a',
                    color: '#FFFFFF',
                    padding: '10px 22px',
                    borderRadius: '13px',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    textDecoration: 'none',
                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.18)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.65-.79 1.1-1.9 0.97-3.01-1 .04-2.16.66-2.85 1.46-.61.69-1.14 1.81-1 2.9 1.11.09 2.23-.56 2.88-1.35z" />
                  </svg>
                  <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
                    <div
                      style={{
                        fontSize: '9.5px',
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
                        fontSize: '19px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        letterSpacing: '-0.3px',
                      }}
                    >
                      App Store
                    </div>
                  </div>
                </a>

                {/* Google Play Button */}
                <a
                  href={playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-badge-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '14px',
                    backgroundColor: '#0a0a0a',
                    color: '#FFFFFF',
                    padding: '10px 22px',
                    borderRadius: '13px',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    textDecoration: 'none',
                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.18)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
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
                        fontSize: '9.5px',
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
                        fontSize: '19px',
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
        </div>
      </div>

      {/* ============================================================ */}
      {/* Interactive Dialog / Modal: App Store & Play Store Download */}
      {/* ============================================================ */}
      {isModalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
          }}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '440px',
              width: '100%',
              padding: '36px 28px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              position: 'relative',
              textAlign: 'center',
              animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Close dialog"
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                backgroundColor: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748B',
                transition: 'all 0.2s ease',
              }}
            >
              <X size={18} />
            </button>

            {/* App Icon Emblem */}
            <div
              style={{
                width: '72px',
                height: '72px',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                boxShadow: '0 10px 25px rgba(2, 75, 164, 0.18)',
                margin: '0 auto 16px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #E2E8F0',
                padding: '6px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://mylovingday.com/wp-content/uploads/2025/01/Logo-mn-300x260.png"
                alt="My Loving Day"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <h3
              style={{
                fontSize: '22px',
                fontWeight: 900,
                color: '#0F172A',
                marginBottom: '8px',
              }}
            >
              Download My Loving Day
            </h3>

            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.6,
                color: '#64748B',
                marginBottom: '22px',
              }}
            >
              Download the official app to view full memories and keep your family
              connections alive forever.
            </p>

            {/* Store Buttons inside Modal */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {/* Apple App Store */}
              <a
                href={appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  backgroundColor: '#0a0a0a',
                  color: '#FFFFFF',
                  padding: '10px 20px',
                  borderRadius: '13px',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
                  transition: 'all 0.2s ease',
                }}
                className="store-action-btn"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.65-.79 1.1-1.9 0.97-3.01-1 .04-2.16.66-2.85 1.46-.61.69-1.14 1.81-1 2.9 1.11.09 2.23-.56 2.88-1.35z" />
                </svg>
                <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
                  <div
                    style={{
                      fontSize: '9.5px',
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      color: '#D1D5DB',
                      fontWeight: 600,
                    }}
                  >
                    DOWNLOAD ON THE
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.3px' }}>
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  backgroundColor: '#0a0a0a',
                  color: '#FFFFFF',
                  padding: '10px 20px',
                  borderRadius: '13px',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
                  transition: 'all 0.2s ease',
                }}
                className="store-action-btn"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
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
                      fontSize: '9.5px',
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      color: '#D1D5DB',
                      fontWeight: 600,
                    }}
                  >
                    GET IT ON
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                    Google Play
                  </div>
                </div>
              </a>
            </div>

            {/* Dismiss */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                marginTop: '16px',
                background: 'none',
                border: 'none',
                color: '#64748B',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Continue viewing on web
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .post-detail-page-wrapper {
          padding-top: 240px;
          padding-bottom: 90px;
        }
        .post-rich-layout {
          display: grid;
          grid-template-columns: minmax(310px, 360px) 1.2fr;
          gap: 60px;
          align-items: center;
        }
        .iphone-mockup-wrapper {
          position: relative;
          width: 100%;
          max-width: 350px;
          aspect-ratio: 388 / 800;
          filter: drop-shadow(0 25px 50px rgba(2, 75, 164, 0.25)) drop-shadow(0 15px 30px rgba(0, 0, 0, 0.18));
          z-index: 1;
        }
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .brand-logo-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(2, 75, 164, 0.16) !important;
        }
        .mockup-action-btn:hover {
          background-color: #013b82 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(2, 75, 164, 0.35) !important;
        }
        .download-badge-btn:hover {
          transform: translateY(-3px);
          background-color: #1e293b !important;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22) !important;
        }
        .store-action-btn:hover {
          transform: translateY(-2px);
          background-color: #1e293b !important;
        }
        .back-home-btn:hover {
          background-color: #013b82 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(2, 75, 164, 0.35) !important;
        }
        @media (max-width: 991px) {
          .post-detail-page-wrapper {
            padding-top: 135px !important;
            padding-bottom: 60px !important;
          }
          .post-rich-layout {
            grid-template-columns: 1fr;
            gap: 40px;
            max-width: 540px;
            margin: 0 auto;
          }
          .iphone-mockup-wrapper {
            max-width: 320px !important;
          }
          .post-right-column {
            padding-left: 0 !important;
            align-items: center !important;
            text-align: center !important;
          }
          .brand-header-row {
            justify-content: center !important;
          }
          .post-main-title {
            font-size: 32px !important;
          }
          .download-card-wrapper {
            margin: 0 auto !important;
            width: 100% !important;
          }
          .download-buttons-row {
            justify-content: center !important;
          }
        }
        @media (max-width: 480px) {
          .post-detail-page-wrapper {
            padding-top: 115px !important;
            padding-bottom: 40px !important;
          }
          .iphone-mockup-wrapper {
            max-width: 290px !important;
          }
          .post-main-title {
            font-size: 26px !important;
          }
          .download-badge-btn {
            padding: 8px 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
