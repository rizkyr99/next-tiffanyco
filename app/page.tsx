import Collections from './_components/Collections';
import Featured from './_components/Featured';
import Gifts from './_components/Gifts';
import Hero from './_components/Hero';

export default function Home() {
  return (
    <main className='space-y-10 lg:space-y-12'>
      <Hero />
      <Featured />
      <Collections />
      <Gifts />
    </main>
  );
}
