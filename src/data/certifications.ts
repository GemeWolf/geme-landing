import type { CertificationItem, BilingualData } from './types';

export const certifications: BilingualData<CertificationItem> = {
  en: [
    {
      title: 'Google Cloud Foundations',
      issuer: 'Google',
      year: '2024',
      description: 'GCP Infrastructure & Architecture',
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      year: '2024',
      description: 'End-to-end application delivery',
    },
    {
      title: 'AI Fundamentals',
      issuer: 'ULA',
      year: '2024',
      description: 'Core AI & machine learning concepts',
    },
  ],
  es: [
    {
      title: 'Google Cloud Foundations',
      issuer: 'Google',
      year: '2024',
      description: 'Infraestructura y Arquitectura GCP',
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      year: '2024',
      description: 'Entrega de aplicaciones de extremo a extremo',
    },
    {
      title: 'AI Fundamentals',
      issuer: 'ULA',
      year: '2024',
      description: 'Conceptos fundamentales de IA y machine learning',
    },
  ],
};
