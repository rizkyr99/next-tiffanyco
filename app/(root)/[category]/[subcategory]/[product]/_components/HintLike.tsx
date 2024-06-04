'use client';

import { formatToDollar } from '@/utils/formatToDollar';
import { ALargeSmall, Heart, Mail, Minus, Plus, Truck } from 'lucide-react';
import React from 'react';

interface ProductActionProps {
  productId: string;
  price: number | undefined;
}

const HintLike = ({ productId, price }: ProductActionProps) => {
  return (
    <div className='flex items-center gap-4 my-4'>
      <button>
        <Mail className='size-5 stroke-1' />
      </button>
      <button>
        <Heart className='size-5 stroke-1' />
      </button>
    </div>
  );
};

export default HintLike;
