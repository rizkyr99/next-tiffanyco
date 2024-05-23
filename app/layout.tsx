import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
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
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
