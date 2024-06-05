import { Product } from '@/sanity.types';
import { urlFor } from '@/utils/imageUrlBuilder';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useNavRight } from './useNavRight';

interface FavoriteItem {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface FavoriteState {
  favoriteItems: FavoriteItem[];
  addToFavorite: (item: Product) => void;
  removeFromFavorite: (productId: string) => void;
}

export const useFavorite = create(
  persist<FavoriteState>(
    (set, get) => ({
      favoriteItems: [],
      addToFavorite: (product: Product) => {
        const favoriteItems = get().favoriteItems;
        const existingItemIndex = favoriteItems.find(
          (item) => item.id === product._id
        );

        if (
          !existingItemIndex &&
          product.name &&
          product.image &&
          product.price
        ) {
          const newItem: FavoriteItem = {
            id: product._id,
            name: product.name,
            image: urlFor(product.image[0]).url(),
            price: product.price,
          };
          set({ favoriteItems: [...favoriteItems, newItem] });
        }

        const setActiveItem = useNavRight.getState().setActiveItem;
        setActiveItem('wishlist');
      },
      removeFromFavorite: (productId: string) => {
        set((state) => ({
          favoriteItems: state.favoriteItems.filter(
            (item) => item.id !== productId
          ),
        }));
      },
    }),
    {
      name: 'favoriteItems',
    }
  )
);
