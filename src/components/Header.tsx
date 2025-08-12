import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#f8f3d4] py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#00843d] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="ml-3 text-xl font-bold text-gray-800">Bian Portfolio</span>
        </div>

        {/* Contact Links */}
        <nav className="flex space-x-6">
          <Link 
            href="mailto:bian.profesora@gmail.com" 
            className="text-gray-700 hover:text-[#00843d] transition-colors duration-200"
          >
            Email
          </Link>
          <Link 
            href="https://instagram.com/bian.profesora" 
            target="_blank"
            className="text-gray-700 hover:text-[#00843d] transition-colors duration-200"
          >
            Instagram
          </Link>
          <Link 
            href="https://wa.me/1234567890" 
            target="_blank"
            className="text-gray-700 hover:text-[#00843d] transition-colors duration-200"
          >
            WhatsApp
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;