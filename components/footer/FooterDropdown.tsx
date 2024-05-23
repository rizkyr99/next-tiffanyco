'use client';

import { cn } from '@/utils/cn';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface Item {
  label: string;
  url: string;
}

interface FooterDropdownProps {
  title: string;
  items: Item[];
}

const FooterDropdown = ({ title, items }: FooterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className='text-sm font-semibold mb-6 flex items-center justify-between'>
        {title}
        <ChevronDown
          className={cn(
            'md:hidden size-6 stroke-1 text-neutral-500 transition duration-300',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
        />
      </div>
      <div
        className={cn(
          'flex-col items-start gap-4 px-6',
          isOpen ? 'flex' : 'hidden md:flex'
        )}>
        {items.map((item, index) => (
          <Link key={index} href={item.url} className='text-xs'>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterDropdown;
