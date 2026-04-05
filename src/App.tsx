import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Spirit from "./components/Spirit";
import Stats from "./components/Stats.tsx";
import Classes from "./components/Classes";
import Units from "./components/Units";
import Footer from "./components/Footer";
import LinksPage from "./components/LinksPage.tsx";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Spirit />
      <Stats />
      <Classes />
      <Units />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-surface selection:bg-tertiary selection:text-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/links" element={<LinksPage />} />
      </Routes>
    </main>
  );
}
