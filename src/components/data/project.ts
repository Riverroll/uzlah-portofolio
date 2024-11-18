// src/data/projects.ts
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import type { Project } from '../../types/index';

export const projects: Project[] = [
  {
    title: "Corporate Legal Associate",
    description: "A law firm profile platform showcasing over 20 types of legal services, featuring an easy-to-use interface and multilingual content to enhance accessibility.",
    technologies: ["React", "JavaScript", "Tailwind"],
    achievements: [
      "Multilingual integration for a wider audience reach",
      "A structured article module categorized by type of legal service, enhancing information relevance for users",
      "A responsive interface design that supports quick navigation and is user-friendly"
    ],
    image: project1,
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://claindonesia.com/"
  },
  {
    title: "Project 2",
    description: "A brief description of your second project",
    technologies: ["Python", "Django", "PostgreSQL"],
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ],
    image: project2,
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.com"
  }
];