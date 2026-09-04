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

  // Praxe je samostatná stránka se službami — stejně jako v patičce.
  // Ostatní položky míří na sekce úvodní stránky.
  const links = [
    { section: 'o-nas',     label: t.about },
    { route:   '/praxe',    label: t.practice },
    { section: 'tym',       label: t.team },
    { section: 'reference', label: t.references },
    { section: 'kontakt',   label: t.contact },
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
          {links.map((l) => {
            const cls = `${styles.link} ${forceLight ? styles.linkDark : ''}`;
            return l.route ? (
              <Link key={l.route} href={l.route} className={cls}>{l.label}</Link>
            ) : (
              <a key={l.section} href={sectionHref(l.section!)} className={cls}>{l.label}</a>
            );
          })}
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
            l.route ? (
              <Link key={l.route} href={l.route} className={styles.mobileLink} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ) : (
              <a key={l.section} href={sectionHref(l.section!)} className={styles.mobileLink} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            )
          ))}
          <button className={styles.mobileLang} onClick={toggle}>
            {lang === 'cs' ? 'English' : 'Česky'}
          </button>
        </nav>
      </div>
    </header>
  );
}
