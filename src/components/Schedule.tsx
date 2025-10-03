const Schedule = () => {
  return (
    <section id="schedule" className="bg-white py-24">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-google-blue mb-4">Agenda</h2>
          <p className="text-lg text-gray-600">
            Un día completo de aprendizaje, networking e innovación
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
                  9:00 AM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
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
                  9:30 AM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  15 min
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
                  📍 Auditorio "Luis Mellado Manzano" UPT
                </div>
              </div>
            </div>

            {/* Talk items */}
            <div className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  9:45 AM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Hackea tu Aprendizaje: Construye tu Ecosistema de Aprendizaje
                  con IA
                </h3>
                <p className="text-gray-600 mb-3">
                  Construye tu Ecosistema de aprendizaje con IA
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">👨‍💻</span>
                  <span className="text-gray-700">
                    Frank García - Coordinador de Innovación Educativa - USIL
                  </span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio "Luis Mellado Manzano" UPT
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
                  Diseño + IA: El futuro del desarrollo con MCP y Figma
                </h3>
                <p className="text-gray-600 mb-3">
                  Una visión práctica del futuro donde el diseño y el código
                  hablan el mismo idioma.
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">👨‍💻</span>
                  <span className="text-gray-700">
                    Jimy Dolores - Google Developer Expert Angular - Fundador
                    Angular Perú
                  </span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio "Luis Mellado Manzano" UPT
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-green-50 rounded-xl border-l-4 border-primary-purple">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  10:45 AM
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
                  11:00 AM
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
                  📍 Auditorio "Luis Mellado Manzano" UPT
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  11:30 AM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Flutter y su papel en el desarrollo web: creando experiencias
                  multiplataforma
                </h3>
                <p className="text-gray-600 mb-3">
                  Creando experiencias multiplataforma con un solo código base.
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">🤖</span>
                  <span className="text-gray-700">
                    Angela Camacho - Lead DSC UTP
                  </span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio "Luis Mellado Manzano" UPT
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
                  12:00 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  120 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Pausa para el almuerzo
                </h3>
                <p className="text-gray-600 mb-3">Almuerzo</p>
                <div className="space-y-1 mb-2">
                  <div className="text-sm text-gray-600">
                    🍕 Premium: Almuerzo y refrigerios incluido
                  </div>
                  <div className="text-sm text-gray-600">
                    🥤 Gratuito: Refrigerios incluidos
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
                  2:00 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Revolucionando el reciclaje con Google APIs
                </h3>
                <p className="text-gray-600 mb-3">
                  Construyendo soluciones verdes desde el código con Google
                  APIs.
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">♻️</span>
                  <span className="text-gray-700">
                    Franklin Bustamante - Fundador codigo369
                  </span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio "Luis Mellado Manzano" UPT
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  2:30 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Construyendo tu primer agente de IA: más allá de la llamada a
                  una API de LLM
                </h3>
                <p className="text-gray-600 mb-3">
                  ¿Qué son y cómo funcionan los agentes de IA?
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">📱</span>
                  <span className="text-gray-700">
                    Lesly Zerna - Google Developer Expert Machine Learning
                  </span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio "Luis Mellado Manzano" UPT
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-green-50 rounded-xl border-l-4 border-primary-purple">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  3:00 PM
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

            <div className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  3:15 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Mi robot, tu robot , nuestro robot : Hardware en los tiempos
                  de IA
                </h3>
                <p className="text-gray-600 mb-3">
                  ¿Sabías que tambien puedes controlar robots con IA?
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">📱</span>
                  <span className="text-gray-700">
                    Hansy Schmitt - Fullstack and Mobile Engineer
                  </span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio "Luis Mellado Manzano" UPT
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  3:45 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  Engineering a Sourcing Agent
                </h3>
                <p className="text-gray-600 mb-3">
                  Cómo los agentes de sourcing automatizan el reclutamiento
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">📱</span>
                  <span className="text-gray-700">
                    Fermín Blanco - Software Engineer - GDG Lead Cúcuta
                  </span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio "Luis Mellado Manzano" UPT
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  4:15 PM
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  30 min
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 mb-2 text-lg font-semibold">
                  De la teoría al despliegue: La IA como agente disruptivo en
                  entornos académicos y empresariales
                </h3>
                <p className="text-gray-600 mb-3">
                  La IA ha llegado para quedarse y para cambiar la forma en que
                  aprendemos
                </p>
                <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-base">📱</span>
                  <span className="text-gray-700">
                    Juan Carlos Eduardo Romaina Acevedo - Software Engineer
                  </span>
                </div>
                <div className="text-gray-600 text-sm italic">
                  📍 Auditorio "Luis Mellado Manzano" UPT
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-primary-purple">
              <div className="min-w-[100px] text-center">
                <span className="text-xl font-semibold text-google-blue block">
                  4:45 PM
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
                  📍 Auditorio "Luis Mellado Manzano" UPT
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 p-5 bg-blue-100 border border-blue-300 rounded-lg text-blue-800">
          <p>
            <strong>Nota:</strong> El horario está sujeto a cambios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
