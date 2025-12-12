// src/components/main/OpeningAnimation.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code2, UserCircle2, Github } from 'lucide-react';

// ========================================================
// REALISTIC HEAVY RAIN — deras, layered, immersive
// ========================================================
const RainLayer = ({
  count,
  rotate,
  blur,
  opacityRange,
  speedRange,
  lengthRange,
  thicknessRange,
  zIndex,
  driftRange,
}) => {
  const drops = Array.from({ length: count }).map((_, i) => {
    const startX = Math.random() * window.innerWidth;
    const delay = Math.random() * 1.5;
    const speed = Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0];
    const length = Math.random() * (lengthRange[1] - lengthRange[0]) + lengthRange[0];
    const thickness = Math.random() * (thicknessRange[1] - thicknessRange[0]) + thicknessRange[0];
    const opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
    const drift = Math.random() * (driftRange[1] - driftRange[0]) + driftRange[0];

    return { id: i, startX, delay, speed, length, thickness, opacity, drift };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex }}>
      {drops.map(drop => (
        <motion.div
          key={drop.id}
          className="absolute"
          style={{
            left: drop.startX,
            top: -120,
            width: `${drop.thickness}px`,
            height: `${drop.length}px`,
            opacity: drop.opacity,
            rotate,
            background:
              "linear-gradient(to bottom, rgba(200,230,255,0) 0%, rgba(180,220,255,1) 100%)",
            filter: `blur(${blur}px)`,
          }}
          animate={{
            y: window.innerHeight + 250,
            x: drop.startX + drop.drift, // drift horizontal
          }}
          transition={{
            duration: drop.speed,
            delay: drop.delay,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
};

const RealisticRain = () => {
  return (
    <>
      {/* Background layer: tipis, lambat */}
      <RainLayer
        count={150}
        rotate={-12}
        blur={2}
        opacityRange={[0.1, 0.25]}
        speedRange={[3, 4]}
        lengthRange={[30, 60]}
        thicknessRange={[0.2, 0.6]}
        driftRange={[-10, 10]}
        zIndex={0}
      />
      {/* Middle layer: sedang */}
      <RainLayer
        count={200}
        rotate={-16}
        blur={1.2}
        opacityRange={[0.2, 0.4]}
        speedRange={[2, 3]}
        lengthRange={[50, 80]}
        thicknessRange={[0.5, 1.2]}
        driftRange={[-15, 15]}
        zIndex={1}
      />
      {/* Foreground layer: tebal, cepat */}
      <RainLayer
        count={180}
        rotate={-20}
        blur={0.8}
        opacityRange={[0.3, 0.6]}
        speedRange={[1.2, 2]}
        lengthRange={[70, 110]}
        thicknessRange={[0.8, 1.8]}
        driftRange={[-20, 20]}
        zIndex={2}
      />
    </>
  );
};

// ========================================================
// MAIN OPENING ANIMATION
// ========================================================
const icons = [
  { icon: <Code2 size={36} />, color: 'text-purple-500' },
  { icon: <UserCircle2 size={36} />, color: 'text-blue-500' },
  { icon: <Github size={36} />, color: 'text-gray-700 dark:text-white' },
];

const OpeningAnimation = ({ onFinish }) => {
  const [showTyping, setShowTyping] = useState(false);
  const [exit, setExit] = useState(false);

  // auto-close after 4 sec
  useEffect(() => {
    const t = setTimeout(() => {
      setExit(true);
      setTimeout(() => onFinish?.(), 900);
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center 
          bg-gradient-to-br from-gray-200 via-gray-400 to-gray-700
          dark:from-gray-900 dark:via-gray-800 dark:to-black
          overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* 🌧️ HEAVY RAIN */}
          <RealisticRain />

          {/* Content */}
          <motion.div
            className="flex flex-col items-center relative z-10"
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setShowTyping(true)}
            transition={{ staggerChildren: 0.4, delayChildren: 0.5 }}
          >
            {/* Icons */}
            <motion.div
              className="flex gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {icons.map((icon, i) => (
                <motion.div
                  key={i}
                  className={`p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg 
                  hover:scale-110 transition-transform ${icon.color}`}
                  whileHover={{ rotate: 8 }}
                >
                  {icon.icon}
                </motion.div>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 dark:text-white tracking-tight drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome To My
              <br />
              <span className="bg-gradient-to-r from-black via-blue-800 to-blue-500 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
                Portfolio Website
              </span>
            </motion.h1>

            {/* Typing */}
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
                  cursor={true}
                  speed={60}
                  repeat={Infinity}
                  wrapper="span"
                  className="text-white bg-black dark:bg-white dark:text-black px-6 py-3 rounded-full shadow-md text-sm font-bold tracking-wide"
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningAnimation;
