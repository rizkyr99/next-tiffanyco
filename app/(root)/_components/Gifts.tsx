import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Gifts = () => {
  return (
    <section>
      <div className='grid grid-cols-1 max-w-screen-lg md:grid-cols-2 gap-x-28 mx-auto'>
        <div>
          <div className='relative w-full max-md:aspect-square overflow-hidden md:max-w-lg'>
            <Image
              src='/assets/images/categories/2024-MDAY-HP-OnFig-50-50-Lock1-Desktop.webp'
              width={400}
              height={500}
              alt='gifts for the graduate'
              className='object-cover w-full'
            />
          </div>
          <div className='py-4 px-6'>
            <p className='text-2xl font-semibold md:text-center'>
              Gifts for the Graduate
            </p>
            <Link href='/' className='underline-hover-link md:mx-auto'>
              Shop Now
              <ChevronRight className='size-4 stroke-1' />
            </Link>
          </div>
        </div>
        <div>
          <div className='relative w-full max-md:aspect-square overflow-hidden md:max-w-lg'>
            <Image
              src='/assets/images/categories/2024-TITAN-HP-50-50-Desktop.webp'
              width={400}
              height={500}
              alt='gifts for the graduate'
              className='object-cover w-full'
            />
          </div>
          <div className='py-4 px-6'>
            <p className='text-2xl font-semibold md:text-center'>
              Tiffany Titan by Pharrell Williams
            </p>
            <Link href='/' className='underline-hover-link md:mx-auto'>
              Shop Now
              <ChevronRight className='size-4 stroke-1' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
