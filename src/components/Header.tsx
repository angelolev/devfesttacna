import { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Link to="/">
              <img
                src="/logodevfesttacna.svg"
                alt="DevFest Logo"
                className="w-40 md:w-48"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 items-center">
            <button
              onClick={() => scrollToSection("schedule")}
              className="bg-transparent border-none text-gray-800 text-base font-medium cursor-pointer py-2 px-4 rounded-full hover:bg-gray-100 hover:text-google-blue transition-colors"
              aria-label="Ir a Cronograma"
            >
              Agenda
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="bg-transparent border-none text-gray-800 text-base font-medium cursor-pointer py-2 px-4 rounded-full hover:bg-gray-100 hover:text-google-blue transition-colors"
              aria-label="Ir a Entradas"
            >
              Entradas
            </button>
            <button
              onClick={() => scrollToSection("speakers")}
              className="bg-transparent border-none text-gray-800 text-base font-medium cursor-pointer py-2 px-4 rounded-full hover:bg-gray-100 hover:text-google-blue transition-colors"
              aria-label="Ir a Ponentes"
            >
              Ponentes
            </button>
            <button
              onClick={() => scrollToSection("sponsors")}
              className="bg-transparent border-none text-gray-800 text-base font-medium cursor-pointer py-2 px-4 rounded-full hover:bg-gray-100 hover:text-google-blue transition-colors"
              aria-label="Ir a Contacto"
            >
              Sponsors
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex gap-3 items-center">
            <Link
              to="/volunteers"
              className="bg-white text-google-blue border-2 border-google-blue py-3 px-6 rounded-full font-medium text-sm inline-flex items-center gap-2 hover:bg-google-blue hover:text-white transition-all duration-300"
              aria-label="Ser voluntario"
            >
              Sé voluntario
            </Link>
            <button
              onClick={() => scrollToSection("speaker")}
              className="bg-gradient-to-br from-google-blue to-blue-700 text-white border-none py-3 px-6 rounded-full font-medium text-sm cursor-pointer inline-flex items-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
              aria-label="Ser un ponente"
            >
              Sé un ponente
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden`}
        >
          <nav className="pt-4 pb-2">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("schedule")}
                className="text-left py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-google-blue rounded-lg transition-colors"
              >
                Cronograma
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-google-blue rounded-lg transition-colors"
              >
                Entradas
              </button>
              <button
                onClick={() => scrollToSection("speakers")}
                className="text-left py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-google-blue rounded-lg transition-colors"
              >
                Ponentes
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-google-blue rounded-lg transition-colors"
              >
                Contacto
              </button>

              <div className="pt-4 space-y-3">
                <Link
                  to="/volunteers"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-white text-google-blue border-2 border-google-blue py-3 px-6 rounded-full font-medium text-sm hover:bg-google-blue hover:text-white transition-all duration-300 block text-center"
                >
                  Sé voluntario
                </Link>
                <button
                  onClick={() => scrollToSection("speaker")}
                  className="w-full bg-gradient-to-br from-google-blue to-blue-700 text-white border-none py-3 px-6 rounded-full font-medium text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  Sé un ponente
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
