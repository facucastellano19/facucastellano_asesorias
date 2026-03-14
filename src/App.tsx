import "./App.css";

import Navbar from "./components/layout/Navbar";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Problems from "./components/sections/Problems";
import Services from "./components/sections/Services";

function App() {
  return (
    <div className="relative min-h-screen bg-brand-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;
