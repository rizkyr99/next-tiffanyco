import { cn } from '@/utils/cn';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BannerProps {
  imageMobile: string;
  imageDesktop: string;
  title: string;
  description: string;
  actionLabel: string;
  actionLink: string;
  textSide: 'left' | 'right';
  whiteText?: boolean;
}

const Banner = ({
  imageMobile,
  imageDesktop,
  title,
  description,
  actionLabel,
  actionLink,
  textSide,
  whiteText,
}: BannerProps) => {
  return (
    <div className='relative'>
      <Image
        src={imageMobile}
        width={768}
        height={768}
        alt=''
        className='w-full block md:hidden'
      />
      <Image
        src={imageDesktop}
        width={1920}
        height={600}
        alt=''
        className='w-full hidden md:block'
      />
      <div
        className={cn(
          'md:absolute top-0 w-full md:w-1/2 h-full flex flex-col items-center justify-center gap-1 md:gap-4 p-4 md:p-8',
          textSide === 'right' ? 'right-0' : 'left-0'
        )}>
        <p
          className={cn(
            'text-black text-2xl font-semibold text-center',
            whiteText ? 'md:text-white' : 'text-black'
          )}>
          {title}
        </p>
        <p
          className={cn(
            'hidden md:block text-white text-sm text-center max-w-sm',
            whiteText ? 'text-white' : 'text-black'
          )}>
          {description}
        </p>
        <Link
          href={actionLink}
          className={cn(
            'underline-hover-link',
            whiteText ? 'md:text-white' : 'text-black'
          )}>
          {actionLabel}
          <ChevronRight className='size-4 stroke-1' />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
