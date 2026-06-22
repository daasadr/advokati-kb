import type { Lang } from './translations';

export interface PracticeArea {
  id: string;
  slug: string;
  icon: string;
  name: Record<Lang, string>;
  sub: Record<Lang, string>;
  description: Record<Lang, string>;
  typicalCases: Record<Lang, string[]>;
  ourApproach: Record<Lang, string>;
  consultation: Record<Lang, string>;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'obchodni-pravo',
    slug: 'obchodni-pravo',
    icon: '⚖️',
    name: { cs: 'Obchodní právo', en: 'Commercial law' },
    sub: {
      cs: 'Smlouvy, M&A, korporátní struktura, obchodní spory.',
      en: 'Contracts, M&A, corporate structure, commercial disputes.',
    },
    description: {
      cs: 'Obchodní právo je základem každého podnikání. Pomáháme klientům s nastavením korporátní struktury, přípravou a revizí obchodních smluv, řešením sporů a zastoupením při fúzích a akvizicích. Máme zkušenosti jak s tuzemskými, tak s přeshraničními transakcemi. Naším cílem je, aby vaše podnikání stálo na pevných právních základech a bylo připraveno na každou situaci.',
      en: 'Commercial law is the foundation of every business. We assist clients with corporate structure setup, preparation and review of commercial contracts, dispute resolution and representation in mergers and acquisitions. We have experience in both domestic and cross-border transactions. Our goal is for your business to stand on solid legal foundations and be prepared for any situation.',
    },
    typicalCases: {
      cs: ['Příprava a revize obchodních smluv', 'Zakládání a přeměny obchodních společností', 'Fúze, akvizice a due diligence', 'Obchodní spory a rozhodčí řízení', 'Vymáhání pohledávek', 'Insolvenční poradenství'],
      en: ['Preparation and review of commercial contracts', 'Founding and transformation of companies', 'Mergers, acquisitions and due diligence', 'Commercial disputes and arbitration', 'Debt recovery', 'Insolvency advisory'],
    },
    ourApproach: {
      cs: 'Každý obchodní případ posuzujeme nejen z právního, ale i z obchodního hlediska. Hledáme řešení, která jsou právně správná a zároveň prakticky realizovatelná.',
      en: 'We assess every commercial case not only from a legal but also from a business perspective. We seek solutions that are legally sound and practically implementable.',
    },
    consultation: { cs: 'od 2 500 Kč / hod.', en: 'from CZK 2,500 / hour' },
  },
  {
    id: 'spravni-pravo',
    slug: 'spravni-pravo',
    icon: '🏛️',
    name: { cs: 'Správní právo', en: 'Administrative law' },
    sub: {
      cs: 'Řízení před úřady, stavební povolení, veřejné zakázky.',
      en: 'Proceedings before authorities, building permits, public procurement.',
    },
    description: {
      cs: 'Správní právo zahrnuje veškerá řízení, kde stojíte tváří v tvář státnímu aparátu. Zastupujeme klienty v řízeních před správními orgány, pomáháme získat stavební povolení, bráníme se nezákonným rozhodnutím a poskytujeme poradenství v oblasti veřejných zakázek. Známe zákony i praxi a víme, jak efektivně jednat s úřady.',
      en: 'Administrative law covers all proceedings where you face the state apparatus. We represent clients in proceedings before administrative bodies, help obtain building permits, defend against unlawful decisions and advise on public procurement. We know the laws and practice, and know how to deal with authorities effectively.',
    },
    typicalCases: {
      cs: ['Stavební povolení a územní řízení', 'Přestupková řízení', 'Odvolání proti rozhodnutím úřadů', 'Správní žaloby', 'Veřejné zakázky', 'Živnostenská a licenční agenda'],
      en: ['Building permits and planning proceedings', 'Administrative offence proceedings', 'Appeals against administrative decisions', 'Administrative actions', 'Public procurement', 'Trade and licence matters'],
    },
    ourApproach: {
      cs: 'Správní řízení mají přísné lhůty a formální požadavky. Dbáme na každý detail a jednáme proaktivně, aby vaše věc nebyla zamítnuta z procesních důvodů.',
      en: 'Administrative proceedings have strict deadlines and formal requirements. We attend to every detail and act proactively so your case is not dismissed on procedural grounds.',
    },
    consultation: { cs: 'od 2 000 Kč / hod.', en: 'from CZK 2,000 / hour' },
  },
  {
    id: 'nemovitosti',
    slug: 'nemovitosti',
    icon: '🏠',
    name: { cs: 'Nemovitosti', en: 'Real estate' },
    sub: {
      cs: 'Koupě, prodej, nájemní smlouvy, věcná břemena, katastr.',
      en: 'Sale, purchase, lease agreements, easements, land registry.',
    },
    description: {
      cs: 'Realitní transakce jsou jedny z největších právních a finančních rozhodnutí v životě. Provázíme klienty celým procesem — od kontroly listu vlastnictví přes přípravu kupní smlouvy až po vklad do katastru. Zajistíme, aby vaše transakce proběhla bezpečně, rychle a bez skrytých překvapení.',
      en: 'Property transactions are among the largest legal and financial decisions in life. We guide clients through the entire process — from checking the title deed through preparing the purchase contract to the land registry entry. We ensure your transaction proceeds safely, swiftly and without hidden surprises.',
    },
    typicalCases: {
      cs: ['Koupě a prodej nemovitostí', 'Nájemní smlouvy a jejich revize', 'Věcná břemena a zástavní práva', 'Vklady do katastru nemovitostí', 'Nájemní spory', 'Developer projekty'],
      en: ['Property sale and purchase', 'Lease agreements and their review', 'Easements and mortgages', 'Land registry entries', 'Tenancy disputes', 'Development projects'],
    },
    ourApproach: {
      cs: 'Každou nemovitost prověříme v katastru, zkontrolujeme věcná břemena, zástavní práva a veškeré závazky. Klient dostane jasný přehled rizik před podpisem smlouvy.',
      en: 'We verify every property in the land registry, check easements, mortgages and all encumbrances. The client receives a clear risk overview before signing the contract.',
    },
    consultation: { cs: 'od 1 800 Kč / hod.', en: 'from CZK 1,800 / hour' },
  },
  {
    id: 'rodinne-pravo',
    slug: 'rodinne-pravo',
    icon: '👤',
    name: { cs: 'Rodinné právo', en: 'Family law' },
    sub: {
      cs: 'Rozvody, péče o děti, výživné, dědictví a závěti.',
      en: 'Divorce, child custody, maintenance, inheritance and wills.',
    },
    description: {
      cs: 'Rodinné spory patří k nejcitlivějším právním věcem, se kterými se lidé setkávají. Přistupujeme k nim s maximálním respektem, empatií a profesionalitou. Naším cílem není jen dosáhnout právního vítězství, ale pomoci klientovi dostat se z těžké situace co nejlépe — ať už řešíme rozvod, péči o děti, výživné nebo dědické záležitosti.',
      en: 'Family disputes are among the most sensitive legal matters people face. We approach them with maximum respect, empathy and professionalism. Our goal is not merely to win legally, but to help the client emerge from a difficult situation as well as possible — whether we are dealing with divorce, child custody, maintenance or inheritance matters.',
    },
    typicalCases: {
      cs: ['Rozvodová řízení', 'Úprava péče o nezletilé děti', 'Výživné a jeho změna', 'Majetkové vypořádání manželů', 'Závěti a notářské zápisy', 'Dědické spory'],
      en: ['Divorce proceedings', 'Child custody arrangements', 'Maintenance and its variation', 'Matrimonial property settlement', 'Wills and notarial deeds', 'Inheritance disputes'],
    },
    ourApproach: {
      cs: 'Preferujeme mediaci a dohodnuté řešení tam, kde je to možné. Soudní spor je krajní možnost, ne výchozí strategie. Vždy myslíme na nejlepší zájem dětí.',
      en: 'We prefer mediation and agreed solutions where possible. Court proceedings are a last resort, not the default strategy. We always think of the best interests of the children.',
    },
    consultation: { cs: 'od 1 800 Kč / hod.', en: 'from CZK 1,800 / hour' },
  },
  {
    id: 'trestni-obhajoba',
    slug: 'trestni-obhajoba',
    icon: '🛡️',
    name: { cs: 'Trestní obhajoba', en: 'Criminal defence' },
    sub: {
      cs: 'Profesionální obhajoba ve všech fázích trestního řízení.',
      en: 'Professional defence at all stages of criminal proceedings.',
    },
    description: {
      cs: 'Trestní obvinění je jednou z nejtěžších situací, které může člověk zažít. Garantujeme rychlou reakci, důkladnou analýzu spisu a energickou obhajobu. Mgr. Ondřej Šimánek má zkušenosti jako obhájce i jako státní zástupce — zná taktiku protistrany zevnitř a umí na ni efektivně reagovat.',
      en: 'Criminal charges are one of the hardest situations a person can face. We guarantee a fast response, thorough file analysis and energetic defence. Mgr. Ondřej Šimánek has experience as both defence counsel and state prosecutor — he knows the other side\'s tactics from the inside and can respond to them effectively.',
    },
    typicalCases: {
      cs: ['Obhajoba v přípravném řízení', 'Zastoupení před soudem prvního stupně', 'Odvolací řízení', 'Dovolání k Nejvyššímu soudu', 'Hospodářská trestná činnost', 'Dopravní trestné činy'],
      en: ['Defence in preliminary proceedings', 'Representation before the court of first instance', 'Appeal proceedings', 'Appeals to the Supreme Court', 'Economic crime', 'Road traffic offences'],
    },
    ourApproach: {
      cs: 'Okamžitá dostupnost při zadržení nebo obvinění. Kompletní analýza spisu, aktivní vyhledávání exkulpačních důkazů, koordinace s dalšími odborníky (znalci, detektivy).',
      en: 'Immediate availability upon detention or charge. Complete file analysis, active search for exculpatory evidence, coordination with other specialists (experts, investigators).',
    },
    consultation: { cs: 'od 3 000 Kč / hod.', en: 'from CZK 3,000 / hour' },
  },
  {
    id: 'pracovni-pravo',
    slug: 'pracovni-pravo',
    icon: '💼',
    name: { cs: 'Pracovní právo', en: 'Employment law' },
    sub: {
      cs: 'Výpovědi, smlouvy, spory se zaměstnavatelem.',
      en: 'Dismissals, contracts, disputes with employers.',
    },
    description: {
      cs: 'Pracovněprávní vztahy se dotýkají každého z nás. Zastupujeme jak zaměstnance, tak zaměstnavatele. Pomáháme s neplatnými výpověďmi, přípravou pracovních smluv, kolektivním vyjednáváním a BOZP. Zajistíme, aby pracovní vztahy ve vaší firmě stály na pevných právních základech.',
      en: 'Employment relations affect everyone. We represent both employees and employers. We assist with unfair dismissals, preparation of employment contracts, collective bargaining and occupational health and safety. We ensure your workplace relationships stand on solid legal foundations.',
    },
    typicalCases: {
      cs: ['Neplatná výpověď a okamžité zrušení pracovního poměru', 'Pracovní smlouvy a manažerské dohody', 'Kolektivní smlouvy', 'Náhrada škody při pracovním úrazu', 'Non-compete doložky', 'GDPR v pracovněprávních vztazích'],
      en: ['Unfair dismissal and immediate termination', 'Employment contracts and management agreements', 'Collective agreements', 'Compensation for workplace injury', 'Non-compete clauses', 'GDPR in employment relations'],
    },
    ourApproach: {
      cs: 'Pracovní spory mohou být zdlouhavé a emocionálně náročné. Snažíme se je řešit rychle a pragmaticky, s ohledem na to, aby klient mohl co nejdříve pokračovat dál.',
      en: 'Employment disputes can be lengthy and emotionally taxing. We seek to resolve them quickly and pragmatically, with the aim of allowing the client to move on as soon as possible.',
    },
    consultation: { cs: 'od 2 000 Kč / hod.', en: 'from CZK 2,000 / hour' },
  },
];
