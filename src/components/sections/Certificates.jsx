import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion';
import { certificates } from '../../data/portfolio';

export default function Certificates() {
  return (
    <section id="certificates" className="py-[var(--space-section)]">
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
          Credentials
        </motion.p>
        <motion.h2 variants={fadeUp} className="heading-section mb-14">
          Verified Records
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert) => (
            <motion.article
              key={cert.id}
              variants={fadeUp}
              className="card-engineered group flex flex-col overflow-hidden"
            >
              {/* Image Preview (Archival style, uncolored/grayscale until hover) */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--color-bg-ground)] border-b border-[var(--color-border)]">
                <img
                  src={cert.image}
                  alt={cert.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              {/* Data block */}
              <div className="flex flex-col flex-1 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-[var(--color-text-tertiary)]">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-sm font-semibold leading-relaxed tracking-wide text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                  {cert.name}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
