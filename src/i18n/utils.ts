import type { SupportedLang } from '../data/types';

// Import all translation modules by locale
import enMeta from './en/meta.json' with { type: 'json' };
import enNav from './en/nav.json' with { type: 'json' };
import enHero from './en/hero.json' with { type: 'json' };
import enStats from './en/stats.json' with { type: 'json' };
import enTech from './en/tech.json' with { type: 'json' };
import enPillars from './en/pillars.json' with { type: 'json' };
import enProjects from './en/projects.json' with { type: 'json' };
import enCerts from './en/certs.json' with { type: 'json' };
import enCta from './en/cta.json' with { type: 'json' };
import enContact from './en/contact.json' with { type: 'json' };
import enFooter from './en/footer.json' with { type: 'json' };

import esMeta from './es/meta.json' with { type: 'json' };
import esNav from './es/nav.json' with { type: 'json' };
import esHero from './es/hero.json' with { type: 'json' };
import esStats from './es/stats.json' with { type: 'json' };
import esTech from './es/tech.json' with { type: 'json' };
import esPillars from './es/pillars.json' with { type: 'json' };
import esProjects from './es/projects.json' with { type: 'json' };
import esCerts from './es/certs.json' with { type: 'json' };
import esCta from './es/cta.json' with { type: 'json' };
import esContact from './es/contact.json' with { type: 'json' };
import esFooter from './es/footer.json' with { type: 'json' };

type NamespaceDict = Record<string, string>;
type Dictionary = Record<string, NamespaceDict>;

const dictionaries: Record<SupportedLang, Dictionary> = {
  en: {
    meta: enMeta,
    nav: enNav,
    hero: enHero,
    stats: enStats,
    tech: enTech,
    pillars: enPillars,
    projects: enProjects,
    certs: enCerts,
    cta: enCta,
    contact: enContact,
    footer: enFooter,
  },
  es: {
    meta: esMeta,
    nav: esNav,
    hero: esHero,
    stats: esStats,
    tech: esTech,
    pillars: esPillars,
    projects: esProjects,
    certs: esCerts,
    cta: esCta,
    contact: esContact,
    footer: esFooter,
  },
};

// Build an inverted index for O(1) lookup and detect collisions at startup
type TranslationKey = keyof typeof enMeta
  | keyof typeof enNav
  | keyof typeof enHero
  | keyof typeof enStats
  | keyof typeof enTech
  | keyof typeof enPillars
  | keyof typeof enProjects
  | keyof typeof enCerts
  | keyof typeof enCta
  | keyof typeof enContact
  | keyof typeof enFooter;

const keyToNamespace: Map<string, string> = new Map();
for (const [ns, dict] of Object.entries(dictionaries.en)) {
  for (const key of Object.keys(dict)) {
    if (keyToNamespace.has(key)) {
      console.warn(`i18n collision detected: "${key}" exists in both "${keyToNamespace.get(key)}" and "${ns}"`);
    }
    keyToNamespace.set(key, ns);
  }
}

export function getLangFromUrl(url: URL): SupportedLang {
  const [, segment] = url.pathname.split('/');
  if (segment === 'es' || segment?.startsWith('es')) return 'es';
  return 'en';
}

export function useTranslations(lang: SupportedLang) {
  return function t(key: TranslationKey): string {
    const ns = keyToNamespace.get(key);
    if (!ns) return key;
    return dictionaries[lang][ns]?.[key] ?? dictionaries.en[ns]?.[key] ?? key;
  };
}
