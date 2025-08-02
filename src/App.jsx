// src/App.jsx
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; // <-- Impor AnimatePresence

import Navbar from './components/main/Navbar';
import Home from './components/main/Home';
import About from './components/main/About';
import Portfolio from './components/main/Portfolio';
import Contact from './components/main/Contact';
import OpeningAnimation from './components/main/OpeningAnimation';

function App() {
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    // Sembunyikan animasi setelah 7 detik
    const timer = setTimeout(() => {
      setShowOpening(false);
    }, 7000); // Durasi diubah menjadi 7000ms = 7 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <> {/* Gunakan Fragment agar bisa menampung AnimatePresence dan div utama */}
      <AnimatePresence>
        {showOpening && <OpeningAnimation />}
      </AnimatePresence>

      {!showOpening && (
        <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
          <Navbar />
          <main>
            <Home />
            <About />
            <Portfolio />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}

export default App;