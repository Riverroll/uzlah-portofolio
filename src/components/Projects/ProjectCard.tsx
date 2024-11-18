import React from 'react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={project.image} alt={project.title} />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <div key={index} className="badge badge-secondary">{tech}</div>
          ))}
        </div>
        <div className="card-actions justify-end mt-4">
          {project.githubUrl && (
            <a href={project.githubUrl} className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
