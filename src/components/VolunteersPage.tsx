import { useEffect, useState } from "react";
import { addVolunteer } from "../lib/volunteers";
import Header from "./Header";
import Footer from "./Footer";

const VolunteersPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    availability: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await addVolunteer(formData);
      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          experience: "",
          availability: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting volunteer application:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-white to-gray-50 py-24">
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl text-google-blue mb-6 font-bold">
              Únete a nuestro equipo de voluntarios
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              ¡Ayuda a que DevFest Tacna sea un éxito! Únete a nuestro increíble
              equipo de voluntarios y sé parte de la creación de una experiencia
              inolvidable para todos los asistentes mientras adquieres una
              valiosa experiencia en la gestión de eventos.
            </p>
          </div>

          {/* Opportunities Section - Full Width */}
          <div className="mb-16">
            <h2 className="text-gray-800 mb-10 text-2xl md:text-3xl font-semibold text-center">
              Oportunidades para voluntarios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-google-blue mb-3 font-semibold text-lg">
                  Coordinación de eventos
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ayuda a organizar sesiones, gestionar horarios y garantizar
                  que todo funcione sin problemas
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="text-3xl mb-4">📝</div>
                <h3 className="text-google-blue mb-3 font-semibold text-lg">
                  Registro y check-in
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Da la bienvenida a los asistentes, gestiona el registro y
                  distribuye credenciales y swag
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="text-3xl mb-4">🎤</div>
                <h3 className="text-google-blue mb-3 font-semibold text-lg">
                  Soporte técnico
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ayuda a los ponentes con el equipo audiovisual y soluciona
                  problemas técnicos
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="text-3xl mb-4">📸</div>
                <h3 className="text-google-blue mb-3 font-semibold text-lg">
                  Fotografía y redes sociales
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Captura momentos del evento y gestiona la presencia en redes
                  sociales
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="text-3xl mb-4">🍕</div>
                <h3 className="text-google-blue mb-3 font-semibold text-lg">
                  Hospitalidad
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gestiona el catering, los refrigerios y la comodidad de los
                  asistentes
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="text-3xl mb-4">ℹ️</div>
                <h3 className="text-google-blue mb-3 font-semibold text-lg">
                  Punto de información
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Responde preguntas, proporciona indicaciones y ayuda a los
                  asistentes
                </p>
              </div>
            </div>
          </div>

          {/* Benefits and Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Benefits Section */}
            <div>
              <h2 className="text-gray-800 mb-8 text-2xl md:text-3xl font-semibold">
                Beneficios para voluntarios
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg">
                  <span className="text-3xl mt-1 flex-shrink-0">🎓</span>
                  <div>
                    <strong className="text-gray-800 block mb-2 text-lg">
                      Experiencia de aprendizaje
                    </strong>
                    <p className="text-gray-600 leading-relaxed">
                      Adquiere habilidades de gestión y organización de eventos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg">
                  <span className="text-3xl mt-1 flex-shrink-0">🤝</span>
                  <div>
                    <strong className="text-gray-800 block mb-2 text-lg">
                      Networking
                    </strong>
                    <p className="text-gray-600 leading-relaxed">
                      Conoce a ponentes, organizadores y otros voluntarios
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg">
                  <span className="text-3xl mt-1 flex-shrink-0">🎁</span>
                  <div>
                    <strong className="text-gray-800 block mb-2 text-lg">
                      Swag exclusivo
                    </strong>
                    <p className="text-gray-600 leading-relaxed">
                      Merchandising especial para voluntarios y certificados
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg">
                  <span className="text-3xl mt-1 flex-shrink-0">🍕</span>
                  <div>
                    <strong className="text-gray-800 block mb-2 text-lg">
                      Comidas gratis
                    </strong>
                    <p className="text-gray-600 leading-relaxed">
                      Desayuno, almuerzo y refrigerios de cortesía
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit}>
                <h2 className="text-google-blue mb-8 text-2xl md:text-3xl text-center font-semibold">
                  Registro de voluntarios
                </h2>

                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-3 font-medium text-gray-800"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Tu nombre completo"
                    className="w-full py-4 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-google-blue focus:ring-2 focus:ring-google-blue/20 hover:border-gray-300"
                    aria-describedby="name-error"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-3 font-medium text-gray-800"
                  >
                    Dirección de correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="tu.email@ejemplo.com"
                    className="w-full py-4 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-google-blue focus:ring-2 focus:ring-google-blue/20 hover:border-gray-300"
                    aria-describedby="email-error"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block mb-3 font-medium text-gray-800"
                  >
                    Número de teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+51 999 999 999"
                    className="w-full py-4 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-google-blue focus:ring-2 focus:ring-google-blue/20 hover:border-gray-300"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="role"
                    className="block mb-3 font-medium text-gray-800"
                  >
                    Rol preferido *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full py-4 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-google-blue focus:ring-2 focus:ring-google-blue/20 hover:border-gray-300 bg-white"
                    aria-describedby="role-error"
                  >
                    <option value="">Selecciona tu rol preferido</option>
                    <option value="event-coordination">
                      Coordinación de eventos
                    </option>
                    <option value="registration">Registro y check-in</option>
                    <option value="technical-support">Soporte técnico</option>
                    <option value="photography">
                      Fotografía y redes sociales
                    </option>
                    <option value="hospitality">Hospitalidad</option>
                    <option value="information">Punto de información</option>
                    <option value="flexible">
                      Soy flexible con cualquier rol
                    </option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="experience"
                    className="block mb-3 font-medium text-gray-800"
                  >
                    Experiencia previa
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Cualquier experiencia previa como voluntario o en eventos (opcional)"
                    className="w-full py-4 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-google-blue focus:ring-2 focus:ring-google-blue/20 hover:border-gray-300 resize-y min-h-[120px]"
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="availability"
                    className="block mb-3 font-medium text-gray-800"
                  >
                    Disponibilidad *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                    className="w-full py-4 px-4 border-2 border-gray-200 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-google-blue focus:ring-2 focus:ring-google-blue/20 hover:border-gray-300 bg-white"
                    aria-describedby="availability-error"
                  >
                    <option value="">Selecciona tu disponibilidad</option>
                    <option value="full-day">Día completo (8 AM - 6 PM)</option>
                    <option value="morning">
                      Solo por la mañana (8 AM - 1 PM)
                    </option>
                    <option value="afternoon">
                      Solo por la tarde (1 PM - 6 PM)
                    </option>
                    <option value="setup">
                      Día de preparación (día antes del evento)
                    </option>
                  </select>
                </div>

                {submitStatus === "success" && (
                  <div
                    className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-start gap-3"
                    role="alert"
                    aria-live="polite"
                  >
                    <span className="text-green-600 text-xl flex-shrink-0">
                      ✅
                    </span>
                    <div>
                      <strong className="block mb-1">¡Registro exitoso!</strong>
                      ¡Gracias por ofrecerte como voluntario! Nos pondremos en
                      contacto contigo con más detalles pronto.
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-start gap-3"
                    role="alert"
                    aria-live="polite"
                  >
                    <span className="text-red-600 text-xl flex-shrink-0">
                      ❌
                    </span>
                    <div>
                      <strong className="block mb-1">
                        Error en el registro
                      </strong>
                      Se ha producido un error al enviar tu solicitud. Por
                      favor, inténtalo de nuevo.
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-google-blue to-blue-600 text-white py-4 px-8 rounded-full font-semibold text-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none focus:outline-none focus:ring-4 focus:ring-google-blue/30"
                  aria-describedby="submit-status"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Solicitar ser voluntario"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VolunteersPage;
