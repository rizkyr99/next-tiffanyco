import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const LoveEngagement = () => {
  return (
    <>
      <div>
        <div className='text-sm font-semibold mb-4'>Engagement</div>
        <div className='flex flex-col gap-y-6 lg:gap-y-4 px-6 lg:px-0'>
          <Link
            href='/engagement/engagement-rings'
            className='text-sm font-light'>
            Engagement Rings
          </Link>
          <Link
            href='/engagement/mens-engagement-rings'
            className='text-sm font-light'>
            Men&apos;s Engagement Rings
          </Link>
          <Link
            href='/jewelry'
            className='flex items-center gap-2 text-sm font-semibold'>
            Book an Appointment
            <ChevronRight className='size-4 stroke-1' />
          </Link>
        </div>
        <div className='text-sm font-semibold mb-4'>Wedding</div>
        <div className='flex flex-col gap-y-6 lg:gap-y-4 px-6 lg:px-0'>
          <Link
            href='/engagement/womens-wedding-bands'
            className='text-sm font-light'>
            Women&apos;s Wedding Bands
          </Link>
          <Link
            href='/engagement/mens-wedding-bands'
            className='text-sm font-light'>
            Men&apos;s Wedding Bands
          </Link>
          <Link
            href='/engagement/wedding-band-sets'
            className='text-sm font-light'>
            Wedding Band Sets
          </Link>
          <Link href='/engagement/couples-rings' className='text-sm font-light'>
            Couples&apos; Rings;
          </Link>
          <Link
            href='/engagement'
            className='flex items-center gap-2 text-sm font-semibold'>
            Begin Your Journey
            <ChevronRight className='size-4 stroke-1' />
          </Link>
        </div>
      </div>
      <div>
        <div className='text-sm font-semibold mb-4'>The Tiffany Difference</div>
        <div className='flex flex-col gap-y-6 lg:gap-y-4 px-6 lg:px-0'>
          <Link
            href='/engagement/the-tiffany-guide-to-diamonds'
            className='text-sm font-light'>
            The Guides to Diamonds
          </Link>
          <Link
            href='/engagement/most-popular-jewelry'
            className='text-sm font-light'>
            Most Popular Jewelry
          </Link>
          <Link href='/engagement/new-jewelry' className='text-sm font-light'>
            New Jewelry
          </Link>
          <Link href='/engagement/high-jewelry' className='text-sm font-light'>
            High Jewelry
          </Link>
          <Link
            href='/engagement/bold-silver-jewelry'
            className='text-sm font-light'>
            Bold Silver Jewelry
          </Link>
          <Link
            href='/engagement/dainty-jewelry'
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

export default LoveEngagement;
