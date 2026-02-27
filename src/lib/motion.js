// Motion system — Fincher-inspired: controlled, deliberate, no bounce
// All animations: opacity + translateY 12px, cubic-bezier(0.22, 1, 0.36, 1)

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const ease = [0.22, 1, 0.36, 1];

export const duration = {
  fast: 0.2,
  normal: 0.5,
  slow: 0.8,
};

// Section / element entrance
export const fadeUp = prefersReducedMotion
  ? {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
    }
  : {
      hidden: { opacity: 0, y: 12 },
      visible: { opacity: 1, y: 0, transition: { duration: duration.normal, ease } },
    };

// Stagger container
export const stagger = (delay = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

// Modal — subtle scale settle, no spring
export const modalOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.fast, ease } },
  exit: { opacity: 0, transition: { duration: duration.fast, ease } },
};

export const modalContent = prefersReducedMotion
  ? {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0 },
    }
  : {
      hidden: { opacity: 0, scale: 0.97 },
      visible: { opacity: 1, scale: 1, transition: { duration: duration.normal, ease } },
      exit: { opacity: 0, scale: 0.97, transition: { duration: duration.fast, ease } },
    };

// Cinematic fade
export const cinematicFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease } },
  exit: { opacity: 0, transition: { duration: 0.6, ease } },
};

// Scale settle (1.02 → 1)
export const scaleSettle = prefersReducedMotion
  ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
  : {
      hidden: { opacity: 0, scale: 1.02 },
      visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease } },
    };
