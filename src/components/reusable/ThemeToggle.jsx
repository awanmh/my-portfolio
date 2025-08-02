// src/components/reusable/ThemeToggle.jsx
import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  );
};

export default ThemeToggle;