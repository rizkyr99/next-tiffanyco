'use client';

import { useFavorite } from '@/hooks/useFavorite';
import { cn } from '@/utils/cn';
import { formatToDollar } from '@/utils/formatToDollar';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FavoriteItemProps {
  isVisible: boolean;
}

const FavoriteItem = ({ isVisible }: FavoriteItemProps) => {
  const { favoriteItems, removeFromFavorite } = useFavorite();
  return (
    <div
      className={cn(
        'max-h-full w-full flex-1 flex-col py-8',
        isVisible ? 'flex' : 'hidden'
      )}>
      {favoriteItems.length > 0 ? (
        <>
          <div className='flex-1 overflow-y-auto'>
            <Link href='/sign-in' className='underline-hover-link mb-6'>
              Sign In
              <ChevronRight className='size-4 stroke-1 text-neutral-500' />
            </Link>
            <div className='font-semibold underline'>Saved Items</div>
            <div className='divide-y divide-primary'>
              {favoriteItems.length > 0 &&
                favoriteItems.map((item) => (
                  <div key={item.id} className='py-5 flex gap-4'>
                    <Image
                      src={item.image}
                      width={150}
                      height={150}
                      alt={item.name}
                    />
                    <div className='flex flex-col items-start justify-between'>
                      <div>
                        <p className='text-sm font-playfair'>{item.name}</p>
                        <p className='text-sm font-light'>
                          {formatToDollar(item.price)}
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => removeFromFavorite(item.id)}
                          className='underline-hover-link'>
                          Remove
                          <ChevronRight className='size-4 stroke-1 text-neutral-500' />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className='flex-shrink-0'>
            <div className='py-5 border-t border-primary'>
              <Link href='/' className='underline-hover-link'>
                View All Saved Products{' '}
                <ChevronRight className='size-4 stroke-1' />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className='pt-24'>
          <p className='font-playfair text-3xl mb-6'>
            Welcome to your Saved Items
          </p>
          <p className='font-semibold text-sm mb-12'>
            View saved favorites, build-your-own charm jewelry designs and sent
            hints.
          </p>
          <Link href='/sign-in' className='underline-hover-link'>
            Sign In
            <ChevronRight className='size-4 stroke-1 text-neutral-500' />
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoriteItem;
