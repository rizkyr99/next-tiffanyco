import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='hidden lg:block h-10 w-full bg-white'>
      <ul className='h-full w-full flex items-start gap-12 px-6 justify-center'>
        <li>
          <Link href='/' className='font-light'>
            Jewelry
          </Link>
        </li>
        <li>
          <Link href='/' className='font-light'>
            Gifts
          </Link>
        </li>
        <li>
          <Link href='/' className='font-light'>
            Jewelry
          </Link>
        </li>
        <li>
          <Link href='/' className='font-light'>
            Gifts
          </Link>
        </li>
        <li>
          <Link href='/' className='font-light'>
            Jewelry
          </Link>
        </li>
        <li>
          <Link href='/' className='font-light'>
            Gifts
          </Link>
        </li>
        <li>
          <Link href='/' className='font-light'>
            Jewelry
          </Link>
        </li>
        <li>
          <Link href='/' className='font-light'>
            Gifts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
