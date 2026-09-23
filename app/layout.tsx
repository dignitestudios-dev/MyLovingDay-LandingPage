import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'My Loving Day - Where Every Memory Finds a Safe Home',
  description:
    'My Loving Day App is a secure and compassionate platform designed to preserve your most treasured memories, heartfelt messages, and final wishes.',
  icons: {
    icon: 'https://mylovingday.com/wp-content/uploads/2025/01/cropped-logo-100px-32x32.png',
    apple: 'https://mylovingday.com/wp-content/uploads/2025/01/cropped-logo-100px-180x180.png',
  },
  openGraph: {
    title: 'My Loving Day',
    description: 'Where Every Memory Finds a Safe Home',
    url: 'https://mylovingday.com',
    siteName: 'My Loving Day',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
