'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './Team.module.css';

const INITIALS = ['RK', 'TB', 'OŠ', 'JH'];
const COLORS = ['#1a2e3e', '#1e3028', '#2e1a1a', '#1a1e2e'];

export default function Team() {
  const { lang } = useLanguage();
  const t = translations[lang].team;

  return (
    <section id="tym" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
          <p className={`${styles.sub} reveal reveal-delay-2`}>{t.sub}</p>
        </div>
        <div className={styles.grid}>
          {t.members.map((m, i) => (
            <article key={m.name} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <div className={styles.avatar} style={{ background: COLORS[i] }}>
                <span className={styles.initials}>{INITIALS[i]}</span>
                <div className={styles.avatarRing} />
              </div>
              <h3 className={styles.name}>{m.name}</h3>
              <p className={styles.role}>{m.role}</p>
              <p className={styles.areas}>{m.areas}</p>
              <div className={styles.divider} />
              <p className={styles.bio}>{m.bio}</p>
              <a href="#kontakt" className={styles.contact} aria-label={`Kontaktovat ${m.name}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 4h12v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm0 0l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {lang === 'cs' ? 'Napsat e-mail' : 'Send email'}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
