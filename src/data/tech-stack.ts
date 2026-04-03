import type { TechItem, BilingualData } from './types';

export const techStack: BilingualData<TechItem> = {
  en: [
    { name: 'Java', icon: 'coffee', description: 'Spring Boot & Hibernate.' },
    { name: 'Golang', icon: 'zap', description: 'High-performance services.' },
    { name: 'Node.js', icon: 'terminal', description: 'Backend scripting & APIs.' },
    { name: 'Docker', icon: 'container', description: 'Containerized environments.' },
    { name: 'Kubernetes', icon: 'network', description: 'GKE Orchestration at scale.' },
    { name: 'Google Cloud', icon: 'cloud', description: 'Cloud infrastructure.' },
    { name: 'SQL DBs', icon: 'database', description: 'Relational design.' },
    { name: 'Redis', icon: 'cpu', description: 'Caching & performance.' },
    { name: 'CI/CD', icon: 'infinity', description: 'GitHub Actions pipelines.' },
    { name: 'Terraform', icon: 'git-branch', description: 'Infrastructure as code.' },
  ],
  es: [
    { name: 'Java', icon: 'coffee', description: 'Spring Boot & Hibernate.' },
    { name: 'Golang', icon: 'zap', description: 'Servicios de alto rendimiento.' },
    { name: 'Node.js', icon: 'terminal', description: 'Backend scripting & APIs.' },
    { name: 'Docker', icon: 'container', description: 'Entornos containerizados.' },
    { name: 'Kubernetes', icon: 'network', description: 'Orquestación GKE a escala.' },
    { name: 'Google Cloud', icon: 'cloud', description: 'Infraestructura en la nube.' },
    { name: 'SQL DBs', icon: 'database', description: 'Diseño relacional.' },
    { name: 'Redis', icon: 'cpu', description: 'Caché y rendimiento.' },
    { name: 'CI/CD', icon: 'infinity', description: 'Pipelines con GitHub Actions.' },
    { name: 'Terraform', icon: 'git-branch', description: 'Infraestructura como código.' },
  ],
};
