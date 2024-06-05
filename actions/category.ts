import { Category, Subcategory } from '@/sanity.types';
import { client } from '@/sanity/lib/client';

interface CategoryWithSub extends Category {
  subcategories: Subcategory[];
}

export const getCategorybySlug = async (
  categorySlug: string
): Promise<CategoryWithSub | null> => {
  try {
    const query = `*[_type=="category" && slug.current=="${categorySlug}"]{
                        title,
                        slug,
                        "subcategories": *[_type=="subcategory" && parentCategory._ref==^._id]
                    }[0]`;
    const category = await client.fetch(query);
    return category;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch product. Please try again later.');
  }
};

export const getSubcategorybySlug = async (
  subcategorySlug: string
): Promise<Subcategory | null> => {
  try {
    const query = `*[_type=="subcategory" && slug.current=="${subcategorySlug}"][0]`;
    const subcategory = await client.fetch(query);
    return subcategory;
  } catch (error) {
    throw new Error('Failed to fetch product. Please try again later.');
  }
};
