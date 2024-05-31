import { Product } from '@/sanity.types';
import { CartItem } from '@/types/product';
import { urlFor } from '@/utils/imageUrlBuilder';
import { useEffect, useState } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = window.localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const handleAddToCart = (product: Product, quantity: number) => {
    if (!product.name || !product.image || !product.price) return;

    const newItem: CartItem = {
      productId: product._id,
      productName: product.name,
      image: urlFor(product.image[0]).url(),
      price: product.price,
      quantity,
    };

    const itemIndex = cartItems.findIndex(
      (item) => item.productId === newItem.productId
    );
    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity += quantity;
      setCartItems(updatedItems);
      window.localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    } else {
      const updatedCartItems = [...cartItems, newItem];
      setCartItems(updatedCartItems);
      window.localStorage.setItem(
        'cartItems',
        JSON.stringify(updatedCartItems)
      );
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    const updatedItems = cartItems.filter(
      (item) => item.productId !== productId
    );
    setCartItems(updatedItems);
    window.localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleClearCart = () => {
    setCartItems([]);
    window.localStorage.removeItem('cartItems');
  };

  return { cartItems, handleAddToCart, handleRemoveFromCart, handleClearCart };
};

export default useCart;
