'use client';

import { useCart } from '@/hooks/useCart';
import { formatToDollar } from '@/utils/formatToDollar';
import { ChevronLeft, Mail, Printer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShoppingBagPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto md:p-4'>
      <div className='md:min-h-screen lg:col-span-2 lg:pr-24 p-4 lg:p-0'>
        <Link href='/' className='underline-hover-link mb-8'>
          <ChevronLeft className='size-4 stroke-1' />
          Continue Shopping
        </Link>
        <div className='flex items-end justify-between'>
          <h1 className='font-playfair text-4xl'>Shopping Bag</h1>
          <div className='space-x-4'>
            <button>
              <Printer className='size-4 stroke-1' />
            </button>
            <button>
              <Mail className='size-4 stroke-1' />
            </button>
          </div>
        </div>
        <div className='border-y border-black divide-y divide-black mt-8'>
          {cartItems.map((item) => (
            <div key={item.productId} className='flex gap-4 py-8'>
              <Image
                src={item.image}
                width={200}
                height={200}
                alt={item.productName}
              />
              <div className='flex flex-col gap-y-5'>
                <h2>{item.productName}</h2>
                <div className='flex flex-col items-start'>
                  <label
                    htmlFor='quantity'
                    className='text-neutral-500 text-xs'>
                    Qty
                  </label>
                  <select
                    name='quantity'
                    id='quantity'
                    className='outline-none focus:border-b focus:border-black -ml-1 md'>
                    <option value='1' selected={item.quantity === 1}>
                      1
                    </option>
                    <option value='2' selected={item.quantity === 2}>
                      2
                    </option>
                    <option value='3' selected={item.quantity === 3}>
                      3
                    </option>
                    <option value='4' selected={item.quantity === 4}>
                      4
                    </option>
                    <option value='5' selected={item.quantity === 5}>
                      5
                    </option>
                  </select>
                </div>
                <p className='text-sm'>{formatToDollar(item.price)}</p>
                <button
                  onClick={() => removeFromCart(item.productId)}
                  className='underline-hover-link mt-8'>
                  Save for Later
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-neutral-100 h-fit sticky top-16 px-4 md:p-8'>
        <p className='font-bold hidden md:block mb-4'>Order Summary</p>
        <div className='border-y border-black md:border-t-0 py-6 md:p-0'>
          <div className='hidden md:flex justify-between text-xs font-semibold mb-4'>
            <p>Subtotal</p>
            <p className='text-sm'>$1,250.00</p>
          </div>
          <div className='flex justify-between text-xs font-semibold mb-12'>
            <p>
              Express Delivery with Signature $0 <br />
              Delivery by Sunday, 06/08
            </p>
            <p className='text-sm'>$0.0</p>
          </div>
          <div className='flex justify-between text-xs font-semibold md:mb-8'>
            <p>Estimated Tax</p>
            <p>$3</p>
          </div>
        </div>
        <div className='flex justify-between mt-3 mb-12 text-sm font-extrabold'>
          <p>Estimated Total</p>
          <p>$1,250.00</p>
        </div>
        <button className='bg-black w-full text-white px-6 py-4 rounded hover:bg-primary border border-black duration-[750ms]'>
          Checkout
        </button>
        <p className='text-xs text-center py-4 md:pb-0'>
          Enjoy complimentary shipping and returns on your order.
        </p>
      </div>
    </div>
  );
};

export default ShoppingBagPage;
