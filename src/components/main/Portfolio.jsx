// src/components/main/Portfolio.jsx
import React from 'react';
import SectionTitle from '../reusable/SectionTitle';
import ProjectCard from '../reusable/ProjectCard';
import { projects, certificates } from '../../data/PortfolioData';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle>Portfolio</SectionTitle>
        
        {/* Bagian Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bagian Sertifikat */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Sertifikat</h3>
          <ul className="text-center space-y-2 text-gray-600 dark:text-gray-300">
            {certificates.map((cert) => (
              <li key={cert.id}>{cert.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;