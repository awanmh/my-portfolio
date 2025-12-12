// src/components/reusable/SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
      {children}
    </h2>
  );
};

export default SectionTitle;