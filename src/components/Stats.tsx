'use client';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './Stats.module.css';

const FOUNDED = 1998;

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const { lang } = useLanguage();
  const items = translations[lang].stats.items;
  const yearCount = new Date().getFullYear() - FOUNDED;

  return (
    <div className={styles.bar}>
      <div className={`container ${styles.grid}`}>
        {items.map((item, i) => {
          const val = item.value === -1 ? yearCount : item.value;
          return (
            <div key={i} className={styles.item}>
              <div className={styles.number}>
                <Counter target={val} suffix={item.suffix} />
              </div>
              <div className={styles.label}>{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
