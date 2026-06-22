'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './References.module.css';

export default function References() {
  const { lang } = useLanguage();
  const t = translations[lang].references;

  return (
    <section id="reference" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
          <p className={`${styles.sub} reveal reveal-delay-2`}>{t.sub}</p>
        </div>

        <div className={styles.cases}>
          {t.cases.map((c, i) => (
            <article key={i} className={`${styles.case} reveal reveal-delay-${i + 1}`}>
              <div className={styles.caseIcon}>{c.icon}</div>
              <div className={styles.caseContent}>
                <span className={styles.caseTag}>{c.category}</span>
                <h3 className={styles.caseTitle}>{c.title}</h3>
                <div className={styles.caseSteps}>
                  <div className={styles.step}>
                    <span className={styles.stepLabel}>{lang === 'cs' ? 'Situace' : 'Situation'}</span>
                    <p className={styles.stepText}>{c.situation}</p>
                  </div>
                  <div className={styles.stepArrow}>→</div>
                  <div className={styles.step}>
                    <span className={styles.stepLabel}>{lang === 'cs' ? 'Postup' : 'Approach'}</span>
                    <p className={styles.stepText}>{c.process}</p>
                  </div>
                  <div className={styles.stepArrow}>→</div>
                  <div className={`${styles.step} ${styles.stepResult}`}>
                    <span className={styles.stepLabel}>{lang === 'cs' ? 'Výsledek' : 'Result'}</span>
                    <p className={styles.stepText}>{c.result}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.testimonials}>
          {t.testimonials.map((t2, i) => (
            <blockquote key={i} className={`${styles.quote} reveal reveal-delay-${i + 1}`}>
              <div className={styles.quoteBar} />
              <p className={styles.quoteText}>„{t2.quote}"</p>
              <footer className={styles.quoteFooter}>
                <span className={styles.quoteAuthor}>{t2.author}</span>
                <span className={styles.quoteSector}>{t2.sector}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
