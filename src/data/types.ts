/** Obsidian Pulse — Data Contracts */

export type SupportedLang = 'en' | 'es';
export type BilingualData<T> = Record<SupportedLang, T[]>;

export interface TechItem {
  name: string;
  icon: string;
  description: string;
}

export interface PillarItem {
  title: string;
  icon: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  iconFallback?: string;
  layout: 'image-left' | 'image-right';
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon?: string;
}
