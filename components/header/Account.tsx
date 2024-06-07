'use client';

import { cn } from '@/utils/cn';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface AccountProps {
  isVisible: boolean;
}

const Account = ({ isVisible }: AccountProps) => {
  return (
    <div
      className={cn(
        'max-h-full w-full flex-1 flex-col py-8',
        isVisible ? 'flex' : 'hidden'
      )}>
      <div className='pt-24'>
        <p className='font-playfair text-3xl mb-4'>Sign In or Create Account</p>
        <p className='font-semibold text-sm mb-16'>
          With an account you can check out faster, view your online order
          history and access your shopping bag or saved items from any device.
        </p>
        <Link href='/sign-up' className='underline-hover-link mb-6'>
          Create an Account
          <ChevronRight className='size-4 stroke-1 text-neutral-500' />
        </Link>
        <Link href='/sign-in' className='underline-hover-link'>
          Sign In
          <ChevronRight className='size-4 stroke-1 text-neutral-500' />
        </Link>
      </div>
    </div>
  );
};

export default Account;
