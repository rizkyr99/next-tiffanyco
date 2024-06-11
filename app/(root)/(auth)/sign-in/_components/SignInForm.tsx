'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/utils/cn';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email('* Please enter a valid email address.'),
  password: z.string().min(8, 'Password must contain at least 8 characters.'),
});

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {};
  return (
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
        <p className='text-xs text-red-500 mt-2'>{errors.password?.message}</p>
      </div>
      <button
        type='submit'
        className='w-full bg-black text-white text-sm font-semibold px-6 py-4 hover:bg-primary border border-black hover:text-black transition duration-300'>
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
