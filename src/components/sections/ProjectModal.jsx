import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { modalOverlay, modalContent, ease, duration } from '../../lib/motion';
import { trackEvent } from '../../lib/analytics';
import { HiXMark, HiArrowTopRightOnSquare, HiCodeBracket } from 'react-icons/hi2';

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const triggerRef = useRef(document.activeElement);

  useEffect(() => {
    if (!project) return;
    trackEvent('modal_open', { id: project.id, title: project.title });
    closeRef.current?.focus();

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      triggerRef.current?.focus();
    };
  }, [project, onClose]);

  const handleClose = (method) => {
    trackEvent('modal_close', { id: project?.id, method });
    onClose();
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          variants={modalOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => handleClose('backdrop')}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            variants={modalContent}
            transition={{ duration: duration.normal, ease }}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-[var(--color-border)] bg-[var(--color-bg-surface)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              onClick={() => handleClose('button')}
              className="absolute right-4 top-4 z-10 p-2 text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text-primary)]"
              aria-label="Close"
            >
              <HiXMark size={18} />
            </button>

            <div className="p-8 md:p-12">
              <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                {project.year} · {project.category}
              </p>
              <h2
                id="modal-title"
                className="mb-8 text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] md:text-3xl"
              >
                {project.title}
              </h2>

              <div className="mb-10 grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  {project.problem && (
                    <div>
                      <h3 className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        Problem
                      </h3>
                      <p className="max-w-[60ch] text-sm leading-[1.8] text-[var(--color-text-secondary)]">
                        {project.problem}
                      </p>
                    </div>
                  )}
                  {project.challenge && (
                    <div>
                      <h3 className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        Challenge
                      </h3>
                      <p className="max-w-[60ch] text-sm leading-[1.8] text-[var(--color-text-secondary)]">
                        {project.challenge}
                      </p>
                    </div>
                  )}
                  {project.decision && (
                    <div>
                      <h3 className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        Decision
                      </h3>
                      <p className="max-w-[60ch] text-sm leading-[1.8] text-[var(--color-text-secondary)]">
                        {project.decision}
                      </p>
                    </div>
                  )}
                  {project.impact && (
                    <div>
                      <h3 className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        Impact
                      </h3>
                      <p className="max-w-[60ch] text-sm leading-[1.8] text-[var(--color-text-secondary)]">
                        {project.impact}
                      </p>
                    </div>
                  )}
                  {!project.problem && project.longDescription && (
                    <div>
                      <h3 className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        Overview
                      </h3>
                      <p className="max-w-[60ch] text-sm leading-[1.8] text-[var(--color-text-secondary)]">
                        {project.longDescription}
                      </p>
                    </div>
                  )}
                </div>

                {project.images && project.images.length > 0 && (
                  <div className="aspect-video overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      className="h-full w-full"
                    >
                      {project.images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <img
                            src={img}
                            alt={`${project.title} ${idx + 1}`}
                            className="h-full w-full object-contain"
                            loading="lazy"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </div>

              <div className="mb-6 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.demoLink && project.demoLink !== '#' && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-slide inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text-secondary)]"
                  >
                    <HiArrowTopRightOnSquare size={14} /> Live Demo
                  </a>
                )}
                {project.githubLink && project.githubLink !== '#' && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-slide inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text-secondary)]"
                  >
                    <HiCodeBracket size={14} /> Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
