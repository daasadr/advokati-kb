import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Practice from '@/components/Practice';
import Team from '@/components/Team';
import References from '@/components/References';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Practice />
      <Team />
      <References />
      <News />
      <Contact />
      <Footer />
    </>
  );
}
