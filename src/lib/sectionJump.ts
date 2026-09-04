/**
 * Přechod na sekci místo dlouhého scrollování.
 *
 * Proč: `scroll-behavior: smooth` proletí přes několik tisíc pixelů a cestou
 * postupně protne každý prvek s třídou .reveal. Ten se rozanimuje (0,7 s fade
 * + posun), takže sekce za sekcí problikávají a celý pohyb působí trhaně.
 *
 * Místo toho obsah krátce ztmavne, skok proběhne okamžitě a obsah se vrátí.
 * Prvky, které po skoku leží ve výřezu, se rovnou označí za odhalené — jinak
 * by se po dopadu rozanimovaly znovu. Co je pod výřezem, si svou animaci
 * ponechá na chvíli, kdy k tomu návštěvník doscrolluje.
 */

const FADE_OUT_MS = 170;
const HEADER_GAP = 20;

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function headerOffset(): number {
  const header = document.querySelector('header');
  return (header instanceof HTMLElement ? header.offsetHeight : 70) + HEADER_GAP;
}

/** Vše, co je po skoku vidět, bereme jako už odhalené — bez animace. */
function settleReveals(): void {
  const root = document.documentElement;
  root.classList.add('no-reveal-anim');
  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
  void root.offsetHeight; // vynutí přepočet, aby se sundání třídy neanimovalo
  root.classList.remove('no-reveal-anim');
}

export function jumpToSection(target: Element, hash?: string): void {
  const root = document.documentElement;
  const scrollAndSettle = () => {
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset();
    window.scrollTo({ top, behavior: 'auto' });
    settleReveals();
    if (hash) history.pushState(null, '', `#${hash}`);
  };

  if (prefersReducedMotion()) {
    scrollAndSettle();
    return;
  }

  root.classList.add('section-jump');
  window.setTimeout(() => {
    scrollAndSettle();
    root.classList.remove('section-jump');
  }, FADE_OUT_MS);
}
