'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Carousel from '@/components/carousel';
import { products } from '@/data/products';

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
    <section className='px-4 lg:px-14 py-4'>
      <div>
        <Carousel type='featured' data={products} />
      </div>
      <button className='px-6 py-3 text-sm border border-black mx-auto block'>
        Shop Now
      </button>
    </section>
  );
};

export default Featured;
