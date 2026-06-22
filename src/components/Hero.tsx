'use client';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { asset } from '@/lib/basePath';
import styles from './Hero.module.css';

const ParticleCanvas = dynamic(() => import('./ParticleCanvas'), { ssr: false });

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div
        ref={bgRef}
        className={styles.bg}
        style={{ backgroundImage: `url(${asset('/images/hero-bg.jpg')})` }}
      />
      <div className={styles.overlay} />
      <ParticleCanvas />

      <div className={`container ${styles.content}`}>
        <p className={`${styles.since} reveal`}>{t.since}</p>
        <h1 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h1>
        <div className={`${styles.divider} reveal reveal-delay-2`} aria-hidden="true" />
        <p className={`${styles.claim} reveal reveal-delay-2`}>{t.claim}</p>
        <div className={`${styles.ctas} reveal reveal-delay-3`}>
          <a href="/#kontakt" className="btn-gold">{t.cta1}</a>
          <Link href="/#praxe" className="btn-outline">{t.cta2}</Link>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
