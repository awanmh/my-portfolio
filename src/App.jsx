// src/App.jsx
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/main/Navbar';
import Home from './components/main/Home';
import About from './components/main/About';
import Portfolio from './components/main/Portfolio';
import Contact from './components/main/Contact';
import OpeningAnimation from './components/main/OpeningAnimation';
import ProjectDetailModal from './components/main/ProjectDetailModal';

function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOpening(false);
    }, 6000); // Anda bisa sesuaikan kembali durasi ini
    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <AnimatePresence>
        {showOpening && <OpeningAnimation />}
      </AnimatePresence>

      {!showOpening && (
        <div
          className={`bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen ${
            selectedProject ? 'filter blur-sm' : ''
          } transition-filter duration-300`}
        >
          <Navbar />
          {/* KEMBALIKAN KE STRUKTUR <main> */}
          <main>
            <Home />
            <About />
            <Portfolio onProjectClick={handleProjectClick} />
            <Contact />
          </main>
        </div>
      )}

      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default App;