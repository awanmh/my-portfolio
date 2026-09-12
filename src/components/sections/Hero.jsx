import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end pb-[var(--space-section)] pt-32"
    >
      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-6xl px-6 lg:px-8"
      >
        {/* Display heading — left-aligned, condensed */}
        <motion.h1 variants={fadeUp} className="heading-display mb-8">
          Secure Systems.
          <br />
          Intentional Design.
          <br />
          Built to Last.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mb-10 max-w-[52ch] text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg"
        >
          I design and engineer digital systems that are secure, scalable, and deliberately crafted.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#experience"
            className="underline-slide border border-[var(--color-accent)] bg-[var(--color-accent)]/10 px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors duration-500 hover:bg-[var(--color-accent)]/20"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="underline-slide border border-[var(--color-border)] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors duration-500 hover:text-[var(--color-text-primary)]"
          >
            View Work
          </a>
          <a
            href="/Setiawan_Muhammad_Portfolio.pdf"
            download="Setiawan_Muhammad_Portfolio.pdf"
            className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-5 py-3 text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
          >
            <span>PDF CV</span>
            <span className="text-[var(--color-accent)]">↓</span>
          </a>
          <a
            href="#contact"
            className="underline-slide text-xs uppercase tracking-[0.2em] text-[var(--color-text-tertiary)] transition-colors duration-500 hover:text-[var(--color-text-secondary)]"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
