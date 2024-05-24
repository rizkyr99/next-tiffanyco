import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Gifts = () => {
  return (
    <>
      <div>
        <div className='text-sm font-semibold mb-4'>Gifts for...</div>
        <div className='flex flex-col gap-y-4'>
          <Link href='necklaces-and-pendants' className='text-sm font-light'>
            Her
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Graduates
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Dad
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Him
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Baby
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            The Home
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            The Couple
          </Link>
          <Link
            href='/jewelry'
            className='flex items-center gap-2 text-sm font-semibold'>
            Explore All Gifts
            <ChevronRight className='size-4 stroke-1' />
          </Link>
        </div>
      </div>
      <div>
        <div className='text-sm font-semibold mb-4'>Discover</div>
        <div className='flex flex-col gap-y-4'>
          <Link href='necklaces-and-pendants' className='text-sm font-light'>
            Gifts $1,500 & Under
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Online Exclusives
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Tiffany Blue Gifts
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Gifts to Personalize
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Wedding Gifts
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Anniversary Gifts
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Birthday Gifts
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Business Gifts
          </Link>
        </div>
      </div>
      <div className='col-span-2'>
        <Image
          src='/assets/images/categories/2024-Icons-Nav-Schlum.webp'
          width={750}
          height={500}
          alt=''
          className='w-full'
        />
        <p className='text-sm font-light mt-4'>Gifts for Her</p>
        <Link href='/' className='underline-hover-link mt-3'>
          Shop Now
          <ChevronRight className='size-4 stroke-1' />
        </Link>
      </div>
    </>
  );
};

export default Gifts;
