// src/components/reusable/InfoCard.jsx
import React from 'react';

const InfoCard = ({ icon, label, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start gap-4">
      <div className="text-blue-500 mt-1">{icon}</div>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-sm font-semibold text-gray-800 dark:text-white">{value}</p>
      </div>
    </div>
  );
};

export default InfoCard;