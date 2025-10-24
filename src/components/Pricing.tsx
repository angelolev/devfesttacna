/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTicketAvailability } from "../hooks/useTicketAvailability";

const Pricing = () => {
  const [selectedTier, setSelectedTier] = useState<
    "free" | "certificate" | "premium" | null
  >(null);

  const { ticketSettings, loading, error, isLowAvailability } =
    useTicketAvailability();

  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-google-blue mb-4">
            Elige tu experiencia DevFest
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            El evento es GRATUITO, pero puedes vivirlo de diferentes maneras
          </p>
        </div>

        {/* Important Information Banner */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-12 max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <span className="text-3xl">ℹ️</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Información importante
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Para quienes deseen obtener beneficios adicionales como{" "}
                <strong>certificado digital de asistencia</strong> y{" "}
                <strong>merchandising exclusivo</strong>, existe la opción de
                adquirir experiencias <strong>Pro (S/ 19)</strong> o{" "}
                <strong>Platinum (S/ 39)</strong>. Esta compra es{" "}
                <strong>completamente opcional</strong> y no es requisito para
                participar en el evento.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Free Tier */}
          <div
            className={`bg-white border-2 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full ${
              selectedTier === "free"
                ? "border-google-blue transform -translate-y-1"
                : "border-transparent shadow-md"
            }`}
          >
            <div className="text-center mb-8">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
                General
              </div>
              <h3 className="text-xl text-gray-800 mb-4 font-semibold">
                Acceso a la conferencia
              </h3>
              <div className="flex flex-col items-center gap-1">
                <span className="text-4xl font-bold text-google-blue">
                  GRATIS
                </span>
              </div>
            </div>

            <div className="flex-1">
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

            <Link
              to="https://luma.com/1zie0cxm"
              target="_blank"
              className="w-full inline-block text-center bg-white text-google-blue border-2 border-google-blue py-4 px-8 rounded-full font-medium text-base cursor-pointer transition-all duration-300 hover:bg-google-blue hover:text-white hover:-translate-y-0.5 hover:shadow-lg mb-4"
            >
              Reserva tu lugar gratis
            </Link>
            <p className="text-center text-xs text-gray-500 italic">
              Capacidad limitada
            </p>
          </div>

          {/* Certificate Tier */}
          <div
            className={`bg-white border-2 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full ${
              selectedTier === "certificate"
                ? "border-google-blue transform -translate-y-1"
                : "border-transparent shadow-md"
            }`}
          >
            <div className="text-center mb-8">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
                Más popular
              </div>
              <h3 className="text-xl text-gray-800 mb-4 font-semibold">Pro</h3>
              <div className="flex flex-col items-center gap-1">
                {/* <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-400 line-through">
                    S/ 29
                  </span>
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-semibold">
                    Early Bird
                  </span>
                </div> */}
                <span className="text-4xl font-bold text-google-blue">
                  S/ 19
                </span>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-gray-800 mb-4 text-lg font-semibold">
                Todo lo de la experiencia gratuita, más:
              </h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-google-blue font-bold text-base mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed">
                    Certificado digital de asistencia
                  </span>
                </li>
              </ul>
            </div>

            <Link
              to="https://wa.link/c782lg"
              target="_blank"
              className="w-full inline-block text-center bg-google-blue text-white border-none py-4 px-8 rounded-full font-medium text-base cursor-pointer transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg mb-4"
            >
              Obtener acceso Pro
            </Link>

            <p className="text-center text-xs text-gray-500 italic">
              Ideal si quieres validar tu asistencia
            </p>
          </div>

          {/* Premium Tier */}
          <div
            className={`bg-white border-2 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full ${
              selectedTier === "premium"
                ? "border-google-blue transform -translate-y-1"
                : "border-transparent shadow-md"
            } bg-gradient-to-br from-white to-purple-50`}
          >
            <div className="text-center mb-8">
              {ticketSettings && !loading && (
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-3 shadow-lg ${
                    isLowAvailability
                      ? "bg-red-600 text-white animate-pulse"
                      : "bg-orange-500 text-white animate-pulse"
                  }`}
                >
                  {isLowAvailability ? "🔥" : "⚡"}{" "}
                  {ticketSettings.premiumAvailable}/
                  {ticketSettings.premiumTotal} disponibles
                </div>
              )}
              {loading && (
                <div className="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-3">
                  Cargando...
                </div>
              )}
              {error && (
                <div className="inline-block bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-3">
                  🔥 Disponibilidad limitada
                </div>
              )}
              <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide mb-4">
                Experiencia Premium
              </div>
              <h3 className="text-xl text-gray-800 mb-4 font-semibold">
                Platinum
              </h3>
              <div className="flex flex-col items-center gap-1">
                {/* <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-400 line-through">
                    S/ 49
                  </span>
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-semibold">
                    Early Bird
                  </span>
                </div> */}
                <span className="text-4xl font-bold text-google-blue">
                  S/ 39
                </span>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-gray-800 mb-4 text-lg font-semibold">
                Todo lo de la experiencia gratuita, más:
              </h4>
              <ul className="space-y-3 mb-8">
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
              </ul>
            </div>

            <Link
              to={
                ticketSettings?.premiumAvailable === 0
                  ? "#"
                  : "https://wa.link/h7zpdo"
              }
              target={
                ticketSettings?.premiumAvailable === 0 ? "_self" : "_blank"
              }
              onClick={
                ticketSettings?.premiumAvailable === 0
                  ? (e) => {
                      e.preventDefault();
                      alert(
                        "¡Lo sentimos! Las entradas premium están agotadas."
                      );
                    }
                  : undefined
              }
              className={`w-full inline-block text-center py-4 px-8 rounded-full font-medium text-base mb-4 transition-all duration-300 ${
                ticketSettings?.premiumAvailable === 0
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed opacity-75"
                  : "bg-gradient-to-br from-google-blue to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 cursor-pointer"
              }`}
            >
              {ticketSettings?.premiumAvailable === 0
                ? "Agotadas"
                : "Obtener acceso premium"}
            </Link>

            <p className="text-center text-xs text-gray-500 italic">
              La mejor opción para vivir una experiencia única
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              ℹ️ Información importante
            </h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <strong>🧋 Refrigerio:</strong> Todos los asistentes tendrán
                acceso a coffee break durante el evento.
              </p>
              <p>
                <strong>🍽️ Almuerzo:</strong> Incluido únicamente para las
                experiencias Pro y Platinum.
              </p>
              <p>
                <strong>⚠️ Capacidad limitada:</strong> El aforo del evento es
                limitado. Te recomendamos registrarte cuanto antes para asegurar
                tu lugar.
              </p>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            <strong>Todas las ventas de entradas son finales.</strong>{" "}
            Reembolsos disponibles solo en caso de cancelación del evento.
          </p>
          <p className="text-sm text-gray-500">
            ¿Preguntas sobre los precios? Contáctanos en{" "}
            <a
              href="mailto:team@gdgtacna.com"
              className="text-google-blue hover:underline"
            >
              team@gdgtacna.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
