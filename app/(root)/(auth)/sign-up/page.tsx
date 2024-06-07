'use client';

import { cn } from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  firstName: z.string().min(1, 'Please enter your first name.'),
  lastName: z.string().min(2, 'Please enter your last name.'),
  email: z.string().email('Please enter a valid email address.').min(5),
  gender: z.string().nullable(),
  birthMonth: z.string().nullable(),
  birthDay: z.string().nullable(),
  relationship: z.string().nullable(),
});

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: null,
      birthMonth: null,
      birthDay: null,
      relationship: null,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className='flex flex-row p-12'>
      <div className='md:max-w-sm'>
        <h1 className='text-3xl font-playfair mb-2 md:mb-6'>
          Create an Account
        </h1>
        <p className='text-sm font-light leading-relaxed mb-4'>
          With a Tiffany.com account, you can save time during checkout, access
          your shopping bag from any device and view your order history.
        </p>
        <div className='flex items-center gap-8 text-xs mb-8'>
          <p className='font-bold'>Have a Tiffany account?</p>
          <Link href='' className='underline-hover-link !text-xs !font-normal'>
            Sign In <ChevronRight className='size-4 stroke-1' />
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-10'>
            <input
              {...register('firstName')}
              type='text'
              placeholder='First Name'
              className={cn(
                'w-full py-1 text-sm border-b border-black outline-none font-semibold',
                errors.firstName && 'border-red-500'
              )}
            />
            {errors.firstName && (
              <p className='text-xs text-red-500 mt-2'>
                * {errors.firstName.message}
              </p>
            )}
          </div>
          <div className='mb-10'>
            <input
              {...register('lastName')}
              type='text'
              placeholder='Last Name'
              className={cn(
                'w-full py-1 text-sm border-b border-black outline-none font-semibold',
                errors.lastName && 'border-red-500'
              )}
            />
            {errors.lastName && (
              <p className='text-xs text-red-500 mt-2'>
                * {errors.lastName.message}
              </p>
            )}
          </div>
          <div className='mb-10'>
            <input
              {...register('email')}
              type='text'
              placeholder='Email'
              className={cn(
                'w-full py-1 text-sm border-b border-black outline-none font-semibold',
                errors.email && 'border-red-500'
              )}
            />
            {errors.email && (
              <p className='text-xs text-red-500 mt-2'>
                * {errors.email.message}
              </p>
            )}
          </div>
          <div className='mb-10'>
            <p className='mb-2 font-light'>Gender (optional)</p>
            <div className='flex items-center gap-2'>
              <input
                {...register('gender')}
                type='radio'
                id='female'
                value='female'
              />
              <label htmlFor='female' className='font-light'>
                Female
              </label>
            </div>
            <div className='flex items-center gap-2'>
              <input
                // {...register('gender')}
                type='radio'
                id='male'
                value='male'
              />
              <label htmlFor='male' className='font-light'>
                Male
              </label>
            </div>
          </div>
          <div className='mb-10'>
            <p className='mb-2 font-light'>Birthday (optional)</p>
            <div className='grid grid-cols-2 gap-6'>
              <select
                {...register('birthMonth')}
                id='month'
                className='w-full outline-none border-b border-black py-1 text-sm'>
                <option disabled selected>
                  Month
                </option>
                <option value='January'>January</option>
                <option value='February'>February</option>
                <option value='March'>March</option>
                <option value='April'>April</option>
                <option value='May'>May</option>
                <option value='June'>June</option>
                <option value='July'>July</option>
                <option value='August'>August</option>
                <option value='September'>September</option>
                <option value='October'>October</option>
                <option value='November'>November</option>
                <option value='December'>December</option>
              </select>
              <select
                {...register('birthDay')}
                id='day'
                className='w-full outline-none border-b border-black py-1 text-sm'>
                <option disabled selected>
                  Day
                </option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='mb-6'>
            <select
              {...register('relationship')}
              id='relationship'
              className='w-full outline-none border-b border-black py-1 text-sm'>
              <option disabled selected>
                Relationship Status (optional)
              </option>
              <option value='married'>Married</option>
              <option value='engaged'>Engaged</option>
              <option value='single'>Single</option>
            </select>
          </div>
          <button
            type='submit'
            className='w-full px-6 py-4 bg-black text-white text-sm font-semibold'>
            Create an Account
          </button>
        </form>
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <Image
          src='/assets/images/blue-box.jpg'
          width={450}
          height={450}
          alt='blue box'
          className='w-[450px] object-contain'
        />
      </div>
    </div>
  );
};

export default SignUpPage;
