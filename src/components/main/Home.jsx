// src/components/main/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowNarrowRight, HiMail } from 'react-icons/hi';
import { LuSparkles } from 'react-icons/lu';
import heroIllustration from '../../assets/hero-illustration.png';
import MeteorBackground from '../effects/MeteorBackground';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black pt-24 md:pt-0 overflow-hidden"
    >
      {/* Background Meteors */}
      <MeteorBackground />

      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Kolom Kiri */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium px-4 py-1 rounded-full shadow-md tracking-wide uppercase mb-5 animate-pulse">
              <LuSparkles /> Ready to Innovate
            </span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-snug mb-4"
            >
              <span className="bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-cyan-500 bg-clip-text text-transparent">
                Fullstack Developer
              </span>
              <span className="text-3xl md:text-4xl text-blue-400 dark:text-blue-500 px-2">✦</span>
              <span className="bg-gradient-to-r from-blue-600 to-black dark:from-cyan-400 dark:to-white bg-clip-text text-transparent">
                Cyber Security
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-3">
              & Informatics Student
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-xl"
            >
              Designing the future, pushing boundaries, and fortifying the digital realm,
              this is the legacy I craft with every project I bring to life.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              {['Node.js', 'Linux', 'Python', 'Laravel', 'Scripting', 'Go', 'React.js'].map(tag => (
                <span
                  key={tag}
                  className="text-sm font-medium px-4 py-1 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="bg-gradient-to-r from-black via-blue-600 to-cyan-400 text-white font-semibold py-3 px-6 rounded-xl shadow-lg flex items-center gap-2 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Projects <HiArrowNarrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-xl shadow-md flex items-center gap-2 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Contact <HiMail size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Kolom Kanan */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex justify-center items-center relative w-full h-full"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-400/30 blur-3xl opacity-50 z-0" />
            <img
              src={heroIllustration}
              alt="Developer and Security Illustration"
              className="relative z-10 w-full h-auto max-h-[90vh] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
