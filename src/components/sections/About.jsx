import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion';
import profileImage from '../../assets/profile-picture.png';

export default function About() {
  return (
    <section id="about" className="pt-[var(--space-section)] pb-[calc(var(--space-section)*1.4)]">
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-6 lg:px-8"
      >
        <div className="grid items-start gap-16 md:grid-cols-3">
          {/* Portrait */}
          <motion.div variants={fadeUp} className="flex justify-center md:justify-start">
            <div className="h-56 w-56 overflow-hidden rounded-sm border border-[var(--color-border)]">
              <img
                src={profileImage}
                alt="Setiawan Muhammad"
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              About
            </p>
            <h2 className="heading-section mb-6">Background</h2>

            <p className="mb-6 max-w-[60ch] text-base leading-[1.8] text-[var(--color-text-secondary)]">
              Informatics student with a systematic approach to engineering. I build full-stack
              applications, conduct security assessments, and develop machine learning pipelines.
              Every project is an exercise in intentional architecture.
            </p>

            {/* Info grid */}
            <div className="mb-8 grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                ['Name', 'Setiawan Muhammad'],
                ['University', 'Telkom University'],
                ['Focus', 'Informatics Engineering'],
                ['Location', 'Surabaya, Indonesia'],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    {label}
                  </p>
                  <p className="text-sm text-[var(--color-text-primary)]">{value}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-12 border-t border-[var(--color-border)] pt-6">
              {[
                ['17+', 'Projects'],
                ['7', 'Certificates'],
                ['3+', 'Years'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-semibold text-[var(--color-text-primary)]">{value}</p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
