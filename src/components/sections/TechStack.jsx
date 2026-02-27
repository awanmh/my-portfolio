import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion';
import { technologies } from '../../data/portfolio';

export default function TechStack() {
  return (
    <section id="techstack" className="py-[var(--space-section)]">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-6xl px-6 lg:px-8"
      >
        <motion.p
          variants={fadeUp}
          className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]"
        >
          Capabilities
        </motion.p>
        <motion.h2 variants={fadeUp} className="heading-section mb-14">
          Tech Stack
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {technologies.map((techLayer, idx) => (
            <motion.article
              key={idx}
              variants={fadeUp}
              className="card-engineered p-6 flex flex-col h-full"
            >
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--color-text-primary)]">
                {techLayer.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {techLayer.skills.map((skill, i) => (
                  <li key={i} className="group flex flex-col">
                    <span className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                      {skill}
                    </span>
                    <div className="mt-2 h-px w-full bg-[var(--color-border-subtle)]" />
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
