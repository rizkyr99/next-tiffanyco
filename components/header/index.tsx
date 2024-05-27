import { useState } from 'react';
import Image from 'next/image';
import {
  Calendar,
  ConciergeBell,
  Heart,
  MapPin,
  Menu,
  Search,
  ShoppingBag,
  User,
} from 'lucide-react';
import MobileNav from './MobileNav';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='h-fit bg-white flex flex-col p-0'>
      <TopBar />
      <div className='h-12 md:h-fit flex justify-between items-center p-4 lg:px-6 border-t-4 border-primary'>
        <div className='flex-1 flex items-center gap-4 md:gap-8'>
          <MobileNav />
          <button className='hidden sm:flex cursor-pointer'>
            <Search className='size-5 stroke-1 hover:stroke-2' />
          </button>
          <button className='hidden md:flex cursor-pointer'>
            <MapPin className='size-5 stroke-1 hover:stroke-2' />
          </button>
          <button className='group hidden lg:flex items-center gap-2 text-sm cursor-pointer'>
            <ConciergeBell className='size-5 stroke-1 group-hover:stroke-2' />
            Contact us
          </button>
        </div>
        <Link href='/'>
          <Image
            src='/assets/images/logo.png'
            width={190}
            height={26}
            alt='tiffany & co logo'
            className='w-32 md:w-48 object-cover'
          />
        </Link>
        <div className='relative z-10 flex items-center gap-4 md:gap-8 flex-1 justify-end'>
          {/* <div className='absolute w-[calc(100%-8rem)] h-[calc(100%+2.5rem)] -top-5 -right-6 bg-primary -z-10' /> */}
          <button className='group hidden lg:flex items-center gap-2 text-sm'>
            <Calendar className='size-5 stroke-1 group-hover:stroke-2' />
            Book an Appointment
          </button>
          <div className='hidden lg:flex cursor-pointer'>
            <User className='size-5 stroke-1 hover:stroke-2' />
          </div>
          <div className='cursor-pointer'>
            <Heart className='size-5 stroke-1 hover:stroke-2' />
          </div>
          <div className='cursor-pointer'>
            <ShoppingBag className='size-5 stroke-1 hover:stroke-2' />
          </div>
        </div>
      </div>
      <Searchbar />
      <Navbar />
    </header>
  );
};

export default Header;
