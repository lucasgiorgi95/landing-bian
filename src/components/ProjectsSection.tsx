'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import projectsData from '@/data/projects.json';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tools: string[];
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Delay para la animación
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Mis <span className="text-[#00843d]">Diseños</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora una selección de mis trabajos más destacados, 
            donde la creatividad educativa cobra vida a través del diseño.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>
      
      {/* Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectsSection;