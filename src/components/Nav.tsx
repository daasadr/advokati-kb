'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
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

  const links = [
    { href: '/#o-nas', label: t.about },
    { href: '/#praxe', label: t.practice },
    { href: '/#tym', label: t.team },
    { href: '/#reference', label: t.references },
    { href: '/#kontakt', label: t.contact },
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
            <Link key={l.href} href={l.href} className={`${styles.link} ${forceLight ? styles.linkDark : ''}`}>
              {l.label}
            </Link>
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
            <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <button className={styles.mobileLang} onClick={toggle}>
            {lang === 'cs' ? 'English' : 'Česky'}
          </button>
        </nav>
      </div>
    </header>
  );
}
