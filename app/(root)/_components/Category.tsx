import { categories } from '@/data/categories';
import Image from 'next/image';
import React from 'react';

const Category = () => {
  return (
    <section className='px-4 lg:px-14'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        {categories.map((category, index) => (
          <div key={index}>
            <div className='relative aspect-square'>
              <Image
                src={category.image}
                fill
                alt='w-full h-full object-cover'
              />
            </div>
            <p className='mt-4 lg:mt-1 text-center text-sm font-semibold'>
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
