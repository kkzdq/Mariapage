export type NavSection = 'home' | 'warp-zone' | 'about';

export interface LinkItem {
  id: number;
  title: string;
  url: string;
  color: 'red' | 'green' | 'blue' | 'yellow';
  icon?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 10
}