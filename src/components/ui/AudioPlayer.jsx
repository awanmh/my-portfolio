import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiRecordFill } from 'react-icons/pi'; // We'll use this as the vinyl base
import { ease } from '../../lib/motion';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Check for the yt-cinematic iframe created by CinematicIntro
  useEffect(() => {
    const checkIframe = () => {
      const iframe = document.getElementById('yt-cinematic');
      if (iframe) {
        setIframeLoaded(true);
      } else {
        setTimeout(checkIframe, 1000); // Retry if not yet available
      }
    };
    checkIframe();
  }, []);

  const togglePlayback = useCallback(() => {
    const iframe = document.getElementById('yt-cinematic');
    if (!iframe) return;

    if (isPlaying) {
      // Pause
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
        '*',
      );
      setIsPlaying(false);
    } else {
      // Play
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*',
      );
      setIsPlaying(true);
    }
  }, [isPlaying]);

  return (
    <AnimatePresence>
      {iframeLoaded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease }}
          className="fixed bottom-6 right-6 z-[90]"
        >
          <button
            onClick={togglePlayback}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1E] border border-[var(--color-border)] shadow-lg transition-transform duration-300 hover:scale-105"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            {/* Vinyl record icon that spins when playing */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                duration: 4,
                ease: 'linear',
                repeat: isPlaying ? Infinity : 0,
              }}
              className="text-[#EAEAEA]"
            >
              <PiRecordFill size={24} />
            </motion.div>

            {/* Play/Pause hover indicator line */}
            <div className="absolute -bottom-2 h-[1px] w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-1/2" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
