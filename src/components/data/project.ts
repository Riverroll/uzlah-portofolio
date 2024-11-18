// src/data/projects.ts
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';
import project4 from '../../assets/images/project4.png';
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
    title: "Finance Management System",
    description: "The IDSurvey Finance Dashboard is a comprehensive tool designed for financial analysis and reporting. It provides users with real-time insights into key financial metrics, enabling them to make informed decisions",
    technologies: ["Python", "MUI-Kit", "PostgreSQL", "Open Office", "CSS", "TypeScript"],
    achievements: [
      "Visual Data Representation: Graphs and charts for easy interpretation of financial trends.",
      "Real-Time Updates: Instant access to the latest financial data.",
      "Customizable Reports: Ability to generate reports based on specific criteria or time frames."
    ],
    image: project2,
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://dev-fin.idsurvey.id/"
  },
  {
    title: "Marketing Management System (PT Sehat Murni Sejahtera)",
    description: "A platform for the marketing team to manage attendance, record partner visits, and track their work activities.",
    technologies: ["Express", "JavaScript", "MySQL", "React", "Firebase"],
    achievements: [
      "An automatic attendance system based on location using the OpenCage API to ensure accurate attendance. ",
      "Field visit tracking to monitor the performance and effectiveness of the marketing team. ",
      "A marketing performance dashboard for easy performance reporting."
    ],
    image: project3,
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://dev-fin.idsurvey.id/"
  },
  {
    title: "Gemining AI Chat",
    description: "Gemini AI is a family of large language models developed by Google AI. It's designed to be multimodal, meaning it can process and generate various forms of information, including text, code, audio, and images.",
    technologies: ["JavaScript", "MongoDB", "React", "Firebase"],
    achievements: [
      "An automatic attendance system based on location using the OpenCage API to ensure accurate attendance. ",
      "Field visit tracking to monitor the performance and effectiveness of the marketing team. ",
      "A marketing performance dashboard for easy performance reporting."
    ],
    image: project4,
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://gemining.vercel.app/"
  }
];