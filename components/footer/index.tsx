import React from 'react';
import FooterDropdown from './FooterDropdown';
import { footerLinks } from '@/data/footerLinks';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='border-t-8 border-primary mt-12 px-4 py-6 lg:px-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-4 md:gap-y-8'>
        {footerLinks.map((link) => (
          <FooterDropdown
            key={link.title}
            title={link.title}
            items={link.items}
          />
        ))}
        <div className='hidden md:block'>
          <div className='text-sm font-semibold mb-12'>Latest from Tiffany</div>
          <p className='text-xs'>
            Be the first to know about exciting new designs, special events,
            store openings and much more.
          </p>
          <input
            type='text'
            placeholder='Email'
            className='bg-transparent border-b border-black w-full outline-none my-8'
          />
          <button className='border border-black text-sm px-12 py-2 font-semibold'>
            Sign up
          </button>
          <div className='flex items-center gap-8 mt-16'>
            <Link href='https://instagram.com/tiffanyandco/'>
              <Instagram className='size-7 stroke-1' />
            </Link>
            <Link href='https://www.facebook.com/Tiffany/'>
              <Facebook className='size-7 stroke-1' />
            </Link>
            <Link href='https://twitter.com/TiffanyAndCo/'>
              <Twitter className='size-7 stroke-1' />
            </Link>
            <Link href='https://www.youtube.com/OfficialTiffanyAndCo/'>
              <Youtube className='size-7 stroke-1' />
            </Link>
          </div>
        </div>
      </div>
      <div className='pb-20 lg:pb-0 mt-12 text-sm text-center'>
        &copy;T&CO. 2024
      </div>
    </footer>
  );
};

export default Footer;
