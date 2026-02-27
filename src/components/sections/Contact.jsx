import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../lib/motion';
import { trackEvent } from '../../lib/analytics';
import { canSubmit, markSubmitted } from '../../lib/rateLimit';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';

export default function Contact() {
  const handleSubmit = (e) => {
    if (!canSubmit()) {
      e.preventDefault();
      return;
    }
    markSubmitted();
    trackEvent('form_submit', { success: true });
  };

  return (
    <section id="contact" className="py-[var(--space-section)]">
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-3xl px-6 text-center lg:px-8"
      >
        {/* Closing line */}
        <motion.h2 variants={fadeUp} className="heading-section mb-4">
          Let&apos;s build systems
          <br />
          that don&apos;t break.
        </motion.h2>
        <motion.p variants={fadeUp} className="mb-14 text-sm text-[var(--color-text-tertiary)]">
          Have a question, opportunity, or collaboration in mind?
        </motion.p>

        {/* Form */}
        <motion.form
          variants={fadeUp}
          action="https://formspree.io/f/mnneojrp"
          method="POST"
          onSubmit={handleSubmit}
          className="mx-auto max-w-md space-y-5 text-left"
        >
          <input
            type="text"
            name="_gotcha"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border-b border-[var(--color-border)] bg-transparent py-2 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent)]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border-b border-[var(--color-border)] bg-transparent py-2 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent)]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-none border-b border-[var(--color-border)] bg-transparent py-2 text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent)]"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className="underline-slide mt-4 w-full border border-[var(--color-border)] py-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-primary)] transition-colors duration-500 hover:text-[var(--color-text-primary)]"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social */}
        <motion.div variants={fadeUp} className="mt-12 flex justify-center gap-4">
          {[
            { href: 'https://github.com/awanmh', icon: <FaGithub size={16} />, label: 'GitHub' },
            {
              href: 'https://linkedin.com/in/setiawan-muhammad',
              icon: <FaLinkedin size={16} />,
              label: 'LinkedIn',
            },
            {
              href: 'mailto:setiawanmuhammad3@gmail.com',
              icon: <HiEnvelope size={16} />,
              label: 'Email',
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-2.5 text-[var(--color-text-muted)] transition-colors duration-300 hover:text-[var(--color-text-secondary)]"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={fadeUp}
          className="mt-16 border-t border-[var(--color-border)] pt-8 text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]"
        >
          © {new Date().getFullYear()} Setiawan Muhammad
        </motion.p>
      </motion.div>
    </section>
  );
}
