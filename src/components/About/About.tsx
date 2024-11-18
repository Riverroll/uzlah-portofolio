import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Users, Clock } from 'lucide-react';
import { projects } from '../data/project';
import ProjectCard from '../Projects/ProjectCard';

const useCountAnimation = (end: number, duration: number = 2000, start: number = 0): [number, React.RefObject<HTMLDivElement>] => {
  const [count, setCount] = useState(start);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, start, isIntersecting]);

  return [count, countRef];
};

interface StatProps {
  icon: React.ElementType;
  title: string;
  value: number;
  description: string;
}

const AnimatedStat: React.FC<StatProps> = ({ 
  icon: Icon, 
  title, 
  value, 
  description 
}) => {
  const [count, countRef] = useCountAnimation(value);

  return (
    <div className="stat">
      <div className="stat-figure text-primary">
        <Icon className="w-8 h-8" />
      </div>
      <div className="stat-title">{title}</div>
      <div className="stat-value" ref={countRef}>{count}+</div>
      <div className="stat-desc">{description}</div>
    </div>
  );
};

export const About: React.FC = () => {
  const stats = [
    {
      icon: Briefcase,
      title: "Projects",
      value: 50,
      description: "Completed Projects"
    },
    {
      icon: Users,
      title: "Clients",
      value: 22,
      description: "Satisfied Clients"
    },
    {
      icon: Clock,
      title: "Experience",
      value: 3,
      description: "Years of Experience"
    }
  ];

  // Get just the first project
  const featuredProject = projects[0];

  return (
    <section id="about" className="min-h-screen py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        
        <div className="max-w-6xl mx-auto space-y-12">
          <p className="text-lg text-center">
            I'm a passionate developer with {stats[2].value}+ years of experience in web development.
            I specialize in building responsive and user-friendly applications using
            modern technologies.
          </p>

          <div className="stats shadow w-full bg-base-200">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
                description={stat.description}
              />
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-8">Featured Project</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">{featuredProject.title}</h4>
                <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                  {Array.isArray(featuredProject.achievements) 
                    ? featuredProject.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))
                    : featuredProject.achievements.split('. ').map((achievement, index) => (
                        <li key={index}>{achievement.trim()}</li>
                      ))
                  }
                </ul>
                <div className="flex gap-4">
                  {featuredProject.liveUrl && (
                    <a 
                      href={featuredProject.liveUrl}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  {featuredProject.githubUrl && (
                    <a 
                      href={featuredProject.githubUrl}
                      className="btn btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
              <div className="w-full">
                <ProjectCard project={featuredProject} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;