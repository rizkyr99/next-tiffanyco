import Image from 'next/image';
import { ConciergeBell, MapPin, Search } from 'lucide-react';
import MobileNav from './MobileNav';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Link from 'next/link';

import NavRight from './NavRight';
import { auth } from '@/auth';

const Header = async () => {
  const session = await auth();
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
        <NavRight session={session} />
      </div>
      <Searchbar />
      <Navbar />
    </header>
  );
};

export default Header;
