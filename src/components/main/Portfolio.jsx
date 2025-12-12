// src/components/main/Portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, certificates, techStack } from '../../data/PortfolioData.jsx';
import ProjectCard from '../reusable/ProjectCard';
import MeteorBackground from '../effects/MeteorBackground';
import { Code2, BadgeCheck, Cpu } from 'lucide-react';

const tabs = [
  { id: 'projects', label: 'Projects', icon: <Code2 className="w-4 h-4" /> },
  { id: 'certificates', label: 'Certificates', icon: <BadgeCheck className="w-4 h-4" /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu className="w-4 h-4" /> },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const Portfolio = ({ onProjectClick }) => {
  const [activeTab, setActiveTab] = useState('projects');

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <motion.div
            key="projects"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden p-4 shadow-xl bg-white/10 backdrop-blur-xl border border-white/20 cursor-pointer hover:shadow-2xl transition-all duration-500 ease-in-out"
              >
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center blur-md scale-110 opacity-30"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="relative z-10">
                  <ProjectCard project={project} onSelect={() => onProjectClick(project)} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'certificates':
        return (
          <motion.div
            key="certificates"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certificates.map((cert) => (
              <motion.a
                key={cert.id}
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                layout
                className="relative block overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </motion.a>
            ))}
          </motion.div>
        );

      case 'tech-stack':
        return (
          <motion.div
            key="tech-stack"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.1, rotate: 1 }}
                className="flex flex-col items-center justify-center gap-2 p-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl rounded-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-500 ease-in-out"
              >
                <span className="text-3xl text-blue-500">{tech.icon}</span>
                <p className="text-sm font-semibold text-white dark:text-gray-200">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="portfolio"
      className="relative min-h-screen py-20 bg-gradient-to-br dark:from-[#0f172a] via-[#1e293b] to-black dark:text-white"
    >
      <MeteorBackground />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold tracking-tight">My Portfolio</h2>
          <p className="text-gray-400">A showcase of what I’ve created and learned.</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 p-2 rounded-full border shadow-inner backdrop-blur-xl bg-white/50 dark:bg-white/10 dark:border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2 text-sm font-medium rounded-full transition-all duration-500 ease-in-out ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg'
                    : 'text-black dark:text-white hover:bg-white/10'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
