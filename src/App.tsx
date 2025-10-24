import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CountdownBanner from "./components/CountdownBanner";
// import VolunteerCTA from "./components/VolunteerCTA";
import Pricing from "./components/Pricing";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import AdminRoute from "./components/AdminRoute";
import VolunteersPage from "./components/VolunteersPage";

function HomePage() {
  useEffect(() => {
    // Manejar hash cuando se carga la página
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Pequeño delay para asegurar que los elementos estén renderizados
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="">
        <Hero />
        <CountdownBanner />
        <Schedule />
        <Speakers />
        <Pricing />
        {/* <VolunteerCTA /> */}
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/volunteers" element={<VolunteersPage />} />
        <Route path="/admin" element={<AdminRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
