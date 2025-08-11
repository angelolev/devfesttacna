const Footer = () => {
  return (
    <footer className="py-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <img
            src="/devfestlogo.png"
            alt="DevFest Logo"
            className="max-w-48 md:max-w-56 w-auto"
          />
          <p className=" text-sm">
            Copyright © 2025 GDG Tacna. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
