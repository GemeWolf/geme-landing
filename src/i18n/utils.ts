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

export function getLangFromUrl(url: URL): SupportedLang {
  const [, segment] = url.pathname.split('/');
  if (segment === 'es' || segment?.startsWith('es')) return 'es';
  return 'en';
}

export function useTranslations(lang: SupportedLang) {
  return function t(key: string): string {
    const dict = dictionaries[lang];
    const fallbackDict = dictionaries.en;

    // Search in every namespace for an exact key match
    for (const ns of Object.values(dict)) {
      if (key in ns) return ns[key];
    }
    for (const ns of Object.values(fallbackDict)) {
      if (key in ns) return ns[key];
    }
    return key;
  };
}
