// src/components/main/ProjectDetailModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-900 w-full max-w-6xl h-[90vh] rounded-2xl shadow-2xl overflow-y-auto p-8 relative"
          onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat klik di dalamnya
        >
          {/* Tombol Back */}
          <button onClick={onClose} className="absolute top-6 left-8 flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            <FaArrowLeft /> Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Kolom Kiri: Info Proyek */}
            <div className="flex flex-col gap-6">
              <p className="text-sm text-gray-500">Projects &gt; Details Project</p>
              <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white border-b-4 border-blue-500 pb-2 inline-block">{project.title}</h1>
              <p className="text-gray-600 dark:text-gray-300">{project.longDescription}</p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"><p className="font-bold">{project.totalTeknologi}</p><p className="text-sm text-gray-500">Total Teknologi</p></div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"><p className="font-bold">{project.fiturUtama}</p><p className="text-sm text-gray-500">Fitur Utama</p></div>
              </div>
              
              <div className="flex gap-4">
                <a href={project.demoLink} className="bg-gray-900 text-white dark:bg-white dark:text-black font-semibold py-2 px-6 rounded-lg flex-1 text-center">Demo</a>
                <a href={project.githubLink} className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-semibold py-2 px-6 rounded-lg flex-1 text-center">Github</a>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded">{tag}</span>)}
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Carousel & Key Features */}
            <div className="flex flex-col gap-6">
              <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={0} slidesPerView={1}>
                  {project.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-full object-cover" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {project.keyFeatures.map(feature => <li key={feature}>{feature}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;