import { useState } from "react";

const Pricing = () => {
  const [selectedTier, setSelectedTier] = useState<"free" | "premium" | null>(
    null
  );

  const handleTierSelect = (tier: "free" | "premium") => {
    setSelectedTier(tier);
    if (tier === "free") {
      alert(
        "Great! Free registration will be available soon. We'll notify you when registration opens."
      );
    } else {
      alert(
        "Premium tickets will be available for purchase soon. We'll announce pricing and registration details."
      );
    }
  };

  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-google-blue mb-4">
            Elige tu experiencia DevFest
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Selecciona el nivel de acceso que mejor se adapte a tus objetivos de
            aprendizaje y presupuesto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
          {/* Free Tier */}
          <div
            className={`bg-white border-2 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
              selectedTier === "free"
                ? "border-google-blue transform -translate-y-1"
                : "border-transparent shadow-md"
            }`}
          >
            <div className="text-center mb-8">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
                Más popular
              </div>
              <h3 className="text-xl text-gray-800 mb-4 font-semibold">
                Acceso a la conferencia
              </h3>
              <div className="flex flex-col items-center gap-1">
                <span className="text-4xl font-bold text-google-blue">
                  GRATIS
                </span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  Día completo
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-gray-800 mb-4 text-lg font-semibold">
                Qué incluye:
              </h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-google-blue font-bold text-base mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">
                    Acceso a todas las sesiones de la conferencia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-google-blue font-bold text-base mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">
                    Acceso a sorteos de la comunidad
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-google-blue font-bold text-base mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">
                    Oportunidades de networking
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-google-blue font-bold text-base mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">
                    Acceso a materiales compartidos
                  </span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleTierSelect("free")}
              className="w-full bg-white text-google-blue border-2 border-google-blue py-4 px-8 rounded-full font-medium text-base cursor-pointer transition-all duration-300 hover:bg-google-blue hover:text-white hover:-translate-y-0.5 hover:shadow-lg mb-4"
            >
              Reserva tu lugar gratis
            </button>
            <p className="text-center text-xs text-gray-500 italic">
              Capacidad limitada • Por orden de llegada
            </p>
          </div>

          {/* Premium Tier */}
          <div
            className={`bg-white border-2 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
              selectedTier === "premium"
                ? "border-google-blue transform -translate-y-1"
                : "border-transparent shadow-md"
            } bg-gradient-to-br from-white to-purple-50`}
          >
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-google-blue to-blue-700 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
                Experiencia Premium
              </div>
              <h3 className="text-xl text-gray-800 mb-4 font-semibold">
                Acceso Premium
              </h3>
              <div className="flex flex-col items-center gap-1">
                <span className="text-4xl font-bold text-google-blue">
                  S/ 49
                </span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  Día completo + Beneficios
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-gray-800 mb-4 text-lg font-semibold">
                Todo lo de la entrada gratuita, más:
              </h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-google-blue font-bold text-base mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">
                    Acceso a talleres exclusivos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-google-blue font-bold text-base mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">
                    Certificado digital de asistencia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-google-blue font-bold text-base mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">
                    Camiseta DevFest
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-google-blue font-bold text-base mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">
                    Bolsa de regalos premium
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-google-blue font-bold text-base mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">
                    Asiento prioritario
                  </span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleTierSelect("premium")}
              className="w-full bg-gradient-to-br from-google-blue to-blue-700 text-white border-none py-4 px-8 rounded-full font-medium text-base cursor-pointer hover:from-blue-700 hover:to-blue-800 mb-4"
            >
              Obtener acceso premium
            </button>
            <p className="text-center text-xs text-gray-500 italic">
              El mejor valor para desarrolladores serios
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            <strong>Todas las ventas de entradas son finales.</strong>{" "}
            Reembolsos disponibles solo en caso de cancelación del evento.
          </p>
          <p className="text-sm text-gray-500">
            ¿Preguntas sobre los precios? Contáctanos en{" "}
            <a
              href="mailto:team@gdgtacna.org"
              className="text-google-blue hover:underline"
            >
              team@gdgtacna.org
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
