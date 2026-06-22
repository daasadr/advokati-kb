'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { PRACTICE_AREAS } from '@/lib/practiceData';
import styles from './PracticePage.module.css';

export default function PracticePage() {
  const { lang } = useLanguage();
  const t = translations[lang].practicePage;
  const [active, setActive] = useState(PRACTICE_AREAS[0].id);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    // activate from hash on load
    const hash = window.location.hash.slice(1);
    if (hash && PRACTICE_AREAS.some(a => a.id === hash)) setActive(hash);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sectionRefs.current.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current.get(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(id);
  };

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className="container">
          <span className="section-tag">{t.pageTitle}</span>
          <h1 className={styles.heroTitle}>{t.pageHeading}</h1>
          <p className={styles.heroSub}>{t.pageSub}</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className="container">
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <nav className={styles.subnav}>
                {PRACTICE_AREAS.map(area => (
                  <button
                    key={area.id}
                    className={`${styles.navItem} ${active === area.id ? styles.navItemActive : ''}`}
                    onClick={() => scrollTo(area.id)}
                    type="button"
                  >
                    <span className={styles.navIcon}>{area.icon}</span>
                    <span>{area.name[lang]}</span>
                  </button>
                ))}
              </nav>
              <div className={styles.processBox}>
                <h3 className={styles.processTitle}>{t.processTitle}</h3>
                <ol className={styles.processList}>
                  {t.steps.map((step, i) => (
                    <li key={i} className={styles.processItem}>
                      <span className={styles.processNum}>{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <div className={styles.content}>
              {PRACTICE_AREAS.map(area => (
                <section
                  key={area.id}
                  id={area.id}
                  className={styles.areaSection}
                  ref={el => { if (el) sectionRefs.current.set(area.id, el); }}
                >
                  <div className={styles.areaHeader}>
                    <span className={styles.areaIcon}>{area.icon}</span>
                    <div>
                      <h2 className={styles.areaTitle}>{area.name[lang]}</h2>
                      <p className={styles.areaSub}>{area.sub[lang]}</p>
                    </div>
                  </div>
                  <p className={styles.areaDesc}>{area.description[lang]}</p>
                  <div className={styles.areaCols}>
                    <div>
                      <h3 className={styles.miniTitle}>
                        {lang === 'cs' ? 'Typické případy' : 'Typical cases'}
                      </h3>
                      <ul className={styles.caseList}>
                        {area.typicalCases[lang].map((c, i) => (
                          <li key={i} className={styles.caseItem}>{c}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className={styles.miniTitle}>
                        {lang === 'cs' ? 'Náš přístup' : 'Our approach'}
                      </h3>
                      <p className={styles.approach}>{area.ourApproach[lang]}</p>
                      <div className={styles.consultBox}>
                        <span className={styles.consultLabel}>{t.consultationTitle}</span>
                        <span className={styles.consultPrice}>{area.consultation[lang]}</span>
                      </div>
                      <Link href="/#kontakt" className={`btn-gold ${styles.cta}`}>
                        {t.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
