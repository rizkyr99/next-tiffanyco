import { getCategorybySlug } from '@/actions/category';
import { urlFor } from '@/utils/imageUrlBuilder';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const category = await getCategorybySlug(params.category);
  if (!category) return null;

  return (
    <div>
      <h1 className='font-playfair text-3xl text-center mt-2 mb-8'>
        {category.title}
      </h1>
      <div className='w-full px-4 overflow-x-auto flex'>
        <div className='flex gap-2 lg:gap-4 mx-auto'>
          {category.subcategories.length > 0 ? (
            category.subcategories.map((subcategory) => (
              <Link
                key={subcategory.slug!.current!!}
                href={subcategory.slug!.current!!}
                className='flex-shrink-0 w-32 md:w-48'>
                <Image
                  src={urlFor(subcategory.image).url()}
                  width={200}
                  height={200}
                  alt={subcategory.title || 'subcategory'}
                  className='rounded-xl '
                />
                <h2 className='font-semibold mt-2 underline-hover-link text-center mx-auto'>
                  {subcategory.title}
                </h2>
              </Link>
            ))
          ) : (
            <div>No Sub Categories</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
