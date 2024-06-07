'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, Heart, ShoppingBagIcon, User } from 'lucide-react';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import ShoppingBag from './ShoppingBag';
import { useCart } from '@/hooks/useCart';
import { useNavRight } from '@/hooks/useNavRight';
import Account from './Account';
import FavoriteItem from './FavoriteItem';
import { useFavorite } from '@/hooks/useFavorite';

const NavRight = () => {
  const [contentVisible, setContentVisible] = useState<
    'account' | 'wishlist' | 'shopping-bag'
  >();
  const containerRef = useRef<HTMLDivElement>(null);
  const { cartItems } = useCart();
  const { favoriteItems } = useFavorite();
  const { activeItem, setActiveItem } = useNavRight();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = '0';
    }

    setTimeout(() => {
      if (activeItem) {
        if (containerRef.current) {
          containerRef.current.style.height = 'calc(100vh - 112px)';
        }

        switch (activeItem) {
          case 'account':
            setContentVisible('account');
            break;
          case 'wishlist':
            setContentVisible('wishlist');
            break;
          case 'shopping-bag':
            setContentVisible('shopping-bag');
            break;
          default:
            setContentVisible(undefined);
        }
      }
    }, 750);
  }, [activeItem]);

  return (
    <div className='relative z-20 flex items-center gap-4 md:gap-8 flex-1 justify-end'>
      {/* <div className='absolute w-[calc(100%-8rem)] h-[calc(100%+2.5rem)] -top-5 -right-6 bg-primary -z-10' /> */}
      <button className='group hidden lg:flex items-center gap-2 text-sm'>
        <Calendar className='size-5 stroke-1 group-hover:stroke-2' />
        Book an Appointment
      </button>
      <Link
        href='/account'
        onMouseEnter={() => setActiveItem('account')}
        className='hidden lg:flex cursor-pointer'>
        <User className='size-5 stroke-1 hover:stroke-2' />
      </Link>
      <Link
        href='/wishlist'
        onMouseEnter={() => setActiveItem('wishlist')}
        className='cursor-pointer'>
        <Heart
          className={cn(
            'size-5 stroke-1 hover:stroke-2',
            favoriteItems.length > 0 && 'fill-primary'
          )}
        />
      </Link>
      <Link
        href='/shopping-bag'
        onMouseEnter={() => setActiveItem('shopping-bag')}
        className='flex items-center gap-1 cursor-pointer'>
        <ShoppingBagIcon
          className={cn(
            'size-5 stroke-1 hover:stroke-2',
            cartItems.length > 0 && 'fill-primary'
          )}
        />
        <span className='text-sm'>
          {cartItems.length > 0 && cartItems.length}
        </span>
      </Link>

      <div
        onClick={() => setActiveItem(undefined)}
        className={cn(
          'fixed -z-20 top-0 left-0 w-screen h-screen bg-black/50',
          activeItem ? 'hidden lg:block' : 'hidden'
        )}></div>
      <div
        onMouseLeave={() => setActiveItem(undefined)}
        className={cn(
          'fixed -z-10 top-0 right-0 h-screen pb-96 w-[450px]',
          activeItem ? 'invisible lg:visible' : 'invisible'
        )}>
        <div className='w-full h-28 bg-primary delay-150'></div>
        <div
          ref={containerRef}
          className={cn(
            'fixed top-28 right-0 z-50 w-[450px] bg-white transition-all duration-[750ms] overflow-hidden'
          )}>
          <div
            className={cn(
              'h-full w-full px-8 flex flex-col items-start transition-all duration-500 max-h-full',
              activeItem ? 'opacity-100' : 'py-0 opacity-0'
            )}>
            <Account isVisible={contentVisible === 'account'} />
            <FavoriteItem isVisible={contentVisible === 'wishlist'} />
            <ShoppingBag isVisible={contentVisible === 'shopping-bag'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavRight;
