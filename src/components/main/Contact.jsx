// src/components/main/Contact.jsx
import React from 'react';
import SectionTitle from '../reusable/SectionTitle';
import SocialLinks from '../reusable/SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle>Contact Me</SectionTitle>
        <div className="max-w-2xl mx-auto">
          {/* Formulir Kontak */}
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" // <-- GANTI DENGAN ID FORM ANDA
            method="POST" 
            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg mb-12"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                Send Message
              </button>
            </div>
          </form>

          {/* Connect With Me */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Connect With Me</h3>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;