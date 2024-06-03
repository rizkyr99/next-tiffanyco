import { Product } from '@/sanity.types';
import { CartItem } from '@/types/product';
import { urlFor } from '@/utils/imageUrlBuilder';
import { useEffect, useState } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// const useCart = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const storedCart = window.localStorage.getItem('cartItems');
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   const handleAddToCart = (product: Product, quantity: number) => {
//     if (!product.name || !product.image || !product.price) return;

//     const newItem: CartItem = {
//       productId: product._id,
//       productName: product.name,
//       image: urlFor(product.image[0]).url(),
//       price: product.price,
//       quantity,
//     };

//     const itemIndex = cartItems.findIndex(
//       (item) => item.productId === newItem.productId
//     );
//     if (itemIndex !== -1) {
//       const updatedItems = [...cartItems];
//       updatedItems[itemIndex].quantity += quantity;
//       setCartItems(updatedItems);
//       window.localStorage.setItem('cartItems', JSON.stringify(updatedItems));
//     } else {
//       const updatedCartItems = [...cartItems, newItem];
//       setCartItems(updatedCartItems);
//       window.localStorage.setItem(
//         'cartItems',
//         JSON.stringify(updatedCartItems)
//       );
//     }
//   };

//   const handleRemoveFromCart = (productId: string) => {
//     const updatedItems = cartItems.filter(
//       (item) => item.productId !== productId
//     );
//     setCartItems(updatedItems);
//     window.localStorage.setItem('cartItems', JSON.stringify(updatedItems));
//   };

//   const handleClearCart = () => {
//     setCartItems([]);
//     window.localStorage.removeItem('cartItems');
//   };

//   return { cartItems, handleAddToCart, handleRemoveFromCart, handleClearCart };
// };

// export default useCart;

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
