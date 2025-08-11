import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VolunteerCTA from "./components/VolunteerCTA";
import Pricing from "./components/Pricing";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import AdminRoute from "./components/AdminRoute";
import VolunteersPage from "./components/VolunteersPage";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="">
        <Hero />
        <Schedule />
        <Pricing />
        <VolunteerCTA />
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
