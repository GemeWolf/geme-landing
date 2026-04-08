import type { ProjectItem, BilingualData } from './types';

export const recentBuilds: BilingualData<ProjectItem> = {
  en: [
    {
      title: 'Dadi Market',
      role: 'Founder & Developer',
      period: '2024 – present',
      description:
        'Own digital storefront for custom web development, FiveM server scripts, and Discord bots — product delivery, integrations, and ongoing support.',
      technologies: ['Web', 'FiveM', 'Discord', 'Node.js'],
      imageUrl: '/dadimarket-webpage.png',
      plainImage: true,
      layout: 'image-left',
    },
    {
      title: 'XRespect',
      role: 'Backend & DevOps Engineer',
      period: 'Feb 2024 – Dic 2025',
      description:
        'Maintained high-concurrency backend services ensuring 99.9% uptime. Reduced DB response latency by 30% and implemented full CI/CD automation pipelines.',
      technologies: ['Java', 'MariaDB', 'CI/CD', 'Docker', 'Nginx'],
      imageUrl: '/xrespect-webpage.png',
      layout: 'image-right',
    },
    {
      title: 'Quasar Store',
      role: 'Support Software Engineer',
      period: 'Jun 2023 – Abr 2024',
      description:
        'Custom backend solutions for e-commerce, resolving critical level 2/3 incidents through code debugging and log analysis.',
      technologies: ['Node.js', 'PostgreSQL', 'REST API'],
      imageUrl: '/quasar-webpage.png',
      layout: 'image-left',
    },
  ],
  es: [
    {
      title: 'Dadi Market',
      role: 'Fundador & Desarrollador',
      period: '2024 – actualidad',
      description:
        'Tienda digital propia: desarrollo web a medida, scripts para servidores FiveM y bots de Discord, con entrega de producto, integraciones y soporte continuo.',
      technologies: ['Web', 'FiveM', 'Discord', 'Node.js'],
      imageUrl: '/dadimarket-webpage.png',
      plainImage: true,
      layout: 'image-left',
    },
    {
      title: 'XRespect',
      role: 'Ingeniero Backend & DevOps',
      period: 'Feb 2024 – Dic 2025',
      description:
        'Mantenimiento de servicios backend de alta concurrencia asegurando 99.9% de uptime. Reducción del 30% en latencia de respuesta de BD e implementación de pipelines de automatización CI/CD.',
      technologies: ['Java', 'MariaDB', 'CI/CD', 'Docker', 'Nginx'],
      imageUrl: '/xrespect-webpage.png',
      layout: 'image-right',
    },
    {
      title: 'Quasar Store',
      role: 'Ingeniero de Software de Soporte',
      period: 'Jun 2023 – Abr 2024',
      description:
        'Soluciones backend personalizadas para e-commerce, resolviendo incidentes críticos de nivel 2/3 mediante depuración de código y análisis de logs.',
      technologies: ['Node.js', 'PostgreSQL', 'REST API'],
      imageUrl: '/quasar-webpage.png',
      layout: 'image-left',
    },
  ],
};
