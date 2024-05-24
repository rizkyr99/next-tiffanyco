import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Jewelry = () => {
  return (
    <>
      <div>
        <div className='text-sm font-semibold mb-4'>Shop by Category</div>
        <div className='flex flex-col gap-y-4'>
          <Link href='necklaces-and-pendants' className='text-sm font-light'>
            Necklaces & Pendants
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Earrings
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Bracelets
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Rings
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Fine Watches
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Brooches
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Men&apos;s Jewelry
          </Link>
          <Link
            href='/jewelry'
            className='flex items-center gap-2 text-sm font-semibold'>
            Explore All Categories
            <ChevronRight className='size-4 stroke-1' />
          </Link>
        </div>
      </div>
      <div>
        <div className='text-sm font-semibold mb-4'>Curated Shops</div>
        <div className='flex flex-col gap-y-4'>
          <Link href='necklaces-and-pendants' className='text-sm font-light'>
            Gifts for Her
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Most Popular Jewelry
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            New Jewelry
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            High Jewelry
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Bold Silver Jewelry
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Dainty Jewelry
          </Link>
        </div>
      </div>
      <div>
        <div className='text-sm font-semibold mb-4'>Shop by Category</div>
        <div className='flex flex-col gap-y-4'>
          <Link href='necklaces-and-pendants' className='text-sm font-light'>
            Necklaces & Pendants
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Earrings
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Bracelets
          </Link>
          <Link
            href='/jewelry'
            className='flex items-center gap-2 text-sm font-semibold'>
            All Categories
            <ChevronRight className='size-4 stroke-1' />
          </Link>
        </div>
      </div>
      <div>
        <div className='text-sm font-semibold mb-4'>Shop by Category</div>
        <div className='flex flex-col gap-y-4'>
          <Link href='necklaces-and-pendants' className='text-sm font-light'>
            Necklaces & Pendants
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Earrings
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Bracelets
          </Link>
          <Link
            href='/jewelry'
            className='flex items-center gap-2 text-sm font-semibold'>
            All Categories
            <ChevronRight className='size-4 stroke-1' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Jewelry;
