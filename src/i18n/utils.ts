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

const dictionaries: Record<SupportedLang, Record<string, string>> = {
  en: { ...enMeta, ...enNav, ...enHero, ...enStats, ...enTech, ...enPillars, ...enProjects, ...enCerts, ...enCta, ...enContact, ...enFooter },
  es: { ...esMeta, ...esNav, ...esHero, ...esStats, ...esTech, ...esPillars, ...esProjects, ...esCerts, ...esCta, ...esContact, ...esFooter },
};

export function getLangFromUrl(url: URL): SupportedLang {
  const [, segment] = url.pathname.split('/');
  if (segment === 'es' || segment?.startsWith('es')) return 'es';
  return 'en';
}

export function useTranslations(lang: SupportedLang) {
  return function t(key: keyof typeof dictionaries.en): string {
    return dictionaries[lang][key] ?? dictionaries.en[key] ?? key;
  };
}
