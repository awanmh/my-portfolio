// src/components/reusable/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-500 hover:underline">
          Lihat Detail &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;