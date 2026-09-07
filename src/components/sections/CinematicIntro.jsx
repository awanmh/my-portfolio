import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ease } from '../../lib/motion';

/* ─── Typing hook ─────────────────────────────────────── */
function useTypingEffect(text, startDelay, charSpeed = 55) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout;
    const start = setTimeout(() => {
      let i = 0;
      const type = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
          timeout = setTimeout(type, charSpeed + Math.random() * 25);
        } else {
          setDone(true);
        }
      };
      type();
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, [text, startDelay, charSpeed]);

  return { displayed, done };
}

/* ─── Main ────────────────────────────────────────────── */
export default function CinematicIntro({ onComplete }) {
  // Phases: 0=black+jitter, 1=REC, 2=name, 3=type1, 4=type2, 5=blink, 6=escalate, 7=exit
  const [phase, setPhase] = useState(0);
  const [blinkVisible, setBlinkVisible] = useState(true);
  const iframeRef = useRef(null);
  const timersRef = useRef([]);

  const line1 = useTypingEffect('Drawn to silent systems.', 3800, 55);
  const line2 = useTypingEffect('I engineer what others overlook.', 6200, 50);

  const schedule = useCallback((fn, ms) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  const cleanup = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    // We NO LONGER remove the iframe here so the music can continue into the main site
  }, []);

  /* ── YouTube injection ──────────────────────────────── */
  useEffect(() => {
    let iframe = document.getElementById('yt-cinematic');

    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'yt-cinematic';
      // ▼ start=14 controls where the music begins (guitar riff)
      iframe.src =
        'https://www.youtube.com/embed/N3oCS85HvpY?autoplay=1&start=12&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1';
      iframe.allow = 'autoplay';
      iframe.style.cssText =
        'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;z-index:-1;';
      document.body.appendChild(iframe);
    }

    iframeRef.current = iframe;

    // Set volume to 25%
    schedule(() => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'setVolume', args: [100] }),
        '*',
      );
    }, 1200);

    return cleanup;
  }, [schedule, cleanup]);

  /* ── LOCKED TIMELINE ────────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // 0.0s — Initial start
    schedule(() => setPhase(0), 0);

    // 0.4s — REC
    schedule(() => {
      setPhase(1);
    }, 400);

    // 1.6s — Name + contrast shift
    schedule(() => {
      setPhase(2);
    }, 1600);

    // 3.8s — Typing line 1
    schedule(() => setPhase(3), 3800);

    // 6.2s — Typing line 2 ("I engineer what others overlook.")
    // This takes approx 1.3 seconds to type out.
    schedule(() => setPhase(4), 6200);

    // ~7.6s — Line 2 typing complete
    schedule(() => {
      setPhase(5);
      setBlinkVisible(true);
    }, 7600);

    // 9.5s — Give user time to read the completed text, then start smooth fade out
    schedule(() => setPhase(7), 9500);

    // 11.0s — Transition to main site (Hero), music continues
    schedule(() => {
      onComplete();
    }, 11000);

    return () => {
      document.body.style.overflow = '';
    };
  }, [schedule, onComplete]);

  const handleSkip = () => {
    cleanup();
    document.body.style.overflow = '';
    onComplete();
  };

  // Determine if we show typed content
  const showName = phase >= 2 && phase < 7;
  const showLine1 = phase >= 3 && phase < 7;
  const showLine2 = phase >= 4 && phase < 7;

  return (
    <AnimatePresence>
      {phase < 7 && (
        <motion.div
          key="cinematic"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0E0E11]"
        >
          {/* Grain */}
          <div className="grain" />

          {/* Skip */}
          <button
            onClick={handleSkip}
            className="absolute right-6 top-6 z-10 text-[11px] tracking-[0.15em] text-[#5A5A60] opacity-60 transition-opacity duration-300 hover:opacity-100"
          >
            Skip Intro →
          </button>

          {/* REC indicator */}
          {phase >= 1 && (
            <div className="absolute left-6 top-6 flex items-center gap-2">
              <span
                className="text-[10px] font-medium tracking-[0.1em] text-[#8B1E1E]"
                style={{ opacity: 0.35 }}
              >
                REC
              </span>
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-[#8B1E1E]"
                style={{ opacity: 0.35 }}
              />
            </div>
          )}

          {/* Center content */}
          <div
            className="relative max-w-2xl px-6 text-center"
            style={{
              opacity: phase === 5 ? (blinkVisible ? 1 : 0) : 1,
              transition: phase === 5 ? 'none' : 'opacity 0.1s',
            }}
          >
            {/* Name */}
            {showName && (
              <motion.h1
                initial={{ opacity: 0, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease }}
                className="mb-8 text-3xl font-light tracking-[0.08em] text-[#EAEAEA] md:text-5xl"
              >
                Setiawan Muhammad
              </motion.h1>
            )}

            {/* Line 1 — typing */}
            {showLine1 && (
              <p className="mb-3 text-sm tracking-wide text-[#8A8A90] md:text-base">
                {line1.displayed}
                {!line1.done && (
                  <span
                    className="ml-0.5 inline-block h-[1.1em] w-[0.55em] align-middle bg-[#5A5A60]"
                    style={{ animation: 'pulse 900ms steps(1) infinite' }}
                  />
                )}
                {line1.done && phase === 3 && (
                  <span
                    className="ml-0.5 inline-block h-[1.1em] w-[0.55em] align-middle bg-[#5A5A60]"
                    style={{ animation: 'pulse 900ms steps(1) infinite' }}
                  />
                )}
              </p>
            )}

            {/* Line 2 — typing + blink */}
            {showLine2 && (
              <p className="text-sm tracking-wide text-[#8A8A90] md:text-base">
                {line2.displayed}
                {!line2.done && (
                  <span
                    className="ml-0.5 inline-block h-[1.1em] w-[0.55em] align-middle bg-[#5A5A60]"
                    style={{ animation: 'pulse 900ms steps(1) infinite' }}
                  />
                )}
              </p>
            )}

            {/* Escalation phase — no new content, just glitch on container */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
