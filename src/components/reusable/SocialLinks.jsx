// src/components/reusable/SocialLinks.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a href="https://github.com/awanmh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/setiawan-muhammad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
        <FaLinkedin size={30} />
      </a>
      <a href="https://www.instagram.com/aawanmh_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;