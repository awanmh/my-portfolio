// src/components/main/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { aboutData } from '../../data/PortfolioData.jsx';
import InfoCard from '../reusable/InfoCard';
import profileImage from '../../assets/profile-picture.png';

// Icons
import { HiUser, HiAcademicCap, HiCheckBadge, HiMapPin, HiEnvelope } from 'react-icons/hi2';
import { FaDownload } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';

// Effects
import MeteorBackground from '../effects/MeteorBackground';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center py-16 
      bg-gradient-to-br from-gray-100 via-white to-blue-50 
      dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 
      transition-colors duration-500 overflow-hidden"
    >
      <MeteorBackground />

      <div className="w-full max-w-screen-lg mx-auto px-6 lg:px-12 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="inline-block w-5 h-5 text-indigo-600 dark:text-yellow-400 mr-2 animate-pulse" />
            {aboutData.title}
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {aboutData.subtitle}
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Profile Picture */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.03}
              transitionSpeed={250}
              className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden"
            >
              <div className="relative group w-full h-full rounded-full p-1 bg-gradient-to-tr from-blue-500 via-blue-800 to-black shadow-xl hover:rotate-1 transition-all duration-500 overflow-hidden">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
                />
              </div>
            </Tilt>
          </motion.div>

          {/* Info Text */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-3">
              {aboutData.greeting}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-5">
              {aboutData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <InfoCard icon={<HiUser className="text-2xl text-blue-600 dark:text-blue-400" />} label="Name" value={aboutData.name} />
              <InfoCard icon={<HiAcademicCap className="text-2xl text-purple-600 dark:text-purple-400" />} label="College" value={aboutData.college} />
              <InfoCard icon={<HiCheckBadge className="text-2xl text-green-600 dark:text-green-400" />} label="Status" value={aboutData.status} />
              <InfoCard icon={<HiMapPin className="text-2xl text-pink-600 dark:text-pink-400" />} label="Residence" value={aboutData.residence} />
              <InfoCard icon={<HiEnvelope className="text-2xl text-yellow-600 dark:text-yellow-400" />} label="Email" value={aboutData.email} />
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href={aboutData.cv}
                download
                className="bg-gradient-to-r from-black to-blue-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 shadow-md hover:scale-105 transition duration-300 text-sm"
              >
                Download CV <FaDownload />
              </a>
              <a
                href="#portfolio"
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 shadow-md hover:scale-105 transition duration-300 text-sm"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {aboutData.stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-lg shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition duration-500"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="mb-2">
                <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  {stat.value}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{stat.label}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
