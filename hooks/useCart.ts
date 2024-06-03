import { Product } from '@/sanity.types';
import { CartItem } from '@/types/product';
import { urlFor } from '@/utils/imageUrlBuilder';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useNavRight } from './useNavRight';

interface CartState {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const useCart = create(
  persist<CartState>(
    (set, get) => ({
      cartItems: [],
      addToCart: (product: Product, quantity: number) => {
        if (!product.name || !product.image || !product.price) return;

        const cartItems = get().cartItems;
        const existingItemIndex = cartItems.findIndex(
          (item) => item.productId === product._id
        );

        if (existingItemIndex !== -1) {
          const updatedItems = [...cartItems];
          updatedItems[existingItemIndex].quantity += quantity;
          set({ cartItems: updatedItems });
        } else {
          const newItem: CartItem = {
            productId: product._id,
            productName: product.name,
            image: urlFor(product.image[0]).url(),
            price: product.price,
            quantity,
          };
          set({ cartItems: [...cartItems, newItem] });
        }

        const setActiveItem = useNavRight.getState().setActiveItem;
        setActiveItem('shopping-bag');
      },
      removeFromCart: (productId: string) => {
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) => item.productId !== productId
          ),
        }));
      },
      clearCart: () => set({ cartItems: [] }),
    }),
    { name: 'cartItems' }
  )
);
