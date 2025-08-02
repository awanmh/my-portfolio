// src/components/main/Navbar.jsx
import React from 'react';
// Hapus ThemeToggle untuk sementara jika belum dibuat/didesain ulang
import ThemeToggle from '../reusable/ThemeToggle'; 

const Navbar = () => {
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
          {/* Bagian Logo atau Nama */}
          <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">
            Awan
          </a>

          {/* Bagian Menu untuk Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                // Style khusus untuk link 'Home' agar ter-highlight
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 ${
                  link.title === 'Home' 
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.title}
              </a>
            ))}
             {/* 2. Letakkan tombol di sini, di sebelah link Contact */}
            <ThemeToggle />
          </div>

          {/* Tambahkan tombol menu untuk mobile di sini nanti */}
          <div className="md:hidden">
            {/* Hamburger Menu Icon */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;