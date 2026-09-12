import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion';
import { experiences } from '../../data/portfolio';
import {
  HiOutlineShieldCheck,
  HiOutlineServer,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineArrowDownTray,
  HiChevronDown,
  HiChevronUp,
  HiOutlineBolt,
  HiOutlineMagnifyingGlass,
  HiOutlineBugAnt,
} from 'react-icons/hi2';

export default function Experience() {
  const [activeLevelTab, setActiveLevelTab] = useState('all'); // all | l1 | l2 | l3
  const [expandedId, setExpandedId] = useState('dl-cysec');

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getRoleIcon = (id) => {
    switch (id) {
      case 'dl-cysec':
        return <HiOutlineShieldCheck className="text-[var(--color-accent)]" size={20} />;
      case 'dl-devops':
        return <HiOutlineServer className="text-[var(--color-text-secondary)]" size={20} />;
      case 'freelance-sec':
        return <HiOutlineBriefcase className="text-[var(--color-text-secondary)]" size={20} />;
      case 'telkom-asst':
        return <HiOutlineAcademicCap className="text-[var(--color-text-secondary)]" size={20} />;
      default:
        return <HiOutlineBriefcase className="text-[var(--color-text-secondary)]" size={20} />;
    }
  };

  return (
    <section id="experience" className="pt-[var(--space-section)] pb-[calc(var(--space-section)*1.2)]">
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto max-w-6xl px-6 lg:px-8"
      >
        {/* Header with PDF Download CTA */}
        <motion.div variants={fadeUp} className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              02 / Track Record
            </p>
            <h2 className="heading-section">Experience</h2>
            <p className="mt-3 max-w-[55ch] text-sm text-[var(--color-text-secondary)]">
              Real-world engineering tenure spanning solo L1/L2/L3 security operations, production Linux infrastructure reliability, and high-concurrency software systems.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Setiawan_Muhammad_Portfolio.pdf"
              download="Setiawan_Muhammad_Portfolio.pdf"
              className="group inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-4 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-elevated)]"
            >
              <HiOutlineArrowDownTray size={16} className="text-[var(--color-accent)] transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Download PDF Portfolio</span>
            </a>
          </div>
        </motion.div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isSolo = exp.isSoloOperator;

            return (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                className={`relative border transition-colors duration-300 ${
                  isSolo
                    ? 'border-[var(--color-border)] bg-gradient-to-b from-[var(--color-bg-surface)] to-[var(--color-bg-ground)] shadow-lg'
                    : 'border-[var(--color-border)] bg-[var(--color-bg-surface)]'
                }`}
              >
                {/* Accent indicator for Solo Operator */}
                {isSolo && (
                  <div className="absolute top-0 left-0 h-full w-1 bg-[var(--color-accent)]" />
                )}

                <div className="p-6 md:p-8">
                  {/* Top Bar: Company, Period, Badges */}
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                        {getRoleIcon(exp.id)}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-lg font-semibold tracking-tight text-[var(--color-text-primary)]">
                            {exp.role}
                          </h3>
                          {exp.badge && (
                            <span
                              className={`border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] ${
                                isSolo
                                  ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                                  : 'border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)]'
                              }`}
                            >
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--color-text-tertiary)]">
                          <span className="font-medium text-[var(--color-text-secondary)]">{exp.company}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                          <span>•</span>
                          <span>{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:flex-col md:items-end md:justify-start">
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">
                        {exp.period}
                      </span>
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="mt-2 flex items-center gap-1 text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                        {isExpanded ? <HiChevronUp size={14} /> : <HiChevronDown size={14} />}
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {exp.summary}
                  </p>

                  {/* Solo Operator L1 / L2 / L3 Tier Matrix */}
                  {isSolo && exp.levels && (
                    <div className="mt-6 border border-[var(--color-border)] bg-[var(--color-bg-ground)]/80 p-5">
                      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-primary)]">
                              Solo SOC &amp; Red Team Operations Matrix
                            </span>
                          </div>
                          <p className="text-[11px] text-[var(--color-text-tertiary)] mt-0.5">
                            Executed the entire incident lifecycle (L1 Triage → L2 Forensics → L3 Advanced Remediation) autonomously.
                          </p>
                        </div>

                        {/* Level Filter Tabs */}
                        <div className="flex items-center gap-1 border border-[var(--color-border)] p-0.5">
                          {[
                            { key: 'all', label: 'All Levels' },
                            { key: 'l1', label: 'L1 Triage' },
                            { key: 'l2', label: 'L2 Forensics' },
                            { key: 'l3', label: 'L3 Red Team' },
                          ].map((tab) => (
                            <button
                              key={tab.key}
                              onClick={() => setActiveLevelTab(tab.key)}
                              className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider transition-colors ${
                                activeLevelTab === tab.key
                                  ? 'bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] font-bold'
                                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Levels Breakdown Grid */}
                      <div className="grid gap-4 md:grid-cols-3">
                        {/* L1 Card */}
                        {(activeLevelTab === 'all' || activeLevelTab === 'l1') && (
                          <div
                            className={`border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-4 transition-all ${
                              activeLevelTab === 'l1' ? 'md:col-span-3 border-[var(--color-accent)]/50' : ''
                            }`}
                          >
                            <div className="mb-2 flex items-center gap-2">
                              <HiOutlineBolt className="text-[var(--color-accent)]" size={16} />
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                                L1 · Triage &amp; Telemetry
                              </h4>
                            </div>
                            <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                              {exp.levels.l1.points.map((pt, idx) => (
                                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                  <span className="text-[var(--color-accent)] mt-0.5">›</span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* L2 Card */}
                        {(activeLevelTab === 'all' || activeLevelTab === 'l2') && (
                          <div
                            className={`border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-4 transition-all ${
                              activeLevelTab === 'l2' ? 'md:col-span-3 border-[var(--color-accent)]/50' : ''
                            }`}
                          >
                            <div className="mb-2 flex items-center gap-2">
                              <HiOutlineMagnifyingGlass className="text-[var(--color-accent)]" size={16} />
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                                L2 · Deep Forensics &amp; Response
                              </h4>
                            </div>
                            <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                              {exp.levels.l2.points.map((pt, idx) => (
                                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                  <span className="text-[var(--color-accent)] mt-0.5">›</span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* L3 Card */}
                        {(activeLevelTab === 'all' || activeLevelTab === 'l3') && (
                          <div
                            className={`border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-4 transition-all ${
                              activeLevelTab === 'l3' ? 'md:col-span-3 border-[var(--color-accent)]/50' : ''
                            }`}
                          >
                            <div className="mb-2 flex items-center gap-2">
                              <HiOutlineBugAnt className="text-[var(--color-accent)]" size={16} />
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                                L3 · Red Team &amp; AI Safety
                              </h4>
                            </div>
                            <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                              {exp.levels.l3.points.map((pt, idx) => (
                                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                  <span className="text-[var(--color-accent)] mt-0.5">›</span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Highlights for other roles (Expandable) */}
                  <AnimatePresence>
                    {isExpanded && exp.highlights && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 border-t border-[var(--color-border)] pt-4">
                          <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                            Key Responsibilities &amp; Engineering Contributions
                          </h4>
                          <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                            {exp.highlights.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                <span className="text-[var(--color-accent)] mt-0.5">―</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech / Competency Badges */}
                  <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[var(--color-border)] pt-4">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)] mr-1">
                      Focus:
                    </span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2 py-0.5 text-[10px] font-mono tracking-wider text-[var(--color-text-muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
