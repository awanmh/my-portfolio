// src/components/main/Navbar.jsx
import React from 'react';
import ThemeToggle from '../reusable/ThemeToggle';

const Navbar = () => {
  // Mengubah 'path' menjadi 'href' dengan format #id
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
          {/* Logo atau Nama, menggunakan tag <a> */}
          <a
            href="#home"
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            Awan
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              // Mengganti komponen <Link> menjadi tag <a>
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

          <div className="md:hidden">
            {/* Hamburger menu untuk mobile bisa ditaruh di sini */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;