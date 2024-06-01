'use client';

import { ChevronRight, Package2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Link from 'next/link';
import { experiences } from '@/data/experiences';

const Experience = () => {
  return (
    <section className='px-4 lg:px-14'>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        breakpoints={{
          576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1025: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}>
        {experiences.map((item) => (
          <SwiperSlide key={item.title}>
            <div className='p-4 flex flex-col items-center gap-3 lg:gap-4 lg:px-6'>
              <item.icon className='size-8 stroke-1' />
              <p className='text-sm font-semibold text-center'>{item.title}</p>
              <p className='text-center text-sm font-light'>
                {item.description}
              </p>
              <Link href={item.url} className='underline-hover-link'>
                {item.action}
                <ChevronRight className='size-4 stroke-1 text-neutral-500' />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Experience;
