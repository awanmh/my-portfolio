// src/components/main/OpeningAnimation.jsx
import React, { useState } from 'react'; // Impor useState
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaCode, FaUserCircle, FaGithub } from 'react-icons/fa';

const OpeningAnimation = () => {
  // State untuk mengontrol visibilitas animasi ketikan
  const [showTyping, setShowTyping] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 }
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
    >
      {/* Wrapper untuk men-stagger animasi anak */}
      <motion.div 
        className="flex flex-col items-center justify-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.5 }}
        // Saat animasi wrapper ini selesai, jalankan fungsinya
        onAnimationComplete={() => setShowTyping(true)}
      >
        {/* Ikon-ikon */}
        <motion.div className="flex space-x-6 mb-4" variants={itemVariants}>
          <FaCode size={40} className="text-gray-800 dark:text-gray-200" />
          <FaUserCircle size={40} className="text-gray-800 dark:text-gray-200" />
          <FaGithub size={40} className="text-gray-800 dark:text-gray-200" />
        </motion.div>

        {/* Teks Utama */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center text-gray-800 dark:text-white"
          variants={itemVariants}
        >
          Welcome To My
          <br />
          Portfolio Web
        </motion.h1>
      </motion.div>

      {/* Animasi Ketikan Nama (Hanya muncul jika showTyping === true) */}
      {showTyping && (
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <TypeAnimation
            sequence={[
              'Setiawan Muhammad',
              3000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={0}
            speed={50}
            className="bg-black text-white dark:bg-white dark:text-black text-sm font-semibold px-4 py-2 rounded-full"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default OpeningAnimation;