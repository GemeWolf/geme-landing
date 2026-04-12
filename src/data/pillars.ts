import type { PillarItem, BilingualData } from './types';

export const architecturalPillars: BilingualData<PillarItem> = {
  en: [
    {
      icon: 'building',
      title: 'I build for scale',
      description: 'Decoupled services that grow without becoming a technical nightmare.',
    },
    {
      icon: 'gauge',
      title: 'I obsess over performance',
      description: 'Optimizing Core Web Vitals and latency until the numbers stop bothering me.',
    },
    {
      icon: 'shield',
      title: "Security isn't optional",
      description: 'Zero-trust protocols and solid auth patterns across the full stack.',
    },
    {
      icon: 'refresh-cw',
      title: 'I ship, not just code',
      description: 'Automated CI/CD and containerized deploys so things actually reach production.',
    },
  ],
  es: [
    {
      icon: 'building',
      title: 'Construyo para escalar',
      description: 'Servicios desacoplados que crecen sin convertirse en una pesadilla técnica.',
    },
    {
      icon: 'gauge',
      title: 'Me obsesiona el rendimiento',
      description: 'Optimizo Core Web Vitals y latencia hasta que los números dejan de molestarme.',
    },
    {
      icon: 'shield',
      title: 'La seguridad no es opcional',
      description: 'Protocolos zero-trust y patrones de auth sólidos en todo el stack.',
    },
    {
      icon: 'refresh-cw',
      title: 'Yo entrego, no solo codifico',
      description: 'CI/CD automatizado y deploys containerizados para que las cosas lleguen a producción.',
    },
  ],
};
