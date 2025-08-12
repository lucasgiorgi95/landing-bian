'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tools: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'Material Didáctico': return '📚';
      case 'Redes Sociales': return '📱';
      case 'Eventos Escolares': return '🎉';
      case 'Educación Ambiental': return '🌱';
      case 'Eventos Especiales': return '🎄';
      case 'Celebraciones': return '🎈';
      case 'Tarjetas': return '💌';
      case 'Historia Argentina': return '🇦🇷';
      default: return '🎨';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop mejorado */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#00843d]/20 to-black/60 backdrop-blur-md animate-fadeIn"
        onClick={onClose}
      />
      
      {/* Modal rediseñado */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden animate-modalAppear border-4 border-[#f8f3d4]">
        
        {/* Header espectacular */}
        <div className="relative bg-gradient-to-r from-[#f8f3d4] via-[#f0ebc0] to-[#f8f3d4] p-8 overflow-hidden">
          {/* Patrón decorativo mejorado */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-6 left-6 w-12 h-12 bg-[#00843d] rounded-full animate-pulse"></div>
            <div className="absolute top-4 right-20 w-8 h-8 bg-[#00843d] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-6 left-16 w-10 h-10 bg-[#00843d] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-4 right-8 w-6 h-6 bg-[#00843d] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-[#00843d] rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
          </div>
          
          {/* Botón cerrar mejorado */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-90 transition-all duration-300 z-20 border-2 border-[#00843d]/20"
          >
            <span className="text-[#00843d] font-bold text-xl">×</span>
          </button>
          
          {/* Contenido del header */}
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              {/* Icono principal mejorado */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-[#00843d] to-[#006b32] rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="text-4xl">{getProjectIcon(project.category)}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f8f3d4] rounded-full border-2 border-[#00843d] flex items-center justify-center">
                  <span className="text-[#00843d] text-xs font-bold">✨</span>
                </div>
              </div>
              
              {/* Información del proyecto */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-[#00843d] to-[#006b32] text-white text-sm px-4 py-2 rounded-full shadow-lg font-semibold">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 leading-tight">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-lg">Diseño educativo profesional</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenido principal mejorado */}
        <div className="p-8 overflow-y-auto max-h-[60vh] bg-gradient-to-b from-white to-[#f8f3d4]/10">
          
          {/* Vista previa del diseño real */}
          <div className="mb-8">
            <div className="relative w-full h-96 bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-[#f8f3d4]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain bg-gradient-to-br from-[#f8f3d4]/20 to-[#f0ebc0]/20"
              />
              
              {/* Badge flotante con información */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-[#00843d]/20">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getProjectIcon(project.category)}</span>
                  <div>
                    <p className="text-xs font-semibold text-[#00843d]">Diseño Original</p>
                    <p className="text-xs text-gray-600">Creado en Canva</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grid de información */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Descripción mejorada */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f8f3d4]">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#00843d] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">📝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Descripción</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
            
            {/* Herramientas mejoradas */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f8f3d4]">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#00843d] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🛠️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Herramientas</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-gradient-to-r from-[#f8f3d4] to-[#f0ebc0] text-[#00843d] px-4 py-2 rounded-full border-2 border-[#00843d]/20 font-semibold hover:from-[#00843d] hover:to-[#006b32] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Características especiales */}
          <div className="mt-8 bg-gradient-to-r from-[#f8f3d4]/50 to-[#f0ebc0]/50 rounded-2xl p-6 border-2 border-[#00843d]/10">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-[#00843d] rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Características Especiales</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#00843d] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Diseño adaptado para nivel inicial</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#00843d] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Colores atractivos y educativos</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#00843d] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Fácil de imprimir y usar</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#00843d] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Creado profesionalmente</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer espectacular */}
        <div className="bg-gradient-to-r from-[#f8f3d4] to-[#f0ebc0] p-6 border-t-2 border-[#00843d]/10">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="text-center sm:text-left">
              <p className="text-gray-700 font-semibold">¿Te gusta este diseño?</p>
              <p className="text-gray-600 text-sm">Contacta para más información o diseños personalizados</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-white border-2 border-[#00843d] text-[#00843d] rounded-xl font-semibold hover:bg-[#00843d] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Cerrar
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-[#00843d] to-[#006b32] text-white rounded-xl font-semibold hover:from-[#006b32] hover:to-[#005429] transition-all duration-300 transform hover:scale-105 shadow-lg">
                💬 Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;