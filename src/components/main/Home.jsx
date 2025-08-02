// src/components/main/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
// Impor ilustrasi Anda
import heroIllustration from '../../assets/hero-illustration.png'; 

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-gray-900 pt-24 md:pt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Kolom Kiri: Teks & Konten */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Ready to Innovate
            </span>

            {/* Judul Utama */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-2">
              Fullstack <span className="text-blue-500">|</span> Cyber
              <br/>
              Developer <span className="text-blue-500">|</span> Security
            </h1>

            {/* Sub-judul */}
            <p className="font-semibold text-gray-500 dark:text-gray-400 mb-6">
              & Informatic Student
            </p>

            {/* Deskripsi */}
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Designing the future, pushing boundaries, and fortifying the digital realm—this is the legacy I craft with every project I bring to life.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Node.js', 'Linux', 'SpringBoot', 'Laravel'].map(tag => (
                <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transform hover:scale-105 transition-transform">
                Projects <FaArrowRight />
              </a>
              <a href="#contact" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transform hover:scale-105 transition-transform">
                Contacts <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Kolom Kanan: Ilustrasi */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={heroIllustration} alt="Developer and Security Illustration" className="w-full h-auto" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;