'use client';
import dynamic from 'next/dynamic';
import { useState, FormEvent } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import styles from './Contact.module.css';

const Map = dynamic(() => import('./Map'), { ssr: false });

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1200));
    setStatus('sent');
  };

  return (
    <section id="kontakt" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">{t.tag}</span>
          <h2 className={`${styles.title} reveal reveal-delay-1`}>{t.title}</h2>
          <p className={`${styles.claim} reveal reveal-delay-2`}>{t.claim}</p>
        </div>

        <div className={styles.layout}>
          <div className={`${styles.formWrap} reveal`}>
            {status === 'sent' ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                <p>{t.form.success}</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.form.name}</label>
                    <input className={styles.input} type="text" required placeholder={t.form.name} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.form.email}</label>
                    <input className={styles.input} type="email" required placeholder={t.form.email} />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.form.phone}</label>
                    <input className={styles.input} type="tel" placeholder={t.form.phone} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{t.form.area}</label>
                    <select className={styles.input} defaultValue="">
                      <option value="" disabled>{t.form.area}</option>
                      {t.form.areaOptions.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>{t.form.message}</label>
                  <textarea className={styles.textarea} rows={5} required placeholder={t.form.message} />
                </div>
                <button
                  className={`btn-gold ${styles.submit}`}
                  type="submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? t.form.sending : t.form.submit}
                </button>
              </form>
            )}
          </div>

          <div className={`${styles.sidebar} reveal reveal-delay-2`}>
            <div className={styles.infoBlock}>
              <InfoRow label={t.info.addressLabel} value={t.info.address} icon="📍" />
              <InfoRow label={t.info.phoneLabel} value={t.info.phone} icon="📞" href={`tel:${t.info.phone.replace(/\s/g, '')}`} />
              <InfoRow label={t.info.emailLabel} value={t.info.email} icon="✉️" href={`mailto:${t.info.email}`} />
              <InfoRow label={t.info.hoursLabel} value={t.info.hoursWeek} sub={t.info.hoursNote} icon="🕐" />
              <InfoRow label={t.info.idLabel} value={t.info.id} icon="📋" />
            </div>

            <div className={styles.mapWrap}>
              <Map label={t.info.address} />
              <p className={styles.mapNote}>{t.mapNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value, sub, icon, href }: { label: string; value: string; sub?: string; icon: string; href?: string }) {
  return (
    <div className={styles.infoRow}>
      <span className={styles.infoIcon}>{icon}</span>
      <div>
        <span className={styles.infoLabel}>{label}</span>
        {href ? (
          <a href={href} className={styles.infoValue}>{value}</a>
        ) : (
          <span className={styles.infoValue}>{value}</span>
        )}
        {sub && <span className={styles.infoSub}>{sub}</span>}
      </div>
    </div>
  );
}
