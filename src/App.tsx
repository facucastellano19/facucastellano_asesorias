import './App.css'

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

function App() {
  return (
    <div className="relative min-h-screen bg-brand-black text-white">
      <Navbar />
      <main>
        <Hero />
        
      </main>
    </div>
  );
}

export default App;