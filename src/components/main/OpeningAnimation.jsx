// src/components/main/OpeningAnimation.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code2, UserCircle2, Github } from 'lucide-react';

// ==========================
// RAIN DROP COMPONENT (smooth & ringan)
// ==========================
const Raindrop = ({ delay }) => {
  const startX = Math.random() * window.innerWidth;
  const length = Math.random() * 30 + 15; // panjang lebih kecil
  const thickness = Math.random() * 1.5 + 0.5; // tipis

  return (
    <motion.div
      className="absolute rounded-full bg-blue-300/70 dark:bg-blue-200/70"
      style={{
        left: startX,
        top: -50,
        width: `${thickness}px`,
        height: `${length}px`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        y: window.innerHeight + 50,
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 2 + 2, // 2–4 detik → lebih smooth
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 1.5 + 0.5,
        ease: 'linear',
      }}
    />
  );
};

const RainShower = ({ count = 50 }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {Array.from({ length: count }).map((_, i) => (
      <Raindrop key={i} delay={Math.random() * 3} />
    ))}
  </div>
);

// ==========================
// MAIN OPENING ANIMATION
// ==========================
const icons = [
  { icon: <Code2 size={36} />, color: 'text-purple-500' },
  { icon: <UserCircle2 size={36} />, color: 'text-blue-500' },
  { icon: <Github size={36} />, color: 'text-gray-700 dark:text-white' },
];

const OpeningAnimation = () => {
  const [showTyping, setShowTyping] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center 
      bg-gradient-to-br from-white via-gray-300 to-gray-700 
      dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* 🌧️ RAIN SHOWER */}
      <RainShower count={60} />

      {/* CONTENT */}
      <motion.div
        className="flex flex-col items-center relative z-10"
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setShowTyping(true)}
        transition={{ staggerChildren: 0.4, delayChildren: 0.5 }}
      >
        {/* Icons */}
        <motion.div
          className="flex gap-8 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {icons.map((icon, i) => (
            <motion.div
              key={i}
              className={`p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform ${icon.color}`}
              whileHover={{ rotate: 10 }}
            >
              {icon.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 dark:text-white tracking-tight drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          Welcome To My
          <br />
          <span className="bg-gradient-to-r from-black via-blue-800 to-blue-500 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
            Portfolio Website
          </span>
        </motion.h1>

        {/* Typing name */}
        {showTyping && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <TypeAnimation
              sequence={[
                'Setiawan Muhammad',
                1200,
                'Fullstack Developer | Cyber Security',
                1200,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={60}
              className="text-white bg-black dark:bg-white dark:text-black px-6 py-3 rounded-full shadow-md text-sm font-bold tracking-wide"
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default OpeningAnimation;
