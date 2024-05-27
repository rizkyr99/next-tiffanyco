import { Search } from 'lucide-react';

const Searchbar = () => {
  return (
    <div className='h-12 bg-white border-t-2 border-primary px-4 py-1.5 sm:hidden'>
      <div className='w-full h-full flex items-center px-4 bg-neutral-50'>
        <Search className='size-5' />
        <input
          type='text'
          className='flex-1 h-full outline-none bg-transparent pl-4 text-neutral-400 font-light'
          placeholder='Search...'
        />
      </div>
    </div>
  );
};

export default Searchbar;
