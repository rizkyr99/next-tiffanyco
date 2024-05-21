import Link from 'next/link';

const TopBar = () => {
  return (
    <div className='bg-primary px-4 pt-3 py-2'>
      <p className='text-xs font-semibold text-center'>
        Enjoy complimentary shipping, returns, and Tiffany Blue packaging on all
        orders.{' '}
        <Link href='/' className='py-1 border-b border-black inline-block'>
          Shop now
        </Link>
        .
      </p>
    </div>
  );
};

export default TopBar;
