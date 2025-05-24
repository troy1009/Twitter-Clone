import React from 'react';
import { Id } from '../../convex/_generated/dataModel';

interface Project {
  _id: Id<"projects"> | string; // string for example data
  title: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp">
      {project.imageUrl && (
        <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3 text-primary dark:text-blue-400">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-1">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-primary/10 dark:bg-blue-500/20 text-primary dark:text-blue-300 px-2 py-1 text-xs font-medium rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-start space-x-4 mt-auto">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-blue-400 hover:text-primary-dark dark:hover:text-blue-300 font-medium transition-colors duration-300"
            >
              View Project &rarr;
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors duration-300"
            >
              GitHub &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC<{ projects: Project[] | null | undefined }> = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">Loading projects or no projects to display yet.</p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 animate-pulse">
                <div className="h-56 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-1"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                  <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                </div>
                 <div className="flex space-x-4">
                    <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white animate-fadeIn">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div key={project._id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
