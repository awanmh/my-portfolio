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
              Informatics engineer with a disciplined focus on resilient systems. Experienced in
              production DevOps and defensive cybersecurity operations at DoubleLogic, alongside
              high-performance full-stack architecture and machine learning systems. Every project is an
              exercise in intentional, hardened design.
            </p>

            {/* Info grid */}
            <div className="mb-8 grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                ['Name', 'Setiawan Muhammad'],
                ['Role', 'DevOps & Cybersecurity Engineer'],
                ['Company', 'DoubleLogic'],
                ['Education', 'Informatics, Telkom University'],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    {label}
                  </p>
                  <p className="text-sm text-[var(--color-text-primary)]">{value}</p>
                </div>
              ))}
            </div>

            {/* Link to Dedicated Experience */}
            <div className="mb-8 border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold">
                    Current Engagement
                  </span>
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mt-0.5">
                    DoubleLogic · Solo L1/L2/L3 Cybersecurity &amp; DevOps
                  </h3>
                  <p className="text-xs text-[var(--color-text-tertiary)] mt-1">
                    Defending 7+ production Linux servers, automated disaster recovery, and offensive AI red teaming.
                  </p>
                </div>
                <a
                  href="#experience"
                  className="inline-flex shrink-0 items-center gap-1.5 border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-xs uppercase tracking-wider text-[var(--color-text-primary)] hover:border-[var(--color-accent)] transition-colors"
                >
                  <span>View Experience</span>
                  <span>↓</span>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-12 border-t border-[var(--color-border)] pt-6">
              {[
                ['28+', 'Projects'],
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
