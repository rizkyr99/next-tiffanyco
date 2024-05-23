import Image from 'next/image';
import React from 'react';

const Newest = () => {
  return (
    <section className='relative w-full lg:aspect-[3/1]'>
      <Image
        src='/assets/images/categories/2024_APR_BB_HP_FWMH2_Mobile.webp'
        width={500}
        height={500}
        alt=''
        className='w-full block lg:hidden max-w-screen-md mx-auto'
      />
      <Image
        src='/assets/images/categories/2024_APR_BB_HP_FWMH2_Desktop.webp'
        fill
        alt=''
        className='hidden lg:block absolute -z-10 top-0 right-0 w-full h-full object-cover'
      />
      <div className='h-full w-full lg:w-1/3 flex flex-col items-center gap-4 justify-center p-4 lg:p-16'>
        <p className='text-2xl font-semibold text-center'>
          Our Newest High Jewelry Collection
        </p>
        <p className='text-sm font-light leading-normal text-center text-balance'>
          A tribute to legendary Tiffany & Co. designer Jean Schlumberger, Blue
          Book 2024: Tiffany Céleste is a journey through the wonder of
          celestial bodies. Chief Artistic Officer Nathalie Verdeille reimagines
          Jean Schlumberger&apos;s surreal designs into an exquisite new Tiffany
          High Jewelry collection.
        </p>
        <button className='group border border-black px-6 py-3 text-sm'>
          <span className='underline-hover-link'>Explore the Collection</span>
        </button>
      </div>
    </section>
  );
};

export default Newest;
