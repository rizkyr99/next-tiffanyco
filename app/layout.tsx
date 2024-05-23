import type { Metadata } from 'next';
import { Inter, Mulish } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });
const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tiffany & Co. US | Luxury Jewelry, Gifts & Accessories Since 1837',
  description:
    'Discover fine jewelry creations of timeless beauty and superlative craftsmanship that will be treasured always.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={mulish.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
