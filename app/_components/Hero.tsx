'use client';

import { cn } from '@/utils/cn';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    if (videoRef.current) {
      isPaused ? videoRef.current.pause() : videoRef.current.play();
    }
  }, [isPaused]);

  return (
    <div className='relative'>
      <div className='relative aspect-square md:aspect-video object-cover'>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className='h-full w-full object-cover'>
          <source src='/assets/hero.mp4' type='video/mp4' />
        </video>

        <button
          onClick={() => setIsMuted((prev) => !prev)}
          className='absolute z-50 bottom-4 left-4 size-10 bg-black rounded-full flex items-center justify-center'>
          <VolumeX
            className={cn('size-5 text-white', isMuted ? 'block' : 'hidden')}
          />
          <Volume2
            className={cn('size-5 text-white', isMuted ? 'hidden' : 'block')}
          />
        </button>
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          className='absolute z-50 bottom-4 right-4 size-10 bg-black rounded-full flex items-center justify-center'>
          <Play
            className={cn('size-5 text-white', isPaused ? 'block' : 'hidden')}
          />
          <Pause
            className={cn('size-5 text-white', isPaused ? 'hidden' : 'block')}
          />
        </button>
      </div>
      <div className='md:absolute bottom-0 left-0 w-full p-4 md:py-20 md:bg-gradient-to-t from-black/50 to-transparent flex flex-col items-center gap-4 md:gap-6'>
        <h1 className='text-black md:text-white text-2xl font-semibold'>
          With Love, Since 1837
        </h1>
        <p className='text-black md:text-white md:max-w-md text-center text-sm font-light'>
          An homage to an iconic motif from 1975 inspired by New York, T by
          Tiffany is an expression of love&apos;s endless potential.
        </p>
        <button className='text-sm px-6 py-3 bg-white border border-black'>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
