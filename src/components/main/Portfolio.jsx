// src/components/main/Portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, certificates, techStack } from '../../data/PortfolioData.jsx';
import SectionTitle from '../reusable/SectionTitle';
import ProjectCard from '../reusable/ProjectCard';

// KUNCI PERBAIKAN: Menerima prop 'onProjectClick'
const Portfolio = ({ onProjectClick }) => {
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'tech-stack', label: 'Tech Stack' },
  ];

  const renderContent = () => {
    const motionProps = {
      key: activeTab,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.3 }
    };

    switch (activeTab) {
      case 'projects':
        return (
          <motion.div {...motionProps} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              // KUNCI PERBAIKAN: Meneruskan fungsi klik sebagai prop 'onSelect'
              <ProjectCard 
                key={project.id} 
                project={project} 
                onSelect={() => onProjectClick(project)} 
              />
            ))}
          </motion.div>
        );
      // ... sisa case (certificates, tech-stack) tetap sama ...
      case 'certificates':
        return (
          <motion.div {...motionProps} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map(cert => (
              <a key={cert.id} href={cert.image} target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-gray-800 border-4 border-gray-900 dark:border-gray-700 rounded-xl aspect-video p-2 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={cert.image} alt={cert.name} className="w-full h-full object-contain rounded-md" />
              </a>
            ))}
          </motion.div>
        );
      case 'tech-stack':
        return (
          <motion.div {...motionProps} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            {techStack.map(tech => (
              <div key={tech.id} className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <span className="text-blue-500">{tech.icon}</span>
                <p className="font-semibold text-gray-800 dark:text-white">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Portfolio</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Explore my journey through projects, certifications, and technical expertise
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-200 dark:bg-gray-800 p-1 rounded-xl">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;