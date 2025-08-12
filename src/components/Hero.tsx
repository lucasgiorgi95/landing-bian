const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f8f3d4] via-[#f0ebc0] to-[#f8f3d4] py-10 px-6 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos decorativos animados */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#00843d]/10 rounded-full animate-pulse"></div>
        <div
          className="absolute top-20 right-16 w-16 h-16 bg-[#00843d]/15 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-[#00843d]/8 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 right-10 w-12 h-12 bg-[#00843d]/12 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-8 w-8 h-8 bg-[#00843d]/20 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-8 w-14 h-14 bg-[#00843d]/10 rounded-full animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>

        {/* Formas geométricas flotantes */}
        <div
          className="absolute top-16 left-1/4 w-6 h-6 bg-[#00843d]/15 rotate-45 animate-bounce"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute bottom-24 right-1/4 w-8 h-8 bg-[#00843d]/12 rotate-12 animate-bounce"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/3 w-4 h-4 bg-[#00843d]/18 rounded-full animate-bounce"
          style={{ animationDelay: "1.8s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Avatar mejorado con elementos decorativos */}
        <div className="mb-12 relative">
          {/* Anillo decorativo exterior */}
          <div className="absolute inset-0 w-40 h-40 mx-auto">
            <div
              className="w-full h-full border-4 border-[#00843d]/20 rounded-full animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
          </div>

          {/* Anillo decorativo medio */}
          <div className="absolute inset-2 w-36 h-36 mx-auto">
            <div
              className="w-full h-full border-2 border-[#00843d]/30 rounded-full animate-spin"
              style={{
                animationDuration: "15s",
                animationDirection: "reverse",
              }}
            ></div>
          </div>

          {/* Avatar principal */}
          <div className="relative w-32 h-32 bg-gradient-to-br from-[#00843d] to-[#006b32] rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500 hover:rotate-12">
            <span className="text-white font-bold text-4xl animate-pulse">
              👩‍🏫
            </span>
          </div>

          {/* Elementos flotantes alrededor del avatar */}
          <div
            className="absolute -top-4 -left-4 text-2xl animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            📚
          </div>
          <div
            className="absolute -top-2 -right-6 text-xl animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            ✏️
          </div>
          <div
            className="absolute -bottom-2 -left-6 text-xl animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            🎨
          </div>
          <div
            className="absolute -bottom-4 -right-4 text-2xl animate-bounce"
            style={{ animationDelay: "2s" }}
          >
            🌟
          </div>
        </div>

        {/* Título con efectos mejorados */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 leading-tight">
            Hola, soy{" "}
            <span className="relative inline-block">
              <span className="text-[#00843d] hover:scale-110 inline-block transition-all duration-300 hover:rotate-2">
                Bian
              </span>
              {/* Subrayado decorativo */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00843d] to-[#006b32] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </span>
          </h1>

          {/* Subtítulo con badge */}
          <div className="flex justify-center mb-6">
            <span className="bg-white/80 backdrop-blur-sm text-[#00843d] px-6 py-2 rounded-full font-semibold shadow-lg border-2 border-[#00843d]/20 hover:scale-105 transition-transform duration-300">
              ✨ Profesora de Nivel Inicial ✨
            </span>
          </div>
        </div>

        {/* Descripción mejorada */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
            Apasionada por crear{" "}
            <span className="text-[#00843d] font-semibold">
              material didáctico atractivo
            </span>{" "}
            y funcional. Transformo ideas educativas en{" "}
            <span className="text-[#00843d] font-semibold">
              diseños visuales
            </span>{" "}
            que inspiran el aprendizaje.
          </p>

          {/* Stats o características */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl mb-1">🎨</div>
              <div className="text-sm font-semibold text-gray-700">
                Diseños Creativos
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl mb-1">📚</div>
              <div className="text-sm font-semibold text-gray-700">
                Material Didáctico
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl mb-1">💡</div>
              <div className="text-sm font-semibold text-gray-700">
                Ideas Innovadoras
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl mb-1">❤️</div>
              <div className="text-sm font-semibold text-gray-700">
                Con Amor
              </div>
            </div>
          </div>
        </div>

        {/* Botones mejorados */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group relative bg-gradient-to-r from-[#00843d] to-[#006b32] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-[#006b32] hover:to-[#005429] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Ver mis diseños</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                🎨
              </span>
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group relative border-3 border-[#00843d] text-[#00843d] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#00843d] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 bg-white/80 backdrop-blur-sm">
            <span className="flex items-center justify-center gap-2">
              <span>Contactar</span>
              <span className="group-hover:scale-110 transition-transform duration-300">
                💬
              </span>
            </span>
          </button>
        </div>

        {/* Indicador de scroll */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#00843d]/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-[#00843d]/50 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-[#00843d]/70 text-sm mt-2 font-medium">
            Explora mis trabajos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
