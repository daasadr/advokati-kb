'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { asset } from '@/lib/basePath';
import styles from './About.module.css';

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="o-nas" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <div className={`${styles.imgMain} reveal`}>
            <img src={asset('/images/about-office.jpg')} alt="Interiér advokátní kanceláře" decoding="async" />
          </div>
          <div className={`${styles.imgAccent} reveal reveal-delay-2`}>
            <img src={asset('/images/about-team.jpg')} alt="Tým advokátní kanceláře" decoding="async" />
          </div>
          <div className={styles.yearBadge}>
            <span className={styles.yearNum}>1998</span>
            <span className={styles.yearLabel}>Praha</span>
          </div>
        </div>

        <div className={styles.textCol}>
          <span className="section-tag reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
          <div className={`${styles.goldLine} reveal reveal-delay-1`} />
          <p className={`${styles.para} reveal reveal-delay-2`}>{t.p1}</p>
          <p className={`${styles.para} reveal reveal-delay-3`}>{t.p2}</p>
          <p className={`${styles.para} reveal reveal-delay-3`}>{t.p3}</p>

          <div className={`${styles.pillars} reveal reveal-delay-4`}>
            {t.pillars.map((p) => (
              <div key={p.label} className={styles.pillar}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <span className={styles.pillarLabel}>{p.label}</span>
              </div>
            ))}
          </div>

          <div className={`${styles.sig} reveal reveal-delay-4`}>
            <div className={styles.sigLine} />
            <div>
              <p className={styles.sigName}>{t.signature}</p>
              <p className={styles.sigTitle}>{t.signatureTitle}</p>
            </div>
          </div>

          <p className={`${styles.accred} reveal reveal-delay-5`}>
            <span className={styles.accredIcon}>⚖</span> {t.accreditation}
          </p>
        </div>
      </div>
    </section>
  );
}
