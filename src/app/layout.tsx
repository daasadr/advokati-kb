import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

const playfair = Playfair_Display({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'Kovář, Blažek & Partneři — Advokátní kancelář Praha',
  description:
    'Přední pražská advokátní kancelář se specializací na obchodní právo, nemovitosti, rodinné právo, trestní obhajobu a správní právo. První konzultace zdarma.',
  keywords: ['advokátní kancelář', 'Praha', 'advokát', 'právník', 'obchodní právo', 'rodinné právo'],
  authors: [{ name: 'Kovář, Blažek & Partneři' }],
  openGraph: {
    title: 'Kovář, Blažek & Partneři — Advokátní kancelář Praha',
    description: 'Diskrétní, přesní, orientovaní na výsledek. Právní pomoc v Praze od roku 1998.',
    url: 'https://daasadr.github.io/advokati-kb',
    siteName: 'Kovář, Blažek & Partneři',
    images: [{ url: `${BASE}/images/og-image.jpg`, width: 1200, height: 630 }],
    locale: 'cs_CZ',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#0f1923" />
      </head>
      <body>
        <LanguageProvider>
          <ScrollReveal />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
