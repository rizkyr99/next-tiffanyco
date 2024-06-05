'use client';

import { useCart } from '@/hooks/useCart';
import { cn } from '@/utils/cn';
import { formatToDollar } from '@/utils/formatToDollar';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ShoppingBagProps {
  isVisible: boolean;
}

const ShoppingBag = ({ isVisible }: ShoppingBagProps) => {
  const { cartItems, removeFromCart } = useCart();
  return (
    <div
      className={cn(
        'max-h-full w-full flex-1 flex-col py-8',
        isVisible ? 'flex' : 'hidden'
      )}>
      <div className='flex-1 overflow-y-auto'>
        {cartItems.length === 0 && (
          <>
            <p className='font-playfair text-3xl mb-4'>Your Shopping Bag</p>
            <p className='font-semibold text-sm mb-8'>
              Your shopping bag is empty.
            </p>
          </>
        )}
        <p className='text-sm font-light mb-4'>
          For faster checkout, sign in to your account
        </p>
        <Link href='/sign-in' className='underline-hover-link'>
          Sign In
          <ChevronRight className='size-4 stroke-1 text-neutral-500' />
        </Link>
        <div className='divide-y divide-primary'>
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <div key={item.productId} className='py-5 flex gap-4'>
                <Image
                  src={item.image}
                  width={150}
                  height={150}
                  alt={item.productName}
                />
                <div className='flex flex-col items-start justify-between'>
                  <div>
                    <p className='text-sm font-playfair'>{item.productName}</p>
                    <p className='text-sm font-light'>
                      {formatToDollar(item.price)}
                    </p>
                  </div>
                  <div>
                    <p className='text-sm'>Quantity {item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item.productId)}
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
      {cartItems.length > 0 && (
        <div className='flex-shrink-0'>
          <div className='py-5 border-t border-primary'>
            <p className='font-light'>Express Delivery with Signature $0</p>
            <Link href='/' className='underline-hover-link !text-base'>
              View Bag <ChevronRight className='size-4 stroke-1' />
            </Link>
          </div>
          <button className='w-full flex items-center justify-between bg-black text-white border border-black px-6 py-4 hover:bg-primary hover:text-black'>
            Estimated Total: $3,700
            <span>Checkout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingBag;
