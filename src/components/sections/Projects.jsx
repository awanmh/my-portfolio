import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion';
import { trackEvent } from '../../lib/analytics';

export default function Projects({ projects, onProjectClick }) {
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
        <motion.h2 variants={fadeUp} className="heading-section mb-14">
          Selected Work
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
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
