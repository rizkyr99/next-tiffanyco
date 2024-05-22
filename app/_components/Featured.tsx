'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const products = [
  {
    name: 'Tiffany T:Smile Pendant',
    image: '/assets/images/products/tiffany-tsmile-pendant.jpg',
    isLimited: false,
  },
  {
    name: 'Tiffany T:Smile Bracelet',
    image: '/assets/images/products/tiffany-tsmile-bracelet.jpg',
    isLimited: false,
  },
  {
    name: 'Tiffany Knot:Pendant',
    image: '/assets/images/products/tiffany-knotpendant.jpg',
    isLimited: true,
  },
  {
    name: 'Tiffany Knot:Ring',
    image: '/assets/images/products/tiffany-knotring.jpg',
    isLimited: false,
  },
  {
    name: 'Tiffany T:Smile Pendant',
    image: '/assets/images/products/tiffany-tsmile-pendant.jpg',
    isLimited: false,
  },
  {
    name: 'Tiffany T:Smile Pendant',
    image: '/assets/images/products/tiffany-tsmile-pendant.jpg',
    isLimited: false,
  },
  {
    name: 'Tiffany T:Smile Pendant',
    image: '/assets/images/products/tiffany-tsmile-pendant.jpg',
    isLimited: false,
  },
  {
    name: 'Tiffany T:Smile Pendant',
    image: '/assets/images/products/tiffany-tsmile-pendant.jpg',
    isLimited: false,
  },
  {
    name: 'Tiffany T:Smile Pendant',
    image: '/assets/images/products/tiffany-tsmile-pendant.jpg',
    isLimited: false,
  },
];

const Featured = () => {
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
    <section className='px-4 lg:px-14'>
      <div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateSlideStatus(swiper);
          }}
          onSlideChange={(swiper) => updateSlideStatus(swiper)}
          // modules={[Navigation]}
          slidesPerView={2.2}
          slidesPerGroup={2}
          // navigation
          breakpoints={{
            640: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1025: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          spaceBetween={8}
          className='mySwiper my-16 relative'>
          {products.map((product, index) => (
            <SwiperSlide key={index} className='cursor-pointer'>
              <div className='relative bg-neutral-100 aspect-square'>
                <Image
                  src={product.image}
                  width={736}
                  height={736}
                  alt='tsmile pendant'
                  className='w-full h-full object-cover mix-blend-darken'
                />
                {product.isLimited && (
                  <div className='absolute top-3 left-3 text-sm bg-white px-2 py-0.5 border border-neutral-200'>
                    Limited Edition
                  </div>
                )}
                <button className='absolute top-3 right-3'>
                  <Heart className='size-4 stroke-1 hover:stroke-2' />
                </button>
              </div>
              <p className='block md:hidden text-sm font-light my-3'>
                {product.name}
              </p>
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
      </div>
      <button className='px-6 py-3 text-sm border border-black mx-auto block'>
        Shop Now
      </button>
    </section>
  );
};

export default Featured;
