const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-google-yellow mb-6">
            Sponsors
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Si estás interesado en estar presente a lo largo de la conferencia,{" "}
            <span className="block sm:inline">
              contáctanos en{" "}
              <a
                href="mailto:team@gdgtacna.com"
                className="text-google-blue hover:underline font-medium"
              >
                team@gdgtacna.com
              </a>{" "}
              para discutir oportunidades de patrocinio.
            </span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16 mx-auto max-w-4xl">
          <div className="flex items-center justify-center h-20 w-40 md:w-52">
            <img
              src="/googlelogo.svg"
              alt="Google"
              className="max-h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="flex items-center justify-center h-20 w-40 md:w-52">
            <img
              src="/jetbrains.svg"
              alt="Jetbrains"
              className="max-h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="flex items-center justify-center h-20 w-40 md:w-52">
            <img
              src="/epis.png"
              alt="Escuela Profesional de Ingeniería de Sistemas - Universidad Privada de Tacna"
              className="max-h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="flex items-center justify-center h-20 w-40 md:w-52">
            <img
              src="/googledevs.svg"
              alt="Google for Developers"
              className="max-h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center justify-center h-20 w-40 md:w-52">
            <img
              src="/upt.jpg"
              alt="Universidad Privada de Tacna"
              className="max-h-48 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
