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

            {/* Professional Experience Card */}
            <div className="mb-8 border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold">
                    Professional Experience
                  </span>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                    DevOps &amp; Cybersecurity Engineer
                  </h3>
                  <p className="text-xs text-[var(--color-text-tertiary)]">
                    DoubleLogic · Production Infrastructure &amp; Security
                  </p>
                </div>
                <span className="border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  Active Tenure
                </span>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                Engineered server reliability, deployment automation, and defensive cybersecurity operations across 7+ production cloud and GPU host environments.
              </p>
              <ul className="mb-4 space-y-1.5 text-xs text-[var(--color-text-tertiary)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)]">―</span>
                  <span><strong>DevOps &amp; Infrastructure:</strong> Multi-server deployment automation, Prometheus &amp; Grafana monitoring stacks, log rotation, and automated database backup pipelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)]">―</span>
                  <span><strong>Cybersecurity &amp; AppSec:</strong> Web Vulnerability Assessments, attack surface mapping, WAF configuration &amp; virtual patch tuning, post-incident investigations, and IAM security audits.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-3">
                {['DevOps', 'Cybersecurity', 'Docker', 'Prometheus', 'Grafana', 'WAF Tuning', 'Vulnerability Assessment', 'Incident Response', 'IAM Audit'].map((tag) => (
                  <span key={tag} className="border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2 py-0.5 text-[9px] uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                    {tag}
                  </span>
                ))}
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
