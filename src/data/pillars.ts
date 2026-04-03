import type { PillarItem, BilingualData } from './types';

export const architecturalPillars: BilingualData<PillarItem> = {
  en: [
    {
      icon: 'building',
      title: 'Scalable Systems',
      description: 'High-concurrency backend services with 99.9% uptime and clean architecture foundations.',
    },
    {
      icon: 'gauge',
      title: 'Performance First',
      description: '30% query latency reduction through SQL optimization and efficient schema design.',
    },
    {
      icon: 'shield',
      title: 'Security Minded',
      description: 'OAuth/JWT auth, firewall hardening, reverse proxy configuration and DDoS mitigation.',
    },
    {
      icon: 'refresh-cw',
      title: 'DevOps Culture',
      description: 'Automated CI/CD pipelines, containerization with Docker & Kubernetes for zero-downtime deploys.',
    },
  ],
  es: [
    {
      icon: 'building',
      title: 'Sistemas Escalables',
      description: 'Servicios backend de alta concurrencia con 99.9% de uptime y fundamentos de Clean Architecture.',
    },
    {
      icon: 'gauge',
      title: 'Rendimiento Primero',
      description: 'Reducción del 30% en latencia de consultas mediante optimización SQL y diseño eficiente de esquemas.',
    },
    {
      icon: 'shield',
      title: 'Mentalidad de Seguridad',
      description: 'Autenticación OAuth/JWT, hardening de firewall, configuración de reverse proxy y mitigación de DDoS.',
    },
    {
      icon: 'refresh-cw',
      title: 'Cultura DevOps',
      description: 'Pipelines CI/CD automatizados, containerización con Docker & Kubernetes para deploys sin tiempo de inactividad.',
    },
  ],
};
