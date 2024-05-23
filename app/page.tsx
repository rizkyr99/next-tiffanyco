import Collections from './_components/Collections';
import Featured from './_components/Featured';
import Hero from './_components/Hero';

export default function Home() {
  return (
    <main className='space-y-10'>
      <Hero />
      <Featured />
      <Collections />
    </main>
  );
}
