'use client';

import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import { products } from '@/data/products';
import Link from 'next/link';
import { cn } from '@/utils/cn';

interface CarouselItem {
  name: string;
  image: string;
  url: string;
  isLimited?: boolean;
}

interface CarouselProps {
  type: 'featured' | 'collections';
  data: CarouselItem[];
}

const Carousel = ({ type, data }: CarouselProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const updateSlideStatus = (swiper: SwiperClass) => {
    const slidesPerView =
      typeof swiper.params.slidesPerView === 'number'
        ? swiper.params.slidesPerView
        : 1;
    setIsFirstSlide(swiper.activeIndex === 0);
    setIsLastSlide(swiper.activeIndex >= swiper.slides.length - slidesPerView);
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      updateSlideStatus(swiperRef.current);
    }
  }, []);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        updateSlideStatus(swiper);
      }}
      onSlideChange={(swiper) => updateSlideStatus(swiper)}
      // modules={[Navigation]}
      slidesPerView={type === 'featured' ? 2.2 : 2}
      slidesPerGroup={2}
      // navigation
      breakpoints={{
        640: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1025: {
          spaceBetween: type === 'featured' ? 8 : 24,
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      }}
      spaceBetween={type === 'featured' ? 8 : 16}
      className='mySwiper my-8 relative'>
      {data.map((product, index) => (
        <SwiperSlide key={index}>
          <div className='relative bg-neutral-100 aspect-square cursor-pointer'>
            <Link href={product.url}>
              <Image
                src={product.image}
                width={736}
                height={736}
                alt='tsmile pendant'
                className='w-full h-full object-cover mix-blend-darken'
              />
            </Link>
            {product.isLimited && (
              <div className='absolute top-3 left-3 text-sm bg-white px-2 py-0.5 border border-neutral-200'>
                Limited Edition
              </div>
            )}
            {type === 'featured' && (
              <button className='absolute top-3 right-3'>
                <Heart className='size-4 stroke-1 hover:stroke-2' />
              </button>
            )}
          </div>
          <div
            className={cn(type === 'collections' && 'sm:py-4 sm:text-center')}>
            <p
              className={cn(
                type === 'featured'
                  ? 'block md:hidden text-sm font-light my-3'
                  : 'text-lg font-semibold mb-2'
              )}>
              {product.name}
            </p>
            {type === 'collections' && (
              <Link
                href={product.url}
                className='relative w-fit font-semibold text-sm flex items-center gap-2 sm:mx-auto after:content-[""] after:block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300 after:ease-in-out'>
                Shop Now
                <ChevronRight className='size-4 stroke-1 text-neutral-500' />
              </Link>
            )}
          </div>
        </SwiperSlide>
      ))}
      {!isFirstSlide && (
        <button
          onClick={handlePrev}
          className='absolute z-50 size-14 top-1/2 -translate-y-1/2 left-0 bg-white hidden sm:flex items-center justify-center'>
          <ChevronLeft className='size-6 stroke-1' />
        </button>
      )}

      {!isLastSlide && (
        <button
          onClick={handleNext}
          className='absolute z-50 size-14 top-1/2 -translate-y-1/2 right-0 bg-white hidden sm:flex items-center justify-center'>
          <ChevronRight className='size-6 stroke-1' />
        </button>
      )}
    </Swiper>
  );
};

export default Carousel;
