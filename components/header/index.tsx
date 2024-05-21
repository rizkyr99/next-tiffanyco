'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Menu, ShoppingBag } from 'lucide-react';
import MobileNav from './MobileNav';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavOpen = () => {
    setIsOpen(true);
  };

  const handleNavClose = () => {
    setIsOpen(false);
  };

  return (
    <header className='h-12 lg:h-16 bg-white'>
      <nav className='h-full flex justify-between items-center p-4'>
        <div className='flex-1'>
          <button onClick={handleNavOpen}>
            <Menu className='size-6 stroke-1' />
          </button>
        </div>
        <Image
          src='/assets/images/logo.png'
          width={190}
          height={26}
          alt='tiffany & co logo'
          className='w-32 lg:w-48 flex-1'
        />
        <div className='flex items-center gap-4 flex-1 justify-end'>
          <div>
            <Heart className='size-4 stroke-1' />
          </div>
          <div>
            <ShoppingBag className='size-4 stroke-1' />
          </div>
        </div>
      </nav>
      <MobileNav isOpen={isOpen} onClose={handleNavClose} />
    </header>
  );
};

export default Header;
