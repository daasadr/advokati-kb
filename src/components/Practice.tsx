'use client';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './Practice.module.css';

const SLUGS = ['obchodni-pravo', 'spravni-pravo', 'nemovitosti', 'rodinne-pravo', 'trestni-obhajoba', 'pracovni-pravo'];

export default function Practice() {
  const { lang } = useLanguage();
  const t = translations[lang].practice;

  return (
    <section id="praxe" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
          <p className={`${styles.sub} reveal reveal-delay-2`}>{t.sub}</p>
        </div>
        <div className={styles.grid}>
          {t.areas.map((area, i) => (
            <article key={area.name} className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}>
              <div className={styles.cardIcon} aria-hidden="true">{area.icon}</div>
              <h3 className={styles.cardName}>{area.name}</h3>
              <p className={styles.cardDesc}>{area.desc}</p>
              <Link href={`/praxe#${SLUGS[i]}`} className={styles.cardCta}>
                {t.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
