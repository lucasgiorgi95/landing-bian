import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tools: string[];
}

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform hover:scale-105 cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        {/* Imagen real del proyecto */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay sutil para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
        
        {/* Badge de categoría sobre la imagen */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#00843d] text-xs px-3 py-1 rounded-full font-semibold shadow-md">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 relative">
        {/* Icono de categoría */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-2xl">
            {project.category === 'Material Didáctico' ? '📚' : 
             project.category === 'Redes Sociales' ? '📱' :
             project.category === 'Eventos Escolares' ? '🎉' :
             project.category === 'Educación Ambiental' ? '🌱' :
             project.category === 'Eventos Especiales' ? '🎄' :
             project.category === 'Celebraciones' ? '🎈' :
             project.category === 'Tarjetas' ? '💌' :
             project.category === 'Historia Argentina' ? '🇦🇷' : '🎨'}
          </span>
        </div>
        
        {/* Title with hover effect */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#00843d] transition-colors duration-200">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool, index) => (
            <span 
              key={index}
              className="bg-[#f8f3d4] text-[#00843d] text-sm px-3 py-1 rounded-full border border-[#00843d]/20 hover:bg-[#00843d] hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              {tool}
            </span>
          ))}
        </div>
        
        {/* Button with enhanced effects */}
        <button 
          onClick={() => onOpenModal(project)}
          className="w-full bg-gradient-to-r from-[#00843d] to-[#006b32] text-white py-3 rounded-lg font-semibold hover:from-[#006b32] hover:to-[#005429] transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group/btn"
        >
          <span className="relative z-10">Ver diseño</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
        </button>
        
        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#f8f3d4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default ProjectCard;