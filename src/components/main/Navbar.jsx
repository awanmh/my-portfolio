// src/components/main/Navbar.jsx
import React from 'react';
import ThemeToggle from '../reusable/ThemeToggle'; // <-- Impor

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-black">
      <div>Logo</div>
      <div>Menu</div>
      <ThemeToggle /> {/* <--- Letakkan di sini */}
    </nav>
  );
};

export default Navbar;