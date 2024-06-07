'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email('* Please enter a valid email address.'),
  password: z.string().min(8, 'Password must contain at least 8 characters.'),
});

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {};

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 max-md:divide-y-2 md:divide-x-2 divide-primary p-6 max-w-screen-xl mx-auto'>
      <div className='py-6 md:p-8 lg:p-24'>
        <h2 className='text-3xl font-playfair text-center md:text-left mb-2'>
          Sign In
        </h2>
        <p className='text-sm font-light text-center md:text-left mb-12'>
          Please sign in to your Tiffany Account.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-12'>
            <input
              {...register('email')}
              placeholder='Email'
              className={cn(
                'w-full py-1 font-semibold border-b border-black text-sm outline-none',
                errors.email && 'border-red-500'
              )}
            />
            <p className='text-xs text-red-500 mt-2'>{errors.email?.message}</p>
          </div>
          <div className='mb-6'>
            <input
              {...register('password')}
              type='password'
              placeholder='Password'
              className={cn(
                'w-full py-1 font-semibold border-b border-black text-sm outline-none',
                errors.email && 'border-red-500'
              )}
            />
            <p className='text-xs text-red-500 mt-2'>
              {errors.password?.message}
            </p>
          </div>
          <button
            type='submit'
            className='w-full bg-black text-white text-sm font-semibold px-6 py-4 hover:bg-primary border border-black hover:text-black transition duration-300'>
            Sign In
          </button>
        </form>
        <Link href='' className='underline-hover-link mt-8'>
          Forgot your password?
          <ChevronRight className='size-4 stroke-1' />
        </Link>
      </div>
      <div className='py-6 md:p-8 lg:p-24'>
        <h2 className='text-3xl font-playfair text-center md:text-left mb-2'>
          Create an Account
        </h2>
        <p className='text-sm font-light text-center md:text-left mb-12'>
          Save time during checkout, view your shopping bag and saved items from
          any device and access your order history.
        </p>
        <Link
          href='/sign-up'
          className='block w-full bg-black text-white text-sm font-semibold px-6 py-4 hover:bg-primary border border-black hover:text-black text-center transition duration-300'>
          Register
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
