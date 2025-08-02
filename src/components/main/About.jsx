// src/components/main/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../../data/PortfolioData.jsx';
import InfoCard from '../reusable/InfoCard';
import profileImage from '../../assets/profile-picture.png'; // Ganti dengan path foto Anda di folder assets

// Impor ikon-ikon yang dibutuhkan
import { FaUser, FaUniversity, FaCheckCircle, FaMapMarkerAlt, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      {/* INI KUNCINYA: Wrapper untuk menengahkan konten */}
      <div className="container mx-auto px-4">
        
        {/* Judul dan Subjudul */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">{aboutData.title}</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">{aboutData.subtitle}</p>
        </div>

        {/* Konten Utama: Gambar dan Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Kolom Kiri: Gambar Profil */}
          <motion.div 
            className="lg:col-span-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gray-900 dark:bg-gray-700 rounded-full" />
              <img 
                src={profileImage} // Ganti dengan foto Anda
                alt="Setiawan Muhammad"
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Kolom Kanan: Teks, Info, Tombol */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{aboutData.greeting}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{aboutData.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <InfoCard icon={<FaUser />} label="Name" value={aboutData.name} />
              <InfoCard icon={<FaUniversity />} label="College" value={aboutData.college} />
              <InfoCard icon={<FaCheckCircle />} label="Status" value={aboutData.status} />
              <InfoCard icon={<FaMapMarkerAlt />} label="Residence" value={aboutData.residence} />
              <InfoCard icon={<FaEnvelope />} label="Email" value={aboutData.email} />
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={aboutData.cv} download className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold py-3 px-6 rounded-lg flex items-center gap-2 shadow-lg transform hover:scale-105 transition-transform">
                Download CV <FaDownload />
              </a>
              <a href="#portfolio" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-lg flex items-center gap-2 shadow-lg transform hover:scale-105 transition-transform">
                View Project <FaArrowRight />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bagian Bawah: Kartu Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {aboutData.stats.map(stat => (
            <div key={stat.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-4xl font-extrabold text-blue-500">{stat.value}</span>
                <FaArrowRight className="text-gray-400" />
              </div>
              <h4 className="font-bold text-gray-800 dark:text-white">{stat.label}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;