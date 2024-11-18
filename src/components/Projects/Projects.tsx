import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/project';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-base-200 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;