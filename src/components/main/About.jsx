// src/components/main/About.jsx
import React from 'react';
import SectionTitle from '../reusable/SectionTitle';
import { aboutData } from '../../data/PortfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Kolom Gambar */}
          <div className="md:col-span-4 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              {/* Ganti dengan <img src="/profile-picture.png" /> jika sudah ada */}
              <span className="text-gray-500">Profile Pic</span>
            </div>
          </div>

          {/* Kolom Teks & Info */}
          <div className="md:col-span-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Halo! Saya {aboutData.name}, seorang pengembang dengan hasrat untuk membangun aplikasi web yang fungsional dan aman. Saat ini saya berstatus sebagai {aboutData.status} di {aboutData.university}.
            </p>
            <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-200">
              <li><strong>Domisili:</strong> {aboutData.domicile}</li>
              <li><strong>Email:</strong> {aboutData.email}</li>
            </ul>
            
            {/* Tombol Aksi */}
            <div className="flex space-x-4 mb-8">
              <a 
                href={aboutData.cv} 
                download
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Download CV
              </a>
              <a 
                href="#portfolio"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                View Projects
              </a>
            </div>

            {/* Statistik */}
            <div className="flex justify-around text-center border-t border-gray-200 dark:border-gray-700 pt-6">
              <div>
                <p className="text-2xl font-bold text-blue-500 dark:text-blue-400">{aboutData.yearsExperience}+</p>
                <p className="text-gray-500 dark:text-gray-400">Years of Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-500 dark:text-blue-400">{aboutData.totalProjects}+</p>
                <p className="text-gray-500 dark:text-gray-400">Projects Completed</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;