import type { Metadata } from 'next';
import { Mulish, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';

const mulish = Mulish({ subsets: ['latin'] });
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
});

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
      <body className={cn(mulish.className, playfair.variable)}>
        {children}
      </body>
    </html>
  );
}
