import { Link } from "react-router-dom";

const VolunteerCTA: React.FC = () => {

  return (
    <section
      id="volunteer"
      className="bg-gradient-to-br from-white to-gray-50 py-24"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl text-google-blue mb-6 font-bold">
            Únete a nuestro equipo de voluntarios
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            ¡Ayuda a que DevFest Tacna sea un éxito! Únete a nuestro increíble
            equipo de voluntarios y sé parte de la creación de una experiencia
            inolvidable para todos los asistentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/volunteers"
              className="bg-gradient-to-r from-google-blue to-blue-600 text-white py-4 px-8 rounded-full font-semibold text-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg inline-flex items-center gap-2"
            >
              <span>🙋‍♂️</span>
              Ser voluntario
            </Link>
            <p className="text-gray-600 text-sm">
              Descubre las oportunidades y beneficios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerCTA;
