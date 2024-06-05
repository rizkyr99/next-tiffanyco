'use client';

import { useFavorite } from '@/hooks/useFavorite';
import { Product } from '@/sanity.types';
import { cn } from '@/utils/cn';
import { Heart, Mail } from 'lucide-react';
import React from 'react';

interface ProductActionProps {
  product: Product;
}

const HintLike = ({ product }: ProductActionProps) => {
  const { favoriteItems, addToFavorite, removeFromFavorite } = useFavorite();
  const isFavorited = favoriteItems.find((item) => item.id === product._id);

  const handleFavorite = () => {
    if (!isFavorited) {
      addToFavorite(product);
    } else {
      removeFromFavorite(product._id);
    }
  };
  return (
    <div className='flex items-center gap-4 my-4'>
      <button>
        <Mail className='size-5 stroke-1' />
      </button>
      <button onClick={handleFavorite}>
        <Heart
          className={cn('size-5 stroke-1', isFavorited && 'fill-primary')}
        />
      </button>
    </div>
  );
};

export default HintLike;
