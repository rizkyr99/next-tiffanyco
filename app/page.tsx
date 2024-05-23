import Category from './_components/Category';
import Collections from './_components/Collections';
import Engagement from './_components/Engagement';
import Featured from './_components/Featured';
import Gifts from './_components/Gifts';
import Hero from './_components/Hero';
import Newest from './_components/Newest';

export default function Home() {
  return (
    <main className='space-y-10 lg:space-y-12'>
      <Hero />
      <Featured />
      <Collections />
      <Gifts />
      <Category />
      <Newest />
      <Engagement />
    </main>
  );
}
