import type { ProjectItem, BilingualData } from './types';

export const recentBuilds: BilingualData<ProjectItem> = {
  en: [
    {
      title: 'Dadi Market',
      role: 'Founder & Developer',
      period: '2024 – present',
      description:
        'My own digital storefront for FiveM scripts, web development and Discord bots. I built it, I run it, I maintain it.',
      technologies: ['Web', 'FiveM', 'Discord', 'Node.js'],
      imageUrl: '/dadimarket-webpage.png',
      plainImage: true,
      layout: 'image-left',
    },
    {
      title: 'XRespect',
      role: 'Backend & DevOps Engineer',
      period: 'Feb 2024 – Dec 2025',
      description:
        'Kept their backend alive at 99.9% uptime, cut DB response latency by 30%, and automated their entire deploy pipeline.',
      technologies: ['Java', 'MariaDB', 'CI/CD', 'Docker', 'Nginx'],
      imageUrl: '/xrespect-webpage.png',
      layout: 'image-right',
    },
    {
      title: 'Quasar Store',
      role: 'Support Software Engineer',
      period: 'Jun 2023 – Apr 2024',
      description:
        'Custom backend for a FiveM e-commerce platform. Debugged critical incidents and kept the platform stable under real traffic.',
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
        'Mi propia tienda digital de scripts FiveM, desarrollo web y bots de Discord. La construí, la opero, la mantengo.',
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
        'Mantuve su backend activo al 99.9% de uptime, reduje la latencia de BD en un 30% y automaticé todo su pipeline de deploy.',
      technologies: ['Java', 'MariaDB', 'CI/CD', 'Docker', 'Nginx'],
      imageUrl: '/xrespect-webpage.png',
      layout: 'image-right',
    },
    {
      title: 'Quasar Store',
      role: 'Ingeniero de Software de Soporte',
      period: 'Jun 2023 – Abr 2024',
      description:
        'Backend a medida para una plataforma e-commerce de FiveM. Debuggué incidentes críticos y mantuve la plataforma estable bajo tráfico real.',
      technologies: ['Node.js', 'PostgreSQL', 'REST API'],
      imageUrl: '/quasar-webpage.png',
      layout: 'image-left',
    },
  ],
};
