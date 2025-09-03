const Topics = () => {
  return (
    <section id="topics" className="bg-white py-24">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-google-blue mb-4">Temas</h2>
          <p className="text-lg text-gray-600">
            Conoce los temas que cubriremos en DevFest Tacna 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-primary-purple">
              <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                La comunidad tech en Tacna
              </h3>
              <p className="text-gray-600">
                Bienvenida a DevFest Tacna y anuncios generales de la comunidad
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                Diseño + IA: El futuro del desarrollo con MCP y Figma
              </h3>
              <p className="text-gray-600">
                Una visión práctica del futuro donde el diseño y el código
                hablan el mismo idioma.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                Web Workers: Architectural Patterns for High-Performance Apps
              </h3>
              <p className="text-gray-600">
                Web Workers para optimizar aplicaciones Angular con tareas
                concurrentes.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                Hackea tu Aprendizaje
              </h3>
              <p className="text-gray-600">
                Construye tu Ecosistema de aprendizaje con IA
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                Revolucionando el reciclaje con Google APIs
              </h3>
              <p className="text-gray-600">
                Construyendo soluciones verdes desde el código
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                Flutter y su papel en el desarrollo web
              </h3>
              <p className="text-gray-600">
                Creando experiencias multiplataforma
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-primary-purple">
              <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                Panel de discusión: Crecimiento profesional en tecnología
              </h3>
              <p className="text-gray-600">
                Expertos en tecnología discuten el desarrollo profesional y las
                oportunidades en tecnología
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-primary-purple">
              <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                Keynote de clausura y premios
              </h3>
              <p className="text-gray-600">
                Resumen del evento, anuncios de premios y agradecimientos
              </p>
            </div>

            <div className="p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
              <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                Networking y oportunidades de conexión
              </h3>
              <p className="text-gray-600">
                Múltiples espacios para networking, desde el registro matutino
                hasta la celebración final
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 p-5 bg-blue-100 border border-blue-300 rounded-lg text-blue-800">
          <p>
            <strong>¡Mantente atento!</strong> Pronto revelaremos el horario
            completo con todos los detalles y speakers confirmados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Topics;
