import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Engagement = () => {
  return (
    <>
      <section>
        <div className='relative'>
          <Image
            src='/assets/images/categories/2024-Icons-HP-FWMH-SDR-Mobile.webp'
            width={768}
            height={768}
            alt=''
            className='w-full block md:hidden'
          />
          <Image
            src='/assets/images/categories/2024-Icons-HP-FWMH-SDR-Desktop.webp'
            width={1920}
            height={600}
            alt=''
            className='w-full hidden md:block'
          />
          <div className='md:absolute top-0 right-0 w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-1 md:gap-4 p-4 md:p-8'>
            <p className='text-black md:text-white text-2xl font-semibold text-center'>
              Love & Engagement
            </p>
            <p className='hidden md:block text-white text-sm text-center max-w-sm'>
              Tiffany & Co. engagement rings feature the world&apos;s finest
              diamonds and unparalleled craftsmanship—signatures of the House
              for almost two centuries.
            </p>
            <Link href='/' className='underline-hover-link md:text-white'>
              Explore Engagement Rings
              <ChevronRight className='size-4 stroke-1' />
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className='relative'>
          <Image
            src='/assets/images/categories/2021_Bloomgberg-HP_FWMH-Mobile.webp'
            width={768}
            height={768}
            alt=''
            className='w-full block md:hidden'
          />
          <Image
            src='/assets/images/categories/2021_Bloomgberg-HP_FWMH-Desktop2.webp'
            width={1920}
            height={600}
            alt=''
            className='w-full hidden md:block'
          />
          <div className='md:absolute top-0 left-0 w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-1 md:gap-4 p-4 md:p-8'>
            <p className='text-black text-2xl font-semibold text-center'>
              From the Source
            </p>
            <p className='hidden md:block text-sm text-center max-w-sm'>
              Handcrafting the world&apos;s best diamonds starts with knowing
              where they come from. We proudly trace 100% of our rough diamonds
              to known mines and sources.
            </p>
            <Link href='/' className='underline-hover-link'>
              Follow Your Diamons&apos;s Journey
              <ChevronRight className='size-4 stroke-1' />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Engagement;
