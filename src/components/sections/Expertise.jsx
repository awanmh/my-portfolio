import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion';

const capabilities = [
  {
    num: '01',
    title: 'Full-Stack Architecture',
    description:
      'End-to-end system design across frontend, backend, databases, and deployment infrastructure. Emphasis on clean architecture and maintainability.',
  },
  {
    num: '02',
    title: 'Security Engineering',
    description:
      'Offensive and defensive security. Vulnerability assessment, penetration testing, secure code review, and hardened infrastructure.',
  },
  {
    num: '03',
    title: 'Machine Learning Systems',
    description:
      'Data pipelines, model training, and real-time inference. From sentiment analysis to algorithmic trading systems.',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-[var(--space-section)]">
      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-6 lg:px-8"
      >
        <motion.p
          variants={fadeUp}
          className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]"
        >
          Expertise
        </motion.p>
        <motion.h2 variants={fadeUp} className="heading-section mb-16">
          Disciplines
        </motion.h2>

        {/* Numbered list */}
        <div className="space-y-0">
          {capabilities.map((cap) => (
            <motion.div
              key={cap.num}
              variants={fadeUp}
              className="group flex items-start gap-6 border-t border-[var(--color-border)] py-8 md:gap-12 md:py-10"
            >
              <span className="text-xs tabular-nums text-[var(--color-text-muted)] transition-colors duration-500 group-hover:text-[var(--color-accent)]">
                {cap.num}
              </span>
              <div>
                <h3 className="mb-2 text-lg font-semibold uppercase tracking-[0.05em] text-[var(--color-text-primary)] transition-colors duration-500 group-hover:text-[var(--color-text-primary)] md:text-xl">
                  {cap.title}
                </h3>
                <p className="max-w-[55ch] text-sm leading-relaxed text-[var(--color-text-tertiary)] transition-all duration-500 group-hover:text-[var(--color-text-secondary)]">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-[var(--color-border)]" />
        </div>
      </motion.div>
    </section>
  );
}
