import { getSubcategorybySlug } from '@/actions/category';
import { getProductsbySubcategory } from '@/actions/product';
import ProductCard from '@/components/ProductCard';
import { urlFor } from '@/utils/imageUrlBuilder';
import Image from 'next/image';
import React from 'react';

const SubcategoryPage = async ({
  params,
}: {
  params: { category: string; subcategory: string };
}) => {
  const subcategory = await getSubcategorybySlug(params.subcategory);

  if (!subcategory) return null;

  const products = await getProductsbySubcategory(subcategory._id);

  if (!products) return null;

  return (
    <div>
      <h1 className='font-playfair text-3xl text-center mt-2 mb-8'>
        {subcategory?.title}
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            pathPrefix={'/' + params.category + '/' + params.subcategory}
          />
        ))}
      </div>
    </div>
  );
};

export default SubcategoryPage;
