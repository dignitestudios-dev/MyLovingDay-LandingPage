'use client';

import React, { Suspense } from 'react';
import PostDetailView from '@/components/PostDetailView';

export default function PostPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F8FAFC',
          }}
        >
          <div style={{ color: '#024BA4', fontWeight: 800, fontSize: '18px' }}>
            Loading memory...
          </div>
        </div>
      }
    >
      <PostDetailView />
    </Suspense>
  );
}
