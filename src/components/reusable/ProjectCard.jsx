// src/components/reusable/ProjectCard.jsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onSelect }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,       // aktif saat 20% card terlihat
    triggerOnce: false,   // selalu trigger ulang setiap masuk viewport
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} 
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gray-900 dark:bg-gray-800 border border-gray-700 dark:border-gray-600 rounded-xl overflow-hidden group"
    >
      <div className="w-full h-48 bg-gray-800 dark:bg-gray-700">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 text-white">
        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{project.description}</p>
        
        <button
          onClick={onSelect}
          className="bg-gray-700 text-white text-xs font-semibold py-2 px-3 rounded-md flex items-center justify-between w-28 group-hover:bg-gray-600 transition-colors"
        >
          Details <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
