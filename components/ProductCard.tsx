'use client';

import { useCart } from '@/hooks/useCart';
import { useFavorite } from '@/hooks/useFavorite';
import { Product } from '@/sanity.types';
import { cn } from '@/utils/cn';
import { formatToDollar } from '@/utils/formatToDollar';
import { urlFor } from '@/utils/imageUrlBuilder';
import { Heart, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface ProductCardProps {
  product: Product;
  pathPrefix: string;
}

const ProductCard = ({ product, pathPrefix }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { cartItems, addToCart } = useCart();
  const { favoriteItems, addToFavorite, removeFromFavorite } = useFavorite();
  const isFavorited = favoriteItems.find((item) => item.id === product._id);
  const isInCart = cartItems.find((item) => item.productId === product._id);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsHovered(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFavorite = () => {
    if (!isFavorited) {
      addToFavorite(product);
    } else {
      removeFromFavorite(product._id);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative lg:border border-b-0',
        isHovered ? 'lg:p-8 lg:pb-0 lg:border-black' : 'border-transparent'
      )}>
      <Link
        href={`${pathPrefix}/${product.slug!.current!!}`}
        className='bg-neutral-50'>
        <Image
          src={urlFor(product.image![0]).url()}
          width={200}
          height={200}
          alt={product.name || 'product'}
          className='w-full mix-blend-darken'
        />
      </Link>
      <button
        onClick={handleFavorite}
        className={cn(
          'absolute top-2 right-2',
          isHovered ? 'hidden lg:block' : 'hidden'
        )}>
        <Heart
          className={cn('size-4 stroke-1', isFavorited && 'fill-primary')}
        />
      </button>
      <button
        onClick={() => addToCart(product, 1)}
        className='block lg:hidden absolute top-2 right-2'>
        <ShoppingBag
          className={cn('size-4 stroke-1', isInCart && 'fill-primary')}
        />
      </button>
      <div
        className={cn(
          'lg:absolute lg:top-full lg:left-[-1px] bg-white lg:w-[calc(100%+2px)] lg:border lg:border-t-0 lg:border-black p-2 lg:p-8 lg:pt-0 lg:-mt-8',
          isHovered ? 'lg:block' : 'lg:hidden'
        )}>
        <Link
          href={`${pathPrefix}/${product.slug!.current!!}`}
          className='font-light lg:my-4 lg:block text-sm mb-2'>
          {product.name}
        </Link>
        <p className='block lg:hidden text-xs'>
          {product.price && formatToDollar(product.price)}
        </p>
        <button
          onClick={() => addToCart(product, 1)}
          className='hidden lg:flex px-6 py-4 w-full items-center justify-between bg-black border border-black text-white hover:bg-primary hover:text-black transition duration-[750ms]'>
          {product.price && formatToDollar(product.price)}
          <span>Add To Bag</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
