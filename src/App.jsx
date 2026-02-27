import { useState, useCallback, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import PreIntro from './components/sections/PreIntro';
import CinematicIntro from './components/sections/CinematicIntro';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import { projects } from './data/portfolio';

// Lazy load below-fold
const About = lazy(() => import('./components/sections/About'));
const Expertise = lazy(() => import('./components/sections/Expertise'));
const TechStack = lazy(() => import('./components/sections/TechStack'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Certificates = lazy(() => import('./components/sections/Certificates'));
const ProjectModal = lazy(() => import('./components/sections/ProjectModal'));
const Contact = lazy(() => import('./components/sections/Contact'));
const AudioPlayer = lazy(() => import('./components/ui/AudioPlayer'));

// Dev-only schema validation
if (import.meta.env.DEV) {
  import('./lib/validate').then(({ validateProjects }) => {
    validateProjects(projects);
  });
}

export default function App() {
  const [stage, setStage] = useState('preintro'); // preintro | cinematic | main
  const [selectedProject, setSelectedProject] = useState(null);

  const handleBegin = useCallback(() => {
    setStage('cinematic');
  }, []);

  const handleCinematicComplete = useCallback(() => {
    setStage('main');
    document.body.style.overflow = '';
  }, []);

  return (
    <ErrorBoundary>
      {/* Atmospheric layers — always visible in main */}
      {stage === 'main' && (
        <>
          <div className="grain" />
          <div className="vignette" />
          <div className="ambient-shadow" />
        </>
      )}

      <AnimatePresence mode="wait">
        {stage === 'preintro' && <PreIntro key="preintro" onBegin={handleBegin} />}

        {stage === 'cinematic' && (
          <CinematicIntro key="cinematic" onComplete={handleCinematicComplete} />
        )}
      </AnimatePresence>

      {stage === 'main' && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={null}>
              <About />
              <Expertise />
              <TechStack />
              <Projects projects={projects} onProjectClick={setSelectedProject} />
              <Certificates />
              <Contact />
              <AudioPlayer />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            {selectedProject && (
              <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
          </Suspense>
        </>
      )}
    </ErrorBoundary>
  );
}
