const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full bg-[radial-gradient(circle_at_25%_25%,white_2px,transparent_2px),radial-gradient(circle_at_75%_75%,white_2px,transparent_2px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="relative z-10 text-center">
          <div className="inline-block bg-white/20 py-2 px-5 rounded-full text-sm font-medium mb-5 backdrop-blur-sm">
            <span>GDG Tacna Presenta</span>
          </div>

          <h1 className="text-3xl md:text-6xl font-black mb-6 flex flex-col items-center gap-2">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              DevFest
            </span>
            <span className="text-4xl text-google-yellow">Tacna 2025</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-95 leading-relaxed">
            ¡Únete a nosotros en el festival de desarrolladores más grande de
            Tacna! Experimenta talleres, conferencias y conéctate con la
            comunidad tecnológica. Aprende de expertos de la industria y lleva
            tus habilidades al siguiente nivel.
          </p>

          <div className="flex justify-center gap-10 mb-10 flex-wrap">
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm opacity-80 uppercase tracking-wider">
                Fecha
              </span>
              <span className="text-lg font-semibold">
                08 de Noviembre de 2025
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm opacity-80 uppercase tracking-wider">
                Ubicación
              </span>
              <span className="text-lg font-semibold">
                Centro Cultural Tacna
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm opacity-80 uppercase tracking-wider">
                Duración
              </span>
              <span className="text-lg font-semibold">
                Evento de día completo
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-5 mb-16 flex-wrap">
            <button
              onClick={() => scrollToSection("speaker")}
              className="bg-google-blue text-white border-none py-4 px-8 rounded-full font-medium text-base cursor-pointer inline-flex items-center gap-2 hover:bg-opacity-90"
            >
              <span>Postula tu charla</span>
              <span className="text-lg">→</span>
            </button>
            <button
              onClick={() => scrollToSection("volunteer")}
              className="bg-gray-200 text-gray-800 py-4 px-8 rounded-full font-medium text-base cursor-pointer inline-flex items-center gap-2 hover:bg-gray-300"
            >
              <span>Únete como voluntario</span>
              <span className="text-lg">♥</span>
            </button>
          </div>

          <div className="flex justify-center gap-16 flex-wrap">
            <div className="flex flex-col items-center gap-1">
              <span className="text-4xl font-bold text-google-yellow">
                200+
              </span>
              <span className="text-sm opacity-90">Asistentes esperados</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-4xl font-bold text-google-yellow">10+</span>
              <span className="text-sm opacity-90">Ponentes expertos</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-4xl font-bold text-google-yellow">5+</span>
              <span className="text-sm opacity-90">Talleres prácticos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
