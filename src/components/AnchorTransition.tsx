'use client';
import { useEffect } from 'react';
import { jumpToSection } from '@/lib/sectionJump';

/**
 * Odchytává kliknutí na kotvy v rámci stránky (menu, patička, tlačítka v hero)
 * a nahrazuje dlouhé scrollování přechodem přes mlhu — viz lib/sectionJump.
 * Odkazy na jiné stránky nechává být.
 *
 * Vykresluje i samotnou vrstvu mlhy; ta je pořád v DOM a jen mění průhlednost,
 * aby se při kliknutí nemusela zakládat a prohlížeč ji měl připravenou.
 */
export default function AnchorTransition() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as Element | null)?.closest?.('a[href^="#"]');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== '_self') return;

      const id = anchor.getAttribute('href')!.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      jumpToSection(target, id);
    };

    // Po pushState by tlačítko Zpět jen změnilo adresu a nikam neposunulo.
    const onPopState = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) jumpToSection(target);
    };

    document.addEventListener('click', onClick);
    window.addEventListener('popstate', onPopState);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  return <div className="mist" aria-hidden="true" />;
}
