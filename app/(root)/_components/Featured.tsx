import { getFeaturedProducts } from '@/actions/product';
import Carousel from '@/components/carousel';

const Featured = async () => {
  const products = await getFeaturedProducts();

  return (
    <section className='px-4 lg:px-14 py-4'>
      <div className='my-8'>
        <Carousel type='featured' data={products} />
      </div>
      <button className='px-6 py-3 text-sm border border-black mx-auto block'>
        Shop Now
      </button>
    </section>
  );
};

export default Featured;
