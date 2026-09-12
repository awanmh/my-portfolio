import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineBars3, HiXMark, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Stack', href: '#techstack' },
  { label: 'Work', href: '#projects' },
  { label: 'Credentials', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initialize theme
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((p) => (p === 'dark' ? 'light' : 'dark'));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-ground)]/90 backdrop-blur-sm'
          : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <a
          href="#"
          className="text-sm font-medium tracking-[0.05em] text-[var(--color-text-primary)]"
        >
          awanmh
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="underline-slide text-xs uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] transition-colors duration-300 hover:text-[var(--color-text-secondary)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Setiawan_Muhammad_Portfolio.pdf"
            download="Setiawan_Muhammad_Portfolio.pdf"
            className="border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            title="Download PDF Portfolio"
          >
            PDF CV
          </a>
          <button
            onClick={toggleTheme}
            className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="/Setiawan_Muhammad_Portfolio.pdf"
            download="Setiawan_Muhammad_Portfolio.pdf"
            className="border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-primary)]"
          >
            PDF
          </a>
          <button
            onClick={toggleTheme}
            className="text-[var(--color-text-primary)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
          </button>
          <button
            className="text-[var(--color-text-primary)]"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <HiXMark size={20} /> : <HiOutlineBars3 size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--color-border-subtle)] md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text-secondary)]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/Setiawan_Muhammad_Portfolio.pdf"
                download="Setiawan_Muhammad_Portfolio.pdf"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center border border-[var(--color-accent)] bg-[var(--color-accent)]/10 px-4 py-2 text-xs font-mono uppercase tracking-wider text-[var(--color-accent)]"
              >
                Download PDF Portfolio
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
