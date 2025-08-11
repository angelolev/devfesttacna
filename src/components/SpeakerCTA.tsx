const SpeakerCTA: React.FC = () => {
  const SPEAKER_APPLICATION_URL = "https://forms.gle/YOUR_GOOGLE_FORM_ID"; // Replace with actual form URL

  const handleRedirect = () => {
    window.open(SPEAKER_APPLICATION_URL, "_blank");
  };

  return (
    <section id="speaker" className="bg-gradient-to-br from-gray-50 to-white 4">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl text-google-blue mb-5 font-bold">
            Conviértete en ponente
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            ¡Comparte tu experiencia con la comunidad de DevFest Tacna! Buscamos
            a desarrolladores, diseñadores y profesionales de la tecnología
            apasionados por inspirar y educar a nuestros asistentes.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="text-left">
              <h3 className="text-gray-800 mb-6 text-xl font-semibold">
                Beneficios para ponentes
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <span className="text-2xl mt-1">🎤</span>
                  <div>
                    <strong className="text-gray-800 block mb-1">
                      Plataforma para compartir
                    </strong>
                    <p className="text-sm text-gray-600">
                      Presenta tus ideas a más de 200 entusiastas de la
                      tecnología
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <span className="text-2xl mt-1">🌟</span>
                  <div>
                    <strong className="text-gray-800 block mb-1">
                      Reconocimiento profesional
                    </strong>
                    <p className="text-sm text-gray-600">
                      Construye tu reputación en la comunidad tecnológica
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <span className="text-2xl mt-1">🎁</span>
                  <div>
                    <strong className="text-gray-800 block mb-1">
                      Beneficios exclusivos
                    </strong>
                    <p className="text-sm text-gray-600">
                      Cena de ponentes, swag exclusivo y certificados
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <span className="text-2xl mt-1">🤝</span>
                  <div>
                    <strong className="text-gray-800 block mb-1">
                      Networking
                    </strong>
                    <p className="text-sm text-gray-600">
                      Conéctate con otros ponentes y líderes de la industria
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="text-gray-800 mb-6 text-xl font-semibold">
                Estamos buscando
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-google-blue text-white py-2 px-4 rounded-full text-sm font-medium">
                  Desarrollo web
                </span>
                <span className="bg-google-blue text-white py-2 px-4 rounded-full text-sm font-medium">
                  Desarrollo móvil
                </span>
                <span className="bg-google-blue text-white py-2 px-4 rounded-full text-sm font-medium">
                  Tecnologías en la nube
                </span>
                <span className="bg-google-blue text-white py-2 px-4 rounded-full text-sm font-medium">
                  IA y Machine Learning
                </span>
                <span className="bg-google-blue text-white py-2 px-4 rounded-full text-sm font-medium">
                  DevOps y despliegue
                </span>
                <span className="bg-google-blue text-white py-2 px-4 rounded-full text-sm font-medium">
                  Diseño UI/UX
                </span>
                <span className="bg-google-blue text-white py-2 px-4 rounded-full text-sm font-medium">
                  Ciencia de datos
                </span>
                <span className="bg-google-blue text-white py-2 px-4 rounded-full text-sm font-medium">
                  Código abierto
                </span>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <h4 className="text-google-blue text-xl font-semibold mb-4">
                  ¿Listo para compartir tus conocimientos?
                </h4>
                <p className="text-gray-600 mb-6">
                  Completa nuestro formulario de solicitud de ponentes y
                  cuéntanos sobre tu charla propuesta. Revisaremos tu solicitud
                  y te responderemos en una semana.
                </p>
                <button
                  onClick={handleRedirect}
                  className="bg-google-blue text-white border-none py-4 px-8 rounded-full font-medium text-base cursor-pointer inline-flex items-center gap-2 hover:bg-opacity-90"
                >
                  <span>Enviar solicitud de ponente</span>
                  <span className="text-lg">🚀</span>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Se abre en una nueva pestaña • Tarda unos 5 minutos en
                  completarse
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerCTA;
