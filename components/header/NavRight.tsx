'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, ChevronRight, Heart, ShoppingBag, User } from 'lucide-react';
import { cn } from '@/utils/cn';
import Link from 'next/link';

const AccountContent = () => {
  return (
    <>
      <p className='font-playfair text-3xl mb-4'>Sign In or Create Account</p>
      <p className='font-semibold text-sm mb-16'>
        With an account you can check out faster, view your online order history
        and access your shopping bag or saved items from any device.
      </p>
      <Link href='/sign-up' className='underline-hover-link mb-6'>
        Create an Account
        <ChevronRight className='size-4 stroke-1 text-neutral-500' />
      </Link>
      <Link href='/sign-in' className='underline-hover-link'>
        Sign In
        <ChevronRight className='size-4 stroke-1 text-neutral-500' />
      </Link>
    </>
  );
};
const WishlistContent = () => {
  return (
    <>
      <p className='font-playfair text-3xl mb-4'>Welcome to your Saved Items</p>
      <p className='font-semibold text-sm mb-16'>
        View saved favorites, build-your-own charm jewelry designs and sent
        hints.
      </p>
      <Link href='/sign-in' className='underline-hover-link'>
        Sign In
        <ChevronRight className='size-4 stroke-1 text-neutral-500' />
      </Link>
    </>
  );
};
const ShoppingBagContent = () => {
  return (
    <>
      <p className='font-playfair text-3xl mb-4'>Your Shopping Bag</p>
      <p className='font-semibold text-sm mb-8'>Your shopping bag is empty.</p>
      <p className='text-sm font-light mb-4'>
        For faster checkout, sign in to your account
      </p>
      <Link href='/sign-in' className='underline-hover-link'>
        Sign In
        <ChevronRight className='size-4 stroke-1 text-neutral-500' />
      </Link>
    </>
  );
};

const NavRight = () => {
  const [itemHovered, setItemHovered] = useState<
    'account' | 'wishlist' | 'shopping-bag'
  >();
  const [content, setContent] = useState<JSX.Element>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = '0';
    }

    setTimeout(() => {
      if (itemHovered) {
        if (containerRef.current) {
          containerRef.current.style.height = 'calc(100vh - 112px)';
        }

        switch (itemHovered) {
          case 'account':
            setContent(AccountContent);
            break;
          case 'wishlist':
            setContent(WishlistContent);
            break;
          case 'shopping-bag':
            setContent(ShoppingBagContent);
            break;
          default:
            setContent(undefined);
        }
      }
    }, 750);
  }, [itemHovered]);

  return (
    <div className='relative z-20 flex items-center gap-4 md:gap-8 flex-1 justify-end'>
      {/* <div className='absolute w-[calc(100%-8rem)] h-[calc(100%+2.5rem)] -top-5 -right-6 bg-primary -z-10' /> */}
      <button className='group hidden lg:flex items-center gap-2 text-sm'>
        <Calendar className='size-5 stroke-1 group-hover:stroke-2' />
        Book an Appointment
      </button>
      <div
        onMouseEnter={() => setItemHovered('account')}
        className='hidden lg:flex cursor-pointer'>
        <User className='size-5 stroke-1 hover:stroke-2' />
      </div>
      <div
        onMouseEnter={() => setItemHovered('wishlist')}
        className='cursor-pointer'>
        <Heart className='size-5 stroke-1 hover:stroke-2' />
      </div>
      <div
        onMouseEnter={() => setItemHovered('shopping-bag')}
        className='cursor-pointer'>
        <ShoppingBag className='size-5 stroke-1 hover:stroke-2' />
      </div>

      <div
        className={cn(
          'fixed -z-20 top-0 left-0 w-screen h-screen bg-black/50',
          itemHovered ? 'block' : 'hidden'
        )}></div>
      <div
        onMouseLeave={() => setItemHovered(undefined)}
        className={cn(
          'fixed -z-10 top-0 right-0 h-screen pb-96 w-[450px]',
          itemHovered ? 'visible' : 'invisible'
        )}>
        <div className='w-full h-28 bg-primary delay-150'></div>
        <div
          ref={containerRef}
          className={cn(
            'fixed top-28 right-0 z-50 w-[450px] bg-white transition-all duration-[750ms] overflow-hidden'
          )}>
          <div
            className={cn(
              'h-full w-full px-8 flex flex-col items-start transition-all duration-500',
              itemHovered ? 'py-24 opacity-100' : 'py-0 opacity-0'
            )}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavRight;
