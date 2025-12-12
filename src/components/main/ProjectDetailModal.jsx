// src/components/main/ProjectDetailModal.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeftCircle, HiGlobeAlt, HiCodeBracketSquare } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
// 1. Impor modul 'Zoom' dan CSS-nya
import { Navigation, Pagination, Zoom } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom'; // <-- CSS penting untuk fitur zoom

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="relative w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Blur + Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 filter blur-2xl opacity-20"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Konten */}
        <div className="relative z-10 w-full h-full overflow-y-auto p-6 md:p-10">
          {/* Tombol Kembali */}
          <button onClick={onClose} className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium z-20">
            <HiArrowLeftCircle className="text-xl" /> Back
          </button>

          {/* Grid Konten */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 text-white">
            {/* Info Proyek */}
            <div className="space-y-6">
              <p className="text-xs text-blue-400 uppercase tracking-widest">Projects &gt; Detail</p>
              <h1 className="text-4xl font-extrabold leading-snug border-b-4 border-blue-500 pb-2 inline-block">{project.title}</h1>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg text-center shadow-inner">
                  <p className="text-xl font-bold text-blue-300">{project.totalTeknologi}</p>
                  <p className="text-sm text-gray-400">Total Teknologi</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center shadow-inner">
                  <p className="text-xl font-bold text-blue-300">{project.fiturUtama}</p>
                  <p className="text-sm text-gray-400">Fitur Utama</p>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="flex gap-4 pt-4">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md">
                  <HiGlobeAlt className="text-xl" /> Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md">
                  <HiCodeBracketSquare className="text-xl" /> Github
                </a>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-700/70 px-3 py-1 rounded-full text-sm text-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel dan Fitur */}
            <div className="space-y-6">
              {/* Carousel */}
              <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-700 shadow-md">
                <Swiper
                  // 2. Tambahkan modul Zoom dan aktifkan fiturnya
                  modules={[Navigation, Pagination, Zoom]}
                  navigation
                  pagination={{ clickable: true }}
                  zoom={true}
                  spaceBetween={0}
                  slidesPerView={1}
                  className="w-full h-full"
                >
                  {project.images.map((img, idx) => (
                    <SwiperSlide key={idx} className="flex items-center justify-center bg-black/20">
                      {/* 3. Bungkus gambar dengan div 'swiper-zoom-container' */}
                      <div className="swiper-zoom-container">
                        <img
                          src={img}
                          alt={`Slide ${idx + 1}`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Key Features */}
              <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 shadow-inner">
                <h3 className="font-semibold text-lg mb-3">Key Features</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailModal;