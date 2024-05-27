import { Product } from '@/sanity.types';
import { client } from '@/sanity/lib/client';
import { CarouselItem } from '@/types/product';
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

export const getFeaturedProducts = async (): Promise<CarouselItem[]> => {
  try {
    const query = `*[_type == "product"] {
      name,
      "image": image[0].asset->url,
      "slug": "/" + category->slug.current + "/" + subcategory->slug.current + "/" + slug.current,
      isLimited
    }`;

    const products = await client.fetch(query);

    console.log(products);

    return products;
  } catch (error) {
    console.log('Error fetching product:', error);
    throw new Error('Failed to fetch product. Please try again later.');
  }
};

export const getCollections = async (): Promise<CarouselItem[]> => {
  try {
    const query = `*[_type == "collection"] {
      name,
      "image": image.asset->url,
      "slug": slug.current
    }`;

    const collections = await client.fetch(query);

    console.log(collections);

    return collections;
  } catch (error) {
    console.log('Error fetching product:', error);
    throw new Error('Failed to fetch product. Please try again later.');
  }
};
