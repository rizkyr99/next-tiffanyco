'use client';

import { useCart } from '@/hooks/useCart';
import { Product } from '@/sanity.types';
import { formatToDollar } from '@/utils/formatToDollar';
import { ALargeSmall, Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

interface AddToCartProps {
  product: Product;
}

const AddToCart = ({ product }: AddToCartProps) => {
  const [quantity, setQuantity] = useState(1);
  const { cartItems, addToCart } = useCart();

  const handleAdd = () => {
    setQuantity((prev) => (prev += 1));
  };

  const handleReduce = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => (prev -= 1));
  };

  return (
    <div>
      <div className='flex items-center gap-2 text-sm border-t border-black py-3 justify-between font-semibold'>
        Quantity
        <div className='flex items-center gap-2'>
          <button onClick={handleReduce}>
            <Minus className='size-4 cursor-pointer' />
          </button>
          {quantity}
          <button onClick={handleAdd}>
            <Plus className='size-4 cursor-pointer' />
          </button>
        </div>
      </div>
      <div className='flex items-center gap-2 text-sm font-semibold underline py-4 border-t border-black'>
        <ALargeSmall className='size-4 stroke-1' />
        Add Engraving
      </div>
      <button
        onClick={() => addToCart(product, quantity)}
        className='group relative w-full flex items-center justify-between bg-black text-white border border-black px-6 py-4 text-sm font-semibold hover:bg-primary hover:text-black overflow-hidden'>
        {product.price && formatToDollar(product.price)}
        <span className='absolute top-0 right-0 px-6 py-4 group-hover:-translate-y-full transition-all duration-500 ease-in-out'>
          Add to Bag
        </span>
        <span className='absolute top-full right-0 px-6 py-4 group-hover:-translate-y-full transition-all duration-500 ease-in-out'>
          Add to Bag
        </span>
      </button>
    </div>
  );
};

export default AddToCart;
