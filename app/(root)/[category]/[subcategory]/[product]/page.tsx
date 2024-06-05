import { getFeaturedProducts, getProductBySlug } from '@/actions/product';
import Carousel from '@/components/carousel';
import { MapPin, Truck, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import AddToCart from './_components/AddToCart';
import HintLike from './_components/HintLike';
import { urlFor } from '@/utils/imageUrlBuilder';

const ProductPage = async ({ params }: { params: { product: string } }) => {
  const product = await getProductBySlug(params.product);
  const featuredProducts = await getFeaturedProducts();

  if (!product) return 'Product Not Found';

  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-[60%,40%]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 place-content-start'>
          {product.image &&
            product.image.map((item, index) => (
              <div key={index} className='group relative aspect-square w-full'>
                <Image
                  src={urlFor(item).url()}
                  fill
                  alt=''
                  className='object-cover'
                />
                <div className='absolute inset-0 hidden group-hover:flex items-center justify-center cursor-zoom-in'>
                  <ZoomIn className='size-12 stroke-1' />
                </div>
              </div>
            ))}
        </div>
        <div className='py-12 px-8 lg:px-28 lg:py-16 sticky top-0 self-start'>
          <div className='text-xs mb-8'>
            Home / Designer Jewelry / Necklaces & Pendants
          </div>
          <Link href='/' className='text-sm font-semibold underline'>
            Tiffany T
          </Link>
          <h1 className='font-playfair text-2xl'>{product.name}</h1>
          <p className='font-playfair text-sm'>in Yellow Gold</p>
          <HintLike product={product} />
          <div className='flex items-center gap-2 text-xs font-semibold border-t border-black py-3'>
            <Truck className='size-5 stroke-1' />
            Complimentary Shipping & Returns
          </div>
          <AddToCart product={product} />
          <p className='text-xs my-4'>
            Buy now and pay later with PayPal.{' '}
            <Link href='/' className='underline'>
              Learn more
            </Link>
          </p>
          <div className='flex items-center gap-2 text-sm underline font-semibold my-4'>
            <MapPin className='size-4 stroke-1' />
            Find in store
          </div>
          <p className='text-sm font-semibold mb-2'>Description & Details</p>
          {product.description && (
            <PortableText
              value={product.description}
              components={{
                block: ({ children }) => (
                  <p className='text-sm font-light mb-4'>{children}</p>
                ),
                list: ({ children }) => (
                  <ul className='text-sm font-light list-disc px-5'>
                    {children}
                  </ul>
                ),
              }}
            />
          )}
        </div>
      </div>
      <div className='px-2'>
        <h2 className='font-playfair text-3xl my-8 md:text-center'>
          You May Also Like
        </h2>
        <div className='border-l-[96px] border-primary'>
          <Carousel type='featured' data={featuredProducts} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductPage;
