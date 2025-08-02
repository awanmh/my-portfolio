// src/components/reusable/ProjectCard.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

// KUNCI PERBAIKAN: Menerima prop 'onSelect'
const ProjectCard = ({ project, onSelect }) => {
  return (
    <div className="bg-gray-900 dark:bg-gray-800 border border-gray-700 dark:border-gray-600 rounded-xl overflow-hidden group">
      <div className="w-full h-48 bg-gray-800 dark:bg-gray-700">
        {/* Anda bisa menggunakan tag <img> di sini jika punya gambar */}
        {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
      </div>
      <div className="p-6 text-white">
        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{project.description}</p>
        
        {/* KUNCI PERBAIKAN: Menggunakan <button> dengan onClick */}
        <button
          onClick={onSelect}
          className="bg-gray-700 text-white text-xs font-semibold py-2 px-3 rounded-md flex items-center justify-between w-28 group-hover:bg-gray-600 transition-colors"
        >
          Details <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;