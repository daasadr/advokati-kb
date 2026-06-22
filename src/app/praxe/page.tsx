import Nav from '@/components/Nav';
import PracticePage from '@/components/PracticePage';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oblasti praxe | Kovář, Blažek & Partneři',
  description: 'Šest specializovaných oblastí právní praxe — obchodní právo, správní právo, nemovitosti, rodinné právo, trestní obhajoba, pracovní právo.',
};

export default function Praxe() {
  return (
    <>
      <Nav />
      <PracticePage />
      <Footer />
    </>
  );
}
