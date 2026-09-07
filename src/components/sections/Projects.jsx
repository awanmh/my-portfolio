import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion';
import { trackEvent } from '../../lib/analytics';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'backend', label: 'Backend' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'ml', label: 'AI & ML' },
  { id: 'security', label: 'Security' },
  { id: 'mobile', label: 'Mobile' },
];

export default function Projects({ projects, onProjectClick }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <section id="projects" className="py-[var(--space-section)]">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="mx-auto max-w-6xl px-6 lg:px-8"
      >
        <motion.p
          variants={fadeUp}
          className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]"
        >
          Portfolio
        </motion.p>
        <motion.h2 variants={fadeUp} className="heading-section mb-8">
          Selected Work
        </motion.h2>

        {/* Category Filters */}
        <motion.div
          variants={fadeUp}
          className="mb-12 flex flex-wrap items-center gap-2 border-b border-[var(--color-border)] pb-4"
        >
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  trackEvent('filter_category', { category: cat.id });
                }}
                className={`flex items-center gap-2 border px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] transition-all duration-300 ${
                  isActive
                    ? 'border-[var(--color-accent)] bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)]'
                    : 'border-transparent text-[var(--color-text-muted)] hover:border-[var(--color-border)] hover:text-[var(--color-text-secondary)]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[9px] tabular-nums ${
                    isActive ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              className="group cursor-pointer overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-surface)] transition-shadow duration-500 hover:shadow-hover"
              onClick={() => {
                onProjectClick(project);
                trackEvent('project_click', { id: project.id, title: project.title });
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onProjectClick(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${project.title}`}
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden bg-[var(--color-bg-elevated)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.02] group-hover:saturate-50"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                    {project.year} · {project.category}
                  </span>
                </div>

                <h3 className="underline-slide relative mb-2 inline-block text-base font-semibold text-[var(--color-text-primary)] transition-transform duration-500 group-hover:-translate-y-0.5">
                  {project.title}
                </h3>

                <p className="mb-4 line-clamp-2 max-w-[50ch] text-sm leading-relaxed text-[var(--color-text-tertiary)]">
                  {project.problem || project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] text-[var(--color-text-muted)]">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
