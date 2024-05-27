import { User } from 'lucide-react';

const Account = () => {
  return (
    <div className='group relative'>
      <div className='hidden lg:flex cursor-pointer'>
        <User className='size-5 stroke-1 hover:stroke-2' />
      </div>
      <div className='fixed'></div>
    </div>
  );
};

export default Account;
