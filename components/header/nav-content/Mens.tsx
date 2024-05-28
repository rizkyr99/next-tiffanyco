import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Mens = () => {
  return (
    <>
      <div>
        <div className='text-sm font-semibold mb-4'>Shop by Category</div>
        <div className='flex flex-col gap-y-6 lg:gap-y-4 px-6 lg:px-0'>
          <Link
            href='/jewelry/necklaces-and-pendants'
            className='text-sm font-light'>
            Necklaces & Pendants
          </Link>
          <Link href='/jewelry/shop/earrings' className='text-sm font-light'>
            Earrings
          </Link>
          <Link href='/jewelry/shop/bracelets' className='text-sm font-light'>
            Bracelets
          </Link>
          <Link href='/jewelry/shop/rings' className='text-sm font-light'>
            Rings
          </Link>
          <Link
            href='/jewelry/shop/fine-watches'
            className='text-sm font-light'>
            Fine Watches
          </Link>
          <Link href='/jewelry/shop/brooches' className='text-sm font-light'>
            Brooches
          </Link>
          <Link
            href='/jewelry/shop/mens-jewelry'
            className='text-sm font-light'>
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
        <div className='flex flex-col gap-y-6 lg:gap-y-4 px-6 lg:px-0'>
          <Link href='/gifts/shop/gifts-for-her' className='text-sm font-light'>
            Gifts for Her
          </Link>
          <Link
            href='/jewelry/shop/most-popular-jewelry'
            className='text-sm font-light'>
            Most Popular Jewelry
          </Link>
          <Link href='/jewelry/shop/new-jewelry' className='text-sm font-light'>
            New Jewelry
          </Link>
          <Link
            href='/jewelry/shop/high-jewelry'
            className='text-sm font-light'>
            High Jewelry
          </Link>
          <Link
            href='/jewelry/shop/bold-silver-jewelry'
            className='text-sm font-light'>
            Bold Silver Jewelry
          </Link>
          <Link
            href='/jewelry/shop/dainty-jewelry'
            className='text-sm font-light'>
            Dainty Jewelry
          </Link>
        </div>
      </div>
      <div>
        <div className='text-sm font-semibold mb-4'>Shop by Metal</div>
        <div className='flex flex-col gap-y-6 lg:gap-y-4 px-6 lg:px-0'>
          <Link href='necklaces-and-pendants' className='text-sm font-light'>
            Gold Jewelry
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Rose Gold Jewelry
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Platinum Jewelry
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Sterling Silver Jewelry
          </Link>
        </div>
        <div className='text-sm font-semibold my-4'>Shop by Gemstone</div>
        <div className='flex flex-col gap-y-6 lg:gap-y-4 px-6 lg:px-0'>
          <Link href='necklaces-and-pendants' className='text-sm font-light'>
            Diamond Jewelry
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Pearl Jewelry
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Aquamarine Jewelry
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Colored Gemstone Jewelry
          </Link>
        </div>
      </div>
      <div>
        <div className='text-sm font-semibold mb-4'>Featured Collections</div>
        <div className='flex flex-col gap-y-6 lg:gap-y-4 px-6 lg:px-0'>
          <Link href='necklaces-and-pendants' className='text-sm font-light'>
            Tiffany Lock
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Tiffany T
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Tiffany HardWear
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Tiffany Knot
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Jean Schlumberger by Tiffany
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Tiffany Victoria
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Return to Tiffany
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Elsa Peretti
          </Link>
          <Link href='earrings' className='text-sm font-light'>
            Paluma Picasso
          </Link>
          <Link
            href='/jewelry'
            className='flex items-center gap-2 text-sm font-semibold'>
            Explore All Collections
            <ChevronRight className='size-4 stroke-1' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Mens;
