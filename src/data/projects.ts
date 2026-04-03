import type { ProjectItem, BilingualData } from './types';

export const recentBuilds: BilingualData<ProjectItem> = {
  en: [
    {
      title: 'XRespect',
      role: 'Backend & DevOps Engineer',
      period: 'Feb 2024 – Dic 2025',
      description:
        'Maintained high-concurrency backend services ensuring 99.9% uptime. Reduced DB response latency by 30% and implemented full CI/CD automation pipelines.',
      technologies: ['Java', 'MariaDB', 'CI/CD', 'Docker', 'Nginx'],
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB6aragrleHPnv4Pi98I0-yly8AkCPAfy5_o2c4Hmy3ra82Pf1vOV6mJgwCR25QsN9AH_bFMZh_E7tAPWSQEK5w0jDo_LnlJ5pPZTv5VHjiD3M90SoKb5LE7TwSw0CQahQL_l1GLeUn124mY1Ed4huYCuRpBi9bYp6yuXRkxfEgLuDsztGUxrqRA5fuWjbCMlFE_hmiHUBs0U4s7Vrpmfs4H6JVJ7vXXqGlfb2Ggr0aLF6kIpC_dH8FsxIz3cKC2_ZRDLpy98Ip4Orf',
      layout: 'image-left',
    },
    {
      title: 'Quasar Store',
      role: 'Support Software Engineer',
      period: 'Jun 2023 – Abr 2024',
      description:
        'Custom backend solutions for e-commerce, resolving critical level 2/3 incidents through code debugging and log analysis.',
      technologies: ['Node.js', 'PostgreSQL', 'REST API'],
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBJhrKY6WkXExwPej96AllBstlEjDukNAHY49Gkb8sREdq14azs7GWupRcoxaBUfuQG0pb3k7G8VK0vm_Xtgrq_alLC41m7Ymv6JNymsTM4_XBZAJBmAEDfNp8nknfbba_qD91uPY7Xnqn75bpfRk2FD0Wr6GxbEJIiPYtxyrAu4qtpUKmJGd5my6yaxRf0hB6L5Hvajq6b1DRvuV9zK3PPQ0UpliRZoBmOw2-v0CrVsNPXHmdoKbz1G1ySvydS64w9Ca3V3PyVElUW',
      layout: 'image-right',
    },
    {
      title: 'Arcadia',
      role: 'DevOps Engineer',
      period: 'Nov 2023 – Feb 2024',
      description:
        'Optimized Linux server resource consumption and configured secure production environments following infrastructure best practices.',
      technologies: ['Docker', 'Linux', 'DevOps'],
      iconFallback: 'terminal',
      layout: 'image-left',
    },
  ],
  es: [
    {
      title: 'XRespect',
      role: 'Ingeniero Backend & DevOps',
      period: 'Feb 2024 – Dic 2025',
      description:
        'Mantenimiento de servicios backend de alta concurrencia asegurando 99.9% de uptime. Reducción del 30% en latencia de respuesta de BD e implementación de pipelines de automatización CI/CD.',
      technologies: ['Java', 'MariaDB', 'CI/CD', 'Docker', 'Nginx'],
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB6aragrleHPnv4Pi98I0-yly8AkCPAfy5_o2c4Hmy3ra82Pf1vOV6mJgwCR25QsN9AH_bFMZh_E7tAPWSQEK5w0jDo_LnlJ5pPZTv5VHjiD3M90SoKb5LE7TwSw0CQahQL_l1GLeUn124mY1Ed4huYCuRpBi9bYp6yuXRkxfEgLuDsztGUxrqRA5fuWjbCMlFE_hmiHUBs0U4s7Vrpmfs4H6JVJ7vXXqGlfb2Ggr0aLF6kIpC_dH8FsxIz3cKC2_ZRDLpy98Ip4Orf',
      layout: 'image-left',
    },
    {
      title: 'Quasar Store',
      role: 'Ingeniero de Software de Soporte',
      period: 'Jun 2023 – Abr 2024',
      description:
        'Soluciones backend personalizadas para e-commerce, resolviendo incidentes críticos de nivel 2/3 mediante depuración de código y análisis de logs.',
      technologies: ['Node.js', 'PostgreSQL', 'REST API'],
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBJhrKY6WkXExwPej96AllBstlEjDukNAHY49Gkb8sREdq14azs7GWupRcoxaBUfuQG0pb3k7G8VK0vm_Xtgrq_alLC41m7Ymv6JNymsTM4_XBZAJBmAEDfNp8nknfbba_qD91uPY7Xnqn75bpfRk2FD0Wr6GxbEJIiPYtxyrAu4qtpUKmJGd5my6yaxRf0hB6L5Hvajq6b1DRvuV9zK3PPQ0UpliRZoBmOw2-v0CrVsNPXHmdoKbz1G1ySvydS64w9Ca3V3PyVElUW',
      layout: 'image-right',
    },
    {
      title: 'Arcadia',
      role: 'Ingeniero DevOps',
      period: 'Nov 2023 – Feb 2024',
      description:
        'Optimización del consumo de recursos en servidores Linux y configuración de entornos de producción seguros siguiendo mejores prácticas de infraestructura.',
      technologies: ['Docker', 'Linux', 'DevOps'],
      iconFallback: 'terminal',
      layout: 'image-left',
    },
  ],
};
