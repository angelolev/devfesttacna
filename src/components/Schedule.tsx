const Schedule = () => {
  return (
    <section id="schedule" className="bg-white py-24">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-google-blue mb-4">Agenda</h2>
          <p className="text-lg text-gray-600">
            Un día completo de aprendizaje, networking e innovación • 22 de
            noviembre de 2025
          </p>
        </div>

        {/* <div className="flex justify-center gap-3 mb-10">
          <button className="bg-google-blue text-white py-3 px-6 rounded-full font-medium transition-all duration-300">
            Charlas
          </button>
          <button className="bg-gray-100 text-gray-700 py-3 px-6 rounded-full font-medium transition-all duration-300 hover:bg-gray-200">
            Talleres
          </button>
        </div> */}

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  8:00 AM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  60 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Registro y bienvenida
                </h3>
                <p className="text-gray-600 mb-2">
                  Check-in, recojo de credenciales y networking
                </p>
                <div className="text-gray-600 text-sm italic">
                  📍 Vestíbulo principal
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-primary-purple">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  9:00 AM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Keynote de apertura
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>La comunidad tech en Tacna</strong>
                </p>
                <p className="text-gray-600 mb-3">
                  Bienvenida a DevFest Tacna y anuncios generales de la
                  comunidad
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">🎤</span>
                  <span className="text-gray-700">Equipo GDG Tacna</span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio principal
                </div>
              </div>
            </div>

            {/* Talk items */}
            <div className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  9:30 AM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Diseño + IA: El futuro del desarrollo con MCP y Figma
                </h3>
                <p className="text-gray-600 mb-3">
                  Una visión práctica del futuro donde el diseño y el código
                  hablan el mismo idioma.
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">👨‍💻</span>
                  <span className="text-gray-700">
                    Jimy Dolores - Fundador Angular Perú
                  </span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio principal
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-green-50 rounded-xl border-l-4 border-primary-purple">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  10:00 AM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  15 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Pausa para el café
                </h3>
                <p className="text-gray-600 mb-2">Networking y refrigerio</p>
                <div className="text-gray-600 text-sm italic">
                  📍 Vestíbulo principal
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  10:15 AM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Web Workers: Architectural Patterns for High-Performance Apps
                </h3>
                <p className="text-gray-600 mb-3">
                  Web Workers para optimizar aplicaciones Angular con tareas
                  concurrentes.
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">☁️</span>
                  <span className="text-gray-700">
                    Damian Sire - Google Developer Expert Angular
                  </span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio principal
                </div>
              </div>
            </div>

            {/* <div className="flex gap-6 p-6 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl border-l-4 border-orange-400">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  11:00 AM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  90 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Sesiones de talleres prácticos
                </h3>
                <div className="space-y-2 mb-3">
                  <div className="flex flex-col md:flex-row items-center gap-3 text-sm">
                    <strong className="text-gray-800">Pista A:</strong>
                    <span className="text-gray-600">
                      Taller de desarrollo móvil con Flutter
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      Sala 101
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                      Solo Premium
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-3 text-sm">
                    <strong className="text-gray-800">Pista B:</strong>
                    <span className="text-gray-600">
                      Taller de desarrollo con Firebase
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      Sala 102
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                      Solo Premium
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm italic">
                  Los asistentes con entrada gratuita pueden disfrutar de más
                  tiempo para networking y exhibiciones
                </p>
              </div>
            </div> */}

            <div className="flex gap-6 p-6 bg-green-50 rounded-xl border-l-4 border-primary-purple">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  12:30 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  60 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Pausa para el almuerzo
                </h3>
                <p className="text-gray-600 mb-3">
                  Almuerzo de networking y exhibiciones de patrocinadores
                </p>
                <div className="space-y-1 mb-2">
                  <div className="text-sm text-gray-600">
                    🍕 Premium: Almuerzo incluido
                  </div>
                  <div className="text-sm text-gray-600">
                    🥤 Gratuito: Refrigerios ligeros disponibles
                  </div>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Vestíbulo principal
                </div>
              </div>
            </div>

            {/* Continue with remaining schedule items... */}
            <div className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  1:30 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  IA y Machine Learning en la práctica
                </h3>
                <p className="text-gray-600 mb-3">
                  Implementación de soluciones de ML con TensorFlow y Google AI
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">🤖</span>
                  <span className="text-gray-700">
                    Experto en ingeniería de ML
                  </span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio principal
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  2:15 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Mejores prácticas de DevOps
                </h3>
                <p className="text-gray-600 mb-3">
                  CI/CD, contenedorización y estrategias de despliegue
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">⚙️</span>
                  <span className="text-gray-700">Especialista en DevOps</span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio principal
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-green-50 rounded-xl border-l-4 border-primary-purple">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  2:45 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  15 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Pausa de la tarde
                </h3>
                <p className="text-gray-600 mb-2">Café y networking</p>
                <div className="text-gray-600 text-sm italic">
                  📍 Vestíbulo principal
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-primary-purple">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  3:00 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  45 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Panel de discusión: Crecimiento profesional en tecnología
                </h3>
                <p className="text-gray-600 mb-3">
                  Líderes de la industria discuten el desarrollo profesional y
                  las oportunidades en tecnología
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">👥</span>
                  <span className="text-gray-700">
                    Panel de expertos de la industria
                  </span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio principal
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-primary-purple">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  4:00 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Keynote de clausura y premios
                </h3>
                <p className="text-gray-600 mb-2">
                  Resumen del evento, anuncios de premios y agradecimientos
                </p>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio principal
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  4:30 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  90 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Networking y fiesta de clausura
                </h3>
                <p className="text-gray-600 mb-2">
                  Networking final, fotos y celebración
                </p>
                <div className="text-gray-600 text-sm italic">
                  📍 Sala de exposiciones
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 p-5 bg-yellow-100 border border-yellow-300 rounded-lg text-yellow-800">
          <p>
            <strong>Nota:</strong> El horario está sujeto a cambios. Los
            asistentes a los talleres premium recibirán por correo electrónico
            los materiales detallados y los requisitos previos antes del evento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
