'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './News.module.css';

const DATES = ['24. 3. 2025', '10. 2. 2025', '5. 1. 2025'];

export default function News() {
  const { lang } = useLanguage();
  const t = translations[lang].news;

  return (
    <section id="aktuality" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
          <p className={`${styles.sub} reveal reveal-delay-2`}>{t.sub}</p>
        </div>
        <div className={styles.grid}>
          {t.items.map((item, i) => (
            <article key={i} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <div className={styles.cardTop}>
                <span className={styles.area}>{item.area}</span>
                <time className={styles.date}>{DATES[i]}</time>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.perex}>{item.perex}</p>
              <button className={styles.readMore} type="button" aria-label={`${t.readMore}: ${item.title}`}>
                {t.readMore}
                <span className={styles.arrow}>→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
