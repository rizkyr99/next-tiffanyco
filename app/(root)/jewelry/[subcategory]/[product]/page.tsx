import Carousel from '@/components/carousel';
import { products } from '@/data/products';
import {
  ALargeSmall,
  Heart,
  Mail,
  MapPin,
  Minus,
  Plus,
  Truck,
  ZoomIn,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductPage = () => {
  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-[60%,40%]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 place-content-start'>
          {[...Array(5)].map((_, index) => (
            <div key={index} className='group relative aspect-square w-full'>
              <Image
                src='/assets/images/products/tiffany-tsmile-pendant.jpg'
                fill
                alt=''
                className='object-cover'
              />
              <div className='absolute inset-0 hidden group-hover:flex items-center justify-center cursor-zoom-in'>
                <ZoomIn className='size-12 stroke-1' />
              </div>
            </div>
          ))}
        </div>
        <div className='py-12 px-8 lg:px-16 sticky top-0 self-start'>
          <div className='text-xs mb-8'>
            Home / Designer Jewelry / Necklaces & Pendants
          </div>
          <Link href='/' className='text-sm font-semibold underline'>
            Tiffany T
          </Link>
          <h1 className='font-playfair text-2xl'>T1 Circle Pendant</h1>
          <p className='font-playfair text-sm'>in Yellow Gold</p>
          <div className='flex items-center gap-4 my-4'>
            <button>
              <Mail className='size-5 stroke-1' />
            </button>
            <button>
              <Heart className='size-5 stroke-1' />
            </button>
          </div>
          <div className='flex items-center gap-2 text-xs font-semibold border-t border-black py-3'>
            <Truck className='size-5 stroke-1' />
            Complimentary Shipping & Returns
          </div>
          <div className='flex items-center gap-2 text-sm border-t border-black py-3 justify-between font-semibold'>
            Quantity
            <div className='flex items-center gap-2'>
              <Minus className='size-4' />
              1
              <Plus className='size-4' />
            </div>
          </div>
          <div className='flex items-center gap-2 text-sm font-semibold underline py-4 border-t border-black'>
            <ALargeSmall className='size-4 stroke-1' />
            Add Engraving
          </div>
          <button className='group relative w-full flex items-center justify-between bg-black text-white border border-black px-6 py-4 text-sm font-semibold hover:bg-primary hover:text-black overflow-hidden'>
            $850
            <span className='absolute top-0 right-0 px-6 py-4 group-hover:-translate-y-full transition-all duration-500 ease-in-out'>
              Add to Bag
            </span>
            <span className='absolute top-full right-0 px-6 py-4 group-hover:-translate-y-full transition-all duration-500 ease-in-out'>
              Add to Bag
            </span>
          </button>
          <p className='text-xs my-4'>
            Buy now and pay later with PayPal.{' '}
            <Link href='/' className='underline'>
              Learn more
            </Link>
          </p>
          <div className='flex items-center gap-2 text-sm underline font-semibold my-4'>
            <MapPin className='size-4 stroke-1' />
            Find in store
          </div>
          <p className='text-sm font-semibold mb-2'>Description & Details</p>
          <p className='text-sm font-light'>
            Inspired by the iconic key ring first introduced in 1969, the Return
            to Tiffany® collection is a classic reinvented. This standout
            silhouette embodies the collection&apos;s celebrated aesthetic. Pair
            this mini heart tag pendant with a Return to Tiffany® mini heart
            tag bead bracelet to complete your look.
          </p>
          <ul className='text-sm font-light list-disc px-5 mt-4'>
            <li>18k yellow gold</li>
            <li>On a 16-18&quot; long chain</li>
            <li>Motif size, mini</li>
            <li>Product number:72975146</li>
          </ul>
        </div>
      </div>
      <div className='px-2'>
        <h2 className='font-playfair text-3xl my-8 md:text-center'>
          You May Also Like
        </h2>
        <div className='flex'>
          <div className='hidden md:block w-56 bg-primary'></div>
          <Carousel type='featured' data={products} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductPage;
