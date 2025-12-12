// src/components/main/Navbar.jsx
import React, { useState } from 'react';
import ThemeToggle from '../reusable/ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            Awan
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 hover:bg-black dark:hover:bg-gray-700"
              >
                {link.title}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-start px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)} // tutup menu setelah klik
                className="w-full px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-300 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 hover:bg-black dark:hover:bg-gray-700"
              >
                {link.title}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
