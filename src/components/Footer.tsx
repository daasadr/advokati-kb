'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { BASE_PATH } from '@/lib/basePath';
import { translations } from '@/lib/translations';
import styles from './Footer.module.css';

// Sekce úvodní stránky jdou přes kotvu (viz Nav.tsx — přes <Link> by je
// basePath rozbil), Praxe je samostatná stránka a zůstává na <Link>.
const NAV_ITEMS = [
  { label_cs: 'O nás',     label_en: 'About',      section: 'o-nas'     },
  { label_cs: 'Praxe',     label_en: 'Practice',   route:   '/praxe'    },
  { label_cs: 'Tým',       label_en: 'Team',       section: 'tym'       },
  { label_cs: 'Reference', label_en: 'References', section: 'reference' },
  { label_cs: 'Kontakt',   label_en: 'Contact',    section: 'kontakt'   },
];

export default function Footer() {
  const { lang } = useLanguage();
  const isHome = usePathname() === '/';
  const sectionHref = (id: string) => (isHome ? `#${id}` : `${BASE_PATH}/#${id}`);
  const t = translations[lang].footer;
  const info = translations[lang].contact.info;

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <p className={styles.logo}>
                <span className={styles.logoMain}>Kovář Blažek</span>
                <span className={styles.logoAmp}>&nbsp;&amp;&nbsp;</span>
                <span className={styles.logoPartners}>Partneři</span>
              </p>
              <p className={styles.desc}>{t.desc}</p>
              <p className={styles.chamber}>{t.chamber}</p>
            </div>
            <div>
              <h4 className={styles.colTitle}>{t.quickLinks}</h4>
              <ul className={styles.linkList}>
                {NAV_ITEMS.map(item => {
                  const label = lang === 'cs' ? item.label_cs : item.label_en;
                  return (
                    <li key={item.route ?? item.section}>
                      {item.route ? (
                        <Link href={item.route} className={styles.footerLink}>{label}</Link>
                      ) : (
                        <a href={sectionHref(item.section!)} className={styles.footerLink}>{label}</a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className={styles.colTitle}>{t.contact}</h4>
              <ul className={styles.contactList}>
                <li>{info.address}</li>
                <li>
                  <a href={`tel:${info.phone.replace(/\s/g, '')}`} className={styles.footerLink}>{info.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${info.email}`} className={styles.footerLink}>{info.email}</a>
                </li>
                <li className={styles.hours}>{info.hoursWeek}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.disclaimer}>{t.disclaimer}</p>
          <p className={styles.rights}>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
