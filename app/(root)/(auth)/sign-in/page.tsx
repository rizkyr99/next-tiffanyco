import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { signIn } from '@/auth';
import SignInForm from './_components/SignInForm';

const SignInPage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 max-md:divide-y-2 md:divide-x-2 divide-primary p-6 max-w-screen-xl mx-auto'>
      <div className='py-6 md:p-8 lg:p-24'>
        <h2 className='text-3xl font-playfair text-center md:text-left mb-2'>
          Sign In
        </h2>
        <p className='text-sm font-light text-center md:text-left mb-12'>
          Please sign in to your Tiffany Account.
        </p>
        <SignInForm />
        <p className='my-4 text-sm text-center font-light'>or</p>
        <form
          action={async () => {
            'use server';
            await signIn('google', { redirectTo: '/account' });
          }}>
          <button
            type='submit'
            className='w-full border border-black px-6 py-4 text-sm'>
            Sign in with Google
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
