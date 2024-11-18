// src/types/index.ts
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  achievements?: string[]; // Using achievements instead of keyAchievements
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}
