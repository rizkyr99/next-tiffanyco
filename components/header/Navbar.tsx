'use client';

import { menuItems } from '@/constants/menu';
import Link from 'next/link';
import { useNavMenu } from '@/hooks/useNavMenu';

const Navbar = () => {
  const { activeItem, setActiveItem, content } = useNavMenu();

  return (
    <nav
      onMouseLeave={() => setActiveItem(undefined)}
      className='relative hidden lg:block h-10 w-full bg-white'>
      <ul className='h-full w-full flex items-start gap-12 px-6 justify-center'>
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              onMouseEnter={() => setActiveItem(item)}
              href={item.path}
              className='font-light'>
              <span className='underline-hover-link !text-base !font-light hover:!font-semibold'>
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {activeItem && (
        <div
          onClick={() => setActiveItem(undefined)}
          className='absolute z-50 top-full left-0 w-full bg-white  p-4'>
          <div className='grid grid-cols-4 gap-8 max-w-screen-xl mx-auto'>
            {content}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
