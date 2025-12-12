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
      className="relative min-h-screen flex flex-col justify-center py-20 bg-gradient-to-br from-gray-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Meteors */}
      <MeteorBackground />

      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="inline-block w-6 h-6 text-indigo-600 dark:text-yellow-400 mr-2 animate-pulse" />
            {aboutData.title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {aboutData.subtitle}
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
         {/* Profile Picture with Tilt */}
<motion.div
  className="flex justify-center"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  <Tilt
    glareEnable={true}
    glareMaxOpacity={0.3}
    scale={1.05}
    transitionSpeed={250}
    className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden" // bulat + sembunyikan overflow
  >
    <div className="relative group w-full h-full rounded-full p-1 bg-gradient-to-tr from-blue-500 via-blue-800 to-black shadow-2xl hover:rotate-1 transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 rounded-full blur-xl opacity-70 group-hover:scale-110 transition duration-500"></div>
      <img
        src={profileImage}
        alt="Profile"
        className="w-full h-full rounded-full object-cover ring-4 ring-white dark:ring-gray-800"
      />
    </div>
  </Tilt>
</motion.div>


          {/* Info Text */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              {aboutData.greeting}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {aboutData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <InfoCard icon={<HiUser className="text-3xl text-blue-600 dark:text-blue-400" />} label="Name" value={aboutData.name} />
              <InfoCard icon={<HiAcademicCap className="text-3xl text-purple-600 dark:text-purple-400" />} label="College" value={aboutData.college} />
              <InfoCard icon={<HiCheckBadge className="text-3xl text-green-600 dark:text-green-400" />} label="Status" value={aboutData.status} />
              <InfoCard icon={<HiMapPin className="text-3xl text-pink-600 dark:text-pink-400" />} label="Residence" value={aboutData.residence} />
              <InfoCard icon={<HiEnvelope className="text-3xl text-yellow-600 dark:text-yellow-400" />} label="Email" value={aboutData.email} />
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href={aboutData.cv}
                download
                className="bg-gradient-to-r from-black to-blue-800 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 shadow-lg hover:scale-105 transition duration-300"
              >
                Download CV <FaDownload />
              </a>
              <a
                href="#portfolio"
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 shadow-lg hover:scale-105 transition duration-300"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20">
          {aboutData.stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-2xl rounded-xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="mb-3">
                <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
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
