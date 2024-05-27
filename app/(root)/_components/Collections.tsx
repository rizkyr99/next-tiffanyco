import { getCollections } from '@/actions/product';
import Carousel from '@/components/carousel';

const Collections = async () => {
  const collections = await getCollections();
  return (
    <section className='px-4 lg:px-14'>
      <div className='mb-6 md:px-4 lg:text-center'>
        <p className='text-2xl font-semibold mb-5'>The Tiffany Icons</p>
        <p className='text-sm font-light'>
          For 187 years, Tiffany&apos;s iconic collections have helped an
          ever-changing world speak the ever-changing language of love.
        </p>
      </div>
      <div className='my-8'>
        <Carousel type='collections' data={collections} />
      </div>
    </section>
  );
};

export default Collections;
