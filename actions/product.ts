import { Product } from '@/sanity.types';
import { client } from '@/sanity/lib/client';
import { revalidatePath } from 'next/cache';

export const getProductBySlug = async (
  slug: string
): Promise<Product | null> => {
  try {
    const query = `*[_type=="product" && slug.current == "${slug}"][0]`;
    const product = await client.fetch(query);

    // Dynamically construct path for revalidation (if needed)
    const productPath = `/jewelry/necklaces-and-pendants/${product?.slug.current}`;

    // Revalidate only if a product is found
    if (product) {
      revalidatePath(productPath, 'page');
    }

    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error('Failed to fetch product. Please try again later.');
  }
};
