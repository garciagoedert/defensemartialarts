/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Spirit from "./components/Spirit";
import Stats from "./components/Stats";
import Classes from "./components/Classes";
import Units from "./components/Units";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-surface selection:bg-tertiary selection:text-white">
      <Navbar />
      <Hero />
      <Spirit />
      <Stats />
      <Classes />
      <Units />
      <Footer />
    </main>
  );
}
