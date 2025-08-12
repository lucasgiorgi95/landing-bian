import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#00843d] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="ml-3 text-xl font-bold">Bian Portfolio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Profesora de Nivel Inicial especializada en crear material didáctico 
              y diseños educativos que inspiran el aprendizaje.
            </p>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-gray-400 hover:text-[#00843d] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-[#00843d] transition-colors">
                  Diseños
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#00843d] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="mailto:bian.profesora@gmail.com" 
                  className="text-gray-400 hover:text-[#00843d] transition-colors"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link 
                  href="https://instagram.com/bian.profesora" 
                  target="_blank"
                  className="text-gray-400 hover:text-[#00843d] transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link 
                  href="https://wa.me/1234567890" 
                  target="_blank"
                  className="text-gray-400 hover:text-[#00843d] transition-colors"
                >
                  WhatsApp
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Bian Portfolio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;