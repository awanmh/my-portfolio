import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cinematicFade, ease } from '../../lib/motion';

export default function PreIntro({ onBegin }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // No scroll on pre-intro
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => setShowButton(true), 800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      variants={cinematicFade}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0E0E11]"
    >
      {/* Grain + vignette */}
      <div className="grain" />
      <div className="vignette" />

      {/* Quote */}
      <div className="max-w-lg px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease }}
          className="mb-3 text-lg font-light italic leading-relaxed tracking-wide text-[#8A8A90] md:text-xl"
        >
          &ldquo;Simplicity is the ultimate sophistication.&rdquo;
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.3, ease }}
          className="text-xs tracking-[0.2em] text-[#5A5A60]"
        >
          — Leonardo da Vinci
        </motion.p>
      </div>

      {/* Begin button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease }}
            onClick={() => {
              document.body.style.overflow = 'hidden';
              onBegin();
            }}
            className="underline-slide mt-16 border border-[#2A2A2E] px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#8A8A90] transition-colors duration-500 hover:text-[#E8E8EA]"
            style={{ background: 'transparent' }}
          >
            Begin the Sequence
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
