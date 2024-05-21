import { cn } from '@/utils/cn';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ConciergeBell,
  MapPin,
  User,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface Category {
  id: string;
  label: string;
  path: string;
}

interface CategoryWithSub extends Category {
  subcategories: {
    [key: string]: Category[];
  };
}

const items: CategoryWithSub[] = [
  {
    id: '1',
    label: 'Jewelry',
    path: '/jewelry',
    subcategories: {
      'Shop by Categories': [
        {
          id: '3',
          label: 'Necklaces & Pendants',
          path: '/necklaces-pendants',
        },
        {
          id: '4',
          label: 'Earrings',
          path: '/earrings',
        },
        {
          id: '4',
          label: 'Bracelets',
          path: '/bracelets',
        },
      ],
    },
  },
  {
    id: '2',
    label: 'Gifts',
    path: '/gifts',
    subcategories: {
      'Gifts for...': [
        {
          id: '2',
          label: 'Necklaces & Pendants',
          path: '/necklaces-pendants',
        },
      ],
    },
  },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [activeCategory, setActiveCategory] = useState<CategoryWithSub>();

  return (
    <div
      className={cn(
        'fixed top-0 left-0 bg-white h-screen w-screen flex flex-col transition duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
      <div className='relative h-12 border-t-4 border-primary flex-shrink-0'>
        <button onClick={onClose} className='fixed top-6 right-4 z-50'>
          <X className='size-7 stroke-1' />
        </button>
      </div>
      <div className='px-4 pt-6 pb-24 flex-1 overflow-y-auto'>
        <div className='border-b border-neutral-400'>
          {items.map((item) => (
            <button
              key={item.path}
              onClick={() => setActiveCategory(item)}
              className='text-sm w-full flex items-center justify-between pb-6'>
              {item.label}
              <ChevronRight className='size-6 stroke-1' />
            </button>
          ))}
        </div>
        <div className='mt-6 space-y-6'>
          <Link href='/contact' className='flex items-center gap-2'>
            <ConciergeBell className='size-6 stroke-1' />
            Contact us
          </Link>
          <Link href='/contact' className='flex items-center gap-2'>
            <Calendar className='size-6 stroke-1' />
            Book an Appointment
          </Link>
          <Link href='/contact' className='flex items-center gap-2'>
            <User className='size-6 stroke-1' />
            My Account
          </Link>
          <Link href='/contact' className='flex items-center gap-2'>
            <MapPin className='size-6 stroke-1' />
            Store Locator
          </Link>
        </div>
      </div>
      <div
        className={cn(
          'fixed top-0 left-0 w-screen h-screen flex flex-col bg-white border transition duration-300 ease-in-out',
          activeCategory ? 'translate-x-0' : '-translate-x-full'
        )}>
        <div className='relative h-20 flex items-center justify-center'>
          <button
            onClick={() => setActiveCategory(undefined)}
            className='absolute top-6 left-4'>
            <ChevronLeft className='size-7 stroke-1' />
          </button>
          <span>{activeCategory?.label}</span>
        </div>
        <div className='flex-1 overflow-y-auto p-4'>
          {activeCategory &&
            Object.entries(activeCategory.subcategories).map(
              ([key, values]) => (
                <div>
                  <div className='text-sm mb-6'>{key}</div>
                  <ul className='space-y-6 pl-6'>
                    {values.map((subcategory, index) => (
                      <li key={index}>
                        <Link
                          href={activeCategory.path + subcategory.path}
                          className='text-sm font-light'>
                          {subcategory.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
