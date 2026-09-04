'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { BASE_PATH } from '@/lib/basePath';
import { translations } from '@/lib/translations';
import styles from './Nav.module.css';

export default function Nav() {
  const { lang, toggle } = useLanguage();
  const t = translations[lang].nav;
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Kotvy schválně nejdou přes <Link>. Next by basePath slepil s "/#id" na
  // "/advokati-kb#o-nas" — tedy jinou cestu, než na které stojíme, takže router
  // klik pohltil a nestalo se nic. Na úvodní stránce stačí holá kotva, odjinud
  // plná cesta včetně lomítka před mřížkou.
  const sectionHref = (id: string) => (isHome ? `#${id}` : `${BASE_PATH}/#${id}`);

  const links = [
    { id: 'o-nas',     label: t.about },
    { id: 'praxe',     label: t.practice },
    { id: 'tym',       label: t.team },
    { id: 'reference', label: t.references },
    { id: 'kontakt',   label: t.contact },
  ];

  const forceLight = !isHome || scrolled;

  return (
    <header className={`${styles.nav} ${(scrolled || !isHome) ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Kovář, Blažek & Partneři — domů">
          <span className={styles.logoMain}>Kovář Blažek</span>
          <span className={styles.logoSub}>& Partneři · Advokátní kancelář</span>
        </Link>

        <nav className={styles.links} aria-label="Hlavní navigace">
          {links.map((l) => (
            <a key={l.id} href={sectionHref(l.id)} className={`${styles.link} ${forceLight ? styles.linkDark : ''}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            className={`${styles.langBtn} ${forceLight ? styles.langBtnDark : ''}`}
            onClick={toggle}
            aria-label="Přepnout jazyk"
          >
            <span className={lang === 'cs' ? styles.activeLang : ''}>CZ</span>
            <span className={styles.langDiv}>/</span>
            <span className={lang === 'en' ? styles.activeLang : ''}>EN</span>
          </button>
          <button
            className={styles.hamburger}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
            aria-expanded={open}
          >
            <span className={`${styles.bar} ${forceLight ? styles.barDark : ''} ${open ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${forceLight ? styles.barDark : ''} ${open ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${forceLight ? styles.barDark : ''} ${open ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`} aria-hidden={!open}>
        <nav className={styles.mobileLinks}>
          {links.map((l) => (
            <a key={l.id} href={sectionHref(l.id)} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <button className={styles.mobileLang} onClick={toggle}>
            {lang === 'cs' ? 'English' : 'Česky'}
          </button>
        </nav>
      </div>
    </header>
  );
}
